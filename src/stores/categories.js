import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCategoriesStore = defineStore({
  id: 'categories',
  state: () => ({
    authentication: false,
    name: ''
  }),
  getters: {
    isAuthenticated: (state) => state.authentication
  },
  actions: {
    changeAuthenticationStatus(status) {
      this.authentication = status
    },
    clearName() {
      this.name = ''
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCategoriesStore, import.meta.hot))
}
