import defaultRequest  from '@/utils/request'

export function login(params) {
    return defaultRequest.request({
        url: '/api/login',
        method: 'post',
        data: params
    })
}
