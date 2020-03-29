import http from './http'

const ENDPOINTS = {
    SELLERS: '/api/sellers',
    BUYERS: '/api/buyers',
    PRODUCTS: '/api/products/'
}

export default {
    sellers: {
        insert(params) {
            return http.post(ENDPOINTS.SELLERS, params)
        },
        get() {
            return http.get(ENDPOINTS.SELLERS)
        },
        getById(id) {
            return http.get(`${ENDPOINTS.SELLERS}`, id)
        },
    },
    buyers: {
        insert(params) {
            return http.post(ENDPOINTS.BUYERS, params)
        },
        get() {
            return http.get(ENDPOINTS.BUYERS)
        },
        getById(id) {
            return http.get(`${ENDPOINTS.BUYERS}/${id}`)
        },
    },
    products: {
        insert(params) {
            return http.post(ENDPOINTS.PRODUCTS, params)
        },
        get() {
            return http.get(ENDPOINTS.PRODUCTS)
        },
        getById(id) {
            return http.get(`${ENDPOINTS.PRODUCTS}/${id}`)
        },
    },
}