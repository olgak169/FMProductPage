import { createStore } from 'vuex'
import dataList from '../assets/data/data.json'

export default createStore({
    state: {
        product: {},
        menuList: [],
        productAmount: 0,
        cart: null,
    },
    mutations: {
        SET_DATA(state, dataSet) {
            state.product = dataSet.product
            state.menuList = dataSet.menu
        },
        INCREASE(state) {
            if (state.productAmount < state.product.inventory) {
                state.productAmount++
            }
        },
        DECREASE(state) {
            if (state.productAmount > 0) {
                state.productAmount--
            }
        },
        DELETE_ITEM(state) {
            state.cart = null
        },
        ADD_ITEM(state, item) {
            if (item.amount > 0) {
                state.cart = item
            }
        },
    },
    actions: {
        loadData({ commit }) {
            commit('SET_DATA', dataList)
        },
    },
    modules: {},
})
