import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

import '../403/index.less'

import Error404 from '@/assets/svg/404.svg'
export default function Index() {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/home')
    }
    return (
        <div className="error-card">
            <img src={Error404} alt="" />
            <Button type="primary"  onClick={goHome}>
                回到首页
            </Button>
        </div>
    )
}
