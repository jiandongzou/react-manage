import defaultRequest  from '@/utils/request'

export function getMenuList() {
    return defaultRequest.request({
        url: '/api/menu',
        method: 'get'
    })
}

export function getMenuBtnAuthList(params) {
    return defaultRequest.request({
        url: '/api/btnAuthList',
        method: 'post',
        data: params
    })
}
