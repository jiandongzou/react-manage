import { message } from 'antd'
//const {message} = App.useApp();
const success = (content, duration = 3) => {
    message.success(content, duration || 3)
}

const error = (content, duration = 3) => {
    message.error(content, duration || 3)
}

const warning = (content, duration = 3) => {
    message.warning(content, duration || 3)
}

const info = (content, duration = 3) => {
    message.warning(content, duration || 3)
}

export function useMessage() {
    return {
        uesSuccessMsg: success,
        uesErrorMsg: error,
        uesWarningMsg: warning,
        uesInfoMsg: info
    }
}
