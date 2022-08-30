<template>
    <div class="authModal">
        <h1 class="authModal__title">Authentication</h1>
        <div class="authModal__fields">
            <div class="authModal__fields-field">
                <input type="text" placeholder="Please, enter your login" v-model="authModelData.login">            
            </div>
            <div class="authModal__fields-field">
                <input type="text" placeholder="Please, enter your password" v-model="authModelData.password">            
            </div>
        </div>
        <div class="authModal__buttons">
            <button class="authModal__buttons-button" @click="changeStatus">Ok</button>
            <button class="authModal__buttons-button" disabled>Cancel</button>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useCategoriesStore } from '@/stores/categories'

const authModelData = reactive({
    login: '',
    password: '',
})

const changeStatus = () => {
    if (formValidation(authModelData.login, authModelData.password)){
        categories.changeAuthenticationStatus(true)
        router.push('/catalog')
    }
}

const formValidation = (login, password) => {
    return (!!login && !!password)
}

const router = useRouter()

const categories = useCategoriesStore()
</script>

<style lang="scss">
    .authModal {
        width: 300px;
        max-width: 415px;
        background: #FFFFFF;
        box-shadow: 0px 6px 50px rgba(217, 229, 255, 0.7);
        border-radius: 20px;
        padding: 40px 40px;
        margin: 50%;

        &__title {
            color: #30507D;
            font-weight: 500;
            font-size: 20px;
            line-height: 23px;
            padding-bottom: 30px;
        }
        
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
                background-color: #0D6cf2;
            }
        } 
    }
</style>