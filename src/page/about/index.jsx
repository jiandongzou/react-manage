import React from 'react'
import { Descriptions } from 'antd'

const Index= () => (
    <div className="card">
        <Descriptions title="Mu Admin" bordered>
            <Descriptions.Item label="GitHub" span={3}>
                <a
                    style={{ color: '#1890ff' }}
                    href="https://github.com/jiandongzou/react-manage"
                    target="_blank"
                    rel="noreferrer"
                >
                   https://github.com/jiandongzou/react-manage
                </a>
            </Descriptions.Item>
            <Descriptions.Item label="预览地址" span={3}>
                <a
                    style={{ color: '#1890ff' }}
                    href="https://jiandongzou.github.io/react-manage/"
                    target="_blank"
                    rel="noreferrer"
                >
                    预览站点
                </a>
            </Descriptions.Item>
            <Descriptions.Item label="PackAge">
                react: ^18.2.0
                <br />
                react-router-dom: ^6.14.2
                <br />
                redux: ^4.2.1
                <br />
                node: ^16.20.1
                <br />
                antd: ^5.7.3
                <br />
                vite: ^4.4.5
            </Descriptions.Item>
        </Descriptions>
    </div>
)

export default Index
