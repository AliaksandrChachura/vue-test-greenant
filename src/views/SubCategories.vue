<template>
    <div class="subCategory">
        <category-item
            v-for="user in subCategories"
            :key="user.id"
            :itemName = 'user.title'
            :class="{ active : props.activeSubCategory == user.id }"
            @click="$emit('activateSubCategory', user.id)"
            @get-resources="$emit('getResources', user.id)"
        />
    </div>
</template>

<script setup>
    import CategoryItem from '@/components/CategoryItem.vue'
     const props = defineProps({
        subCategories: {
            type: Object,
            required: false,
        },
        activeSubCategory: {
            type: Number,
            required: false,
        }
    })

    defineEmits(['activateSubCategory', 'getResources'])
</script>

<style lang="scss">
    .subCategories {
        width: 260px;
        height: 100%;
        border-right: var(--base-border);
        overflow: scroll;

        .active {
            color: #05A3AD;
            background: #F5F7FB;
            border: var(--active-border);
        }
    }
</style>