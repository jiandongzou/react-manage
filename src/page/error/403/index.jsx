import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import './index.less'

import Error403 from '@/assets/svg/403.svg'
export default function Index() {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/home')
    }
    return (
        <div className="error-card">
            <img src={Error403} alt="" />
            <Button type="primary"  onClick={goHome}>
                回到首页
            </Button>
        </div>
    )
}
