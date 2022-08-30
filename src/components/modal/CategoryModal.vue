<template>
    <div class="categoryModal">
        <div class="categoryModal__fields">
            <div class="categoryModal__fields-field">
                <input
                    type="text"
                    placeholder="Please, enter the name"
                    v-model="store.name"
                >            
            </div>
        </div>
        <div class="categoryModal__buttons">
            <button class="categoryModal__buttons-button" @click="$emit('save')">Save</button>
            <button class="categoryModal__buttons-button" @click="$emit('cancel')">Cancel</button>
        </div>
    </div>
</template>

<script setup>
    import { useCategoriesStore } from '@/stores/categories'

    const store = useCategoriesStore()
    defineEmits(['save', 'cancel'])
</script>

<style lang="scss">
    .categoryModal {
        width: 300px;
        max-width: 415px;
        background: #FFFFFF;
        box-shadow: 0px 6px 50px rgba(217, 229, 255, 0.7);
        border-radius: 20px;
        padding: 40px 40px;
        top: 50%;
        left: 50%;
        position: absolute;
        
        &__fields {
            padding-bottom: 30px;

            input {
                height: 30px;
                width: 100%;
                font-size: 14px;
                line-height: 16px;
                border: 2px solid #E9F2FF;
                border-radius: 2px;
            }

            &-field {
                margin-bottom: 13px;
            }
        }

        &__buttons {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            &-button {
                margin-right: 15px;
                height: 30px;
                border-radius: 5px;
                text-transform: uppercase;
            }

            &-button:hover {
                background-color: #05A3AD;
            }
        } 
    }
</style>