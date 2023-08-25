import  defaultRequest from '@/utils/request'

export function getSystemUsers() {
    return defaultRequest.request({
        url: '/api/users',
        method: 'post'
    })
}

export function getSystemNotifys() {
    return defaultRequest.request({
        url: '/api/notifys',
        method: 'post'
    })
}
