<template>
<div
    class="card"
    @click="sd"
>
    <label class="card__container">
        <input type="checkbox">
        <span class="card__container-checkmark"></span>
    </label>
    <div class="card__image">
        <img :src="props.card.url" alt="Hmm... something went wrong. Yesterday it worked..." />
    </div>
    <div class="card__id">{{ props.card.id }}</div>
    <div class="card__title">{{ props.card.title }}</div>
</div>
</template>

<script setup>
    const props = defineProps({
        card: {
            type: Object,
            required: true,
        }
    })
</script>

<style lang="scss">
    .card {
        height: 272px;
        width: 206px;
        background: #FFFFFF;
        border: 1px solid #E1E1E1;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06);
        border-radius: 4px;
        margin-top: 10px;

        &__image {
            height: 70%;
            width: 100%;
        }

        &__id, &__title {
            margin: 0 10px;
        }

        &__id {
            font-weight: 600;
            font-size: 16px;
            line-height: 113%;
        }

        &__container {
            display: block;
            position: relative;
            margin-left: 88%;
            margin-top: 3.68%;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;

            &-checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 16px;
                width: 16px;
                border: 2px solid #8C99AF;
                border-radius: 3px;

                &:after {
                    content: "";
                    position: absolute;
                    display: none;
                    left: 6px;
                    top: 1px;
                    width: 2px;
                    height: 8px;
                    border: solid white;
                    border-width: 0 3px 3px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
            }

            input:checked ~ &-checkmark {
                background-color: #05A3AD;
            }

            input:checked ~ &-checkmark:after {
                display: block;
            }

            input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            user-select: none;
        }

        input {
            // outline: 1px solid #8C99AF;
            width: 16px;
            height: 16px;
            margin-left: 88%;
            margin-top: 3.68%;
            bottom: 87.5%;
        }
    }
</style>