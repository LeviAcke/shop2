import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 10000,
    })
    instance.interceptors.request.use(config => {

        return config
    },
        // eslint-disable-next-line no-unused-vars
        err => {

        })

    instance.interceptors.response.use(res => {
        return res.data ? res.data : res
    },
        // eslint-disable-next-line no-unused-vars
        err => {

        }
    )

    return instance(config)
}