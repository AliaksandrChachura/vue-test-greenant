<template>
    <div class="equipments">
        <card
            v-for="good in props.goods"
            :key="good.id"
            :card="good"
        />
    </div>
</template>

<script setup>
    import Card from '@/components/Card.vue'

    const props = defineProps({
        goods: {
            type: Object,
            required: false,
        },
    })
</script>

<style lang="scss">
     .equipments {
        margin-left: 10px;
        margin-right: 10px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>