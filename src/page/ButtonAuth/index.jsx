import { Button, Divider, Typography, Space } from 'antd'
const {Text } = Typography;
import Authority from "@/components/Btnauth/index"
import './index.less'
const AuthBtn = () => (
    <div className="btnHome">
        <div className="cell">
            <Space direction="vertical">
                <Text level={5}>新增按钮权限示例</Text>
                <Authority authority={'system:btn:add'}>
                    <Button type="primary" >
                    新增 Button
                    </Button>
                </Authority>
            </Space>
            <Divider></Divider>
        </div>
        <div className="cell">
            <Space direction="vertical">
                <Text level={5}>编辑按钮权限示例</Text>
                <Authority authority={'system:btn:edit'}>
                    <Button type="primary" danger>
                    编辑 Button
                    </Button>
                </Authority>
            </Space>
            <Divider></Divider>
        </div>
        <div className="cell">
            <Space direction="vertical">
                <Text level={5}>删除按钮权限示例</Text>
                <Authority authority={'system:btn:remove'}>
                    <Button type="primary" danger>
                    删除 Button
                    </Button>
                </Authority>
            </Space>
            <Divider></Divider>
        </div>
        <Text>使用方式：Authority 组件 authority 属性内容为权限标识</Text>
    </div>

)

export default AuthBtn