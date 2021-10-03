import axios from "axios"

const instanceAxios = axios.create({
    baseURL: 'http://localhost:5000/api/'
});

export const products = {
    async getAll() {
        const {
            data
        } = await instanceAxios.get('products')
        return data
    },
    async getOne(id) {
        const {
            data
        } = await instanceAxios.get(`products/${id}`)
        return data
    },
    async sortPriceAsc() {
        const {
            data
        } = await instanceAxios.get(`products/price-asc`)
        return data
    },
    async sortPriceDesc() {
        const {
            data
        } = await instanceAxios.get(`products/price-desc`)
        return data
    }
}

export const cartAxios = {
    async get() {
        const {
            data
        } = await instanceAxios.get(`get-cart`)
        return data
    },

    async add(id) {
        const {
            data
        } = await instanceAxios.post(`add-to-cart/${id}`)
        return data
    },
    async delete(id) {
        const {
            data
        } = await instanceAxios.delete(`delete-to-cart/${id}`)
        return data
    },
    async deleteAll(id) {
        const {
            data
        } = await instanceAxios.delete(`delete-all-to-cart/${id}`)
        return data
    },
    async getSingleCount(id) {
        const {
            data
        } = await instanceAxios.get(`get-single-count-cart/${id}`)
        return data
    }
}