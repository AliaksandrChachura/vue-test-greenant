<template>
    <div class="categories">
        <div
            class="categories__category"
        >
            <category-header
                :headerName="categoriesData.categoriesName" 
                @open-modal="categoriesData.isCategoriesModalOpen = true"
            />
            <div>
                <category-item
                    v-for="post in categoriesData.categories"
                    :key="post.id"
                    :itemName = 'post.title'
                    :class="{ active : categoriesData.activeCategory == post.id }"
                    @click="activateCategory(post.id)"
                    @get-resources="getSubCategories(post.userId)"
                    @edit="edit(post)"
                />
            </div>
            <category-modal
                v-if="categoriesData.isCategoriesModalOpen"
                @save="saveCategory"
                @cancel="cancel"
            />
            <category-modal
                v-if="categoriesData.isCategoriesEditModalOpen"
                @save="updateCategory"
                @cancel="cancel"
            />
        </div>
        <div class="categories__subCategory">
            <category-header
                :headerName="categoriesData.subCategoriesName"
            />
            <router-view
                :sub-categories="categoriesData.subCategories"
                :active-sub-category="categoriesData.activeSubCategory"
                @activate-sub-category="activateSubCategory"
                @get-resources="getGoods"
            />
        </div>
        <div class="categories__equipment">
            <category-header
                :headerName="categoriesData.equipmentName"
            />
            <div class="categories__equipment-cards">
                <router-view
                    :goods="categoriesData.goods"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted, computed, reactive } from 'vue'
    import { useRouter, RouterView } from 'vue-router'
    import { useCategoriesStore } from '@/stores/categories'
    import CategoryHeader from '@/components/CategoryHeader.vue'
    import CategoryItem from '@/components/CategoryItem.vue'
    import CategoryModal from '@/components/modal/CategoryModal.vue'
    import Card from '@/components/Card.vue'
    import SubCategory from '@/views/SubCategories.vue'
    import { uid } from 'uid';
    import {
        apiGetPosts,
        apiGetAlbums,
        apiGetPhotos,
        apiCreatePost,
        apiUpdatePost,
    } from '@/api';

    const store = useCategoriesStore()

    const categoriesData = reactive({
        categories: null,
        subCategories: null,
        goods: null,
        categoriesName: 'Categories',
        subCategoriesName: 'Subcategories',
        equipmentName: 'Equipment list',
        activeCategory: null,
        activeSubCategory: null,
        isCategoriesModalOpen: false,
        isCategoriesEditModalOpen: false,
        categoryJSON: null
    })

    onMounted( async () => {
        try {
            getCategories()
        } catch(e) {
            console.log(e)
        }
    })

    const getCategories = async () => {
        try {
            categoriesData.categories = await apiGetPosts()
            categoriesData.subCategories = null
            categoriesData.goods = null
        } catch(e) {
            console.log(e)
        }
    }

    const getSubCategories = async (userId) => {
        try {
            categoriesData.subCategories = await apiGetAlbums(userId)
            categoriesData.goods = null
        } catch(e) {
            console.log(e)
        }
    }

    const getGoods = async (albumId) => {
        try {
            categoriesData.goods = await apiGetPhotos(albumId)
        } catch(e) {
            console.log(e)
        }
    }

    const activateCategory = (id) => {
        categoriesData.activeCategory = id
        categoriesData.activeSubCategory = null
        router.push({
            name: 'subCategories',
            params: { catId: id }
        })
    }

    const activateSubCategory = (id) => {
        categoriesData.activeSubCategory = id
        router.push({
            name: 'goods',
            params: { subcatId: id }
        })
    }

    const edit = obj => {
        categoriesData.categoryJSON = obj
        categoriesData.isCategoriesEditModalOpen = true
    }

    const updateCategory = () => {
        const config = {
            ...categoriesData.categoryJSON,
            title: store.name
        }
        try {
            apiUpdatePost(config.id, config)
            getCategories()
            categoriesData.isCategoriesEditModalOpen = false
            store.clearName()
            categoriesData.categoryJSON = null
            categoriesData.activeCategory = null
        } catch(e) {
            console.log(e)
        }
    }

    const saveCategory = () => {
        const config = {
            id: uid(),
            title: store.name,
            body: store.name,
            userId: 1
        }
        apiCreatePost(config)
        getCategories()
        categoriesData.isCategoriesModalOpen = false;
        store.clearName()
    }

    const cancel = () => {
        categoriesData.isCategoriesModalOpen = false;
        categoriesData.isCategoriesEditModalOpen = false;
        store.clearName()
    }

    const router = useRouter()
</script>

<style lang="scss">
    .categories {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 0;

        &__category {
            width: 260px;
            height: 100%;
            border-right: var(--base-border);
            overflow: scroll;
        }

        &__subCategory {
            width: 260px;
            height: 100%;
            border-right: var(--base-border);
            overflow: scroll;
        }

        &__equipment {
            width: 670px;
            height: 100%;
            overflow: scroll;

            &-cards {
                margin-left: 10px;
                margin-right: 10px;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                flex-wrap: wrap;
            }
        }

        .active {
            color: #05A3AD;
            background: #F5F7FB;
            border: 1px solid #05A3AD;
        }
    }
</style>