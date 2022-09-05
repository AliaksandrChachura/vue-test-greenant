<template>
    <div
        class="categoryHeader"
    >
        <span>{{ props.headerName }}</span>
        <img
            src="@/assets/images/Btn_variable.svg"
            alt="image"
            @click="$emit('openModal')"
        >
    </div>
</template>

<script setup>
    const props = defineProps({
        headerName: {
            type: String,
            default: 'Item text',
            required: true,
        }
    })
    defineEmits(['openModal'])
</script>

<style lang="scss">
    .categoryHeader {
        display: flex;
        align-items: center;
        color: #2D5A81;
        font-size: 14px;
        font-weight: 500;
        line-height: 40px;
        border-bottom: var(--base-border);
        width: 260px;

        span {
            padding-left: 20px;
            padding-right: 114px;
            font-family: 'Poppins';
        }

        img {
            cursor: pointer;
        }
    }
</style>