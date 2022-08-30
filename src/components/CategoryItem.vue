<template>
    <div
        class="categoryItem"
    >
        <div
            class="categoryItem__description"
            @click.prevent="$emit('getResources')"
        >
            {{ props.itemName }}
        </div>
        <img
            src="@/assets/images/Edit_Pencil.svg"
            alt="image"
            @click.prevent="$emit('edit')"
        >
    </div>
</template>

<script setup>
    import categoryModal from '@/components/modal/CategoryModal.vue'
    const props = defineProps({
        itemName: {
            type: String,
            default: 'Item text',
            required: true,
        }
    })

    defineEmits(['edit', 'getResources'])
</script>

<style lang="scss">
    .categoryItem {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        color: #2D5A81;
        font-size: 14px;
        font-weight: 500;
        line-height: 30px;
        border-bottom: var(--base-border);

        &__description {
            width: 198px;
            padding-left: 20px;
        }

        img {
            float: right;
            padding-right: 18px;
        }
    }
</style>