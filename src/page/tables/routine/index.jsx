
import React, { useState } from 'react';
import { DeleteOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons'
import {
    Button,
    DatePicker,
    Form,
    Input,
    Divider,
    Col,
    Row,
    Space,
    Table,
    Tooltip
} from 'antd';
import "./index.less"
const dateFormat = 'YYYY/MM/DD';
import Setting from './components/setting'
const RenderTimes = () => {
    const timesRef = React.useRef(0);
    timesRef.current += 1;
    return <span>{timesRef.current}</span>;
};
const shouldCellUpdate = (record, prevRecord) => record !== prevRecord;
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        shouldCellUpdate,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        shouldCellUpdate,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        shouldCellUpdate,
        render: (addr) => (
            <>
                {addr}
                <RenderTimes />
            </>
        ),
    },
];
function genData(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
        });
    }
    return data;
}
const FormDemo = () => {
    //表单相关
    const formRef = React.useRef(null);
    const [formData, setFromData] = useState(null)
    const onReset = () => {
        formRef.current?.resetFields();
        setFromData(null);
    };
    const onFinish = (values) => {
        const date = values['date'];
        const data = {
            ...values
        };
        if (date) {
            Object.assign(data, { date: date.format(dateFormat) })
        }
        setFromData(data)
    };
    //表格相关
    const [data, setData] = useState(genData(50));
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const [colu, setColu] = useState(columns || [])

    const setHideColumns = (values) => {
        colu.forEach((item) => {
            if (!values.includes(item.dataIndex)) {
                item['className'] = 'hidden'
            } else {
                item['className'] = ''
            }
        })
        setColu([...colu])
    }

    return (
        <>
            <Form ref={formRef} name="control-ref" onFinish={onFinish}>
                <Row gutter={24}>
                    <Col span={6} >
                        <Form.Item label="输入框1" name="name1" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6} >
                        <Form.Item label="输入框2" name="name2" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="输入框3" name="name3" >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item label="日期" name="date" >
                            <DatePicker format={dateFormat} style={{
                                width: '100%'
                            }} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label="输入框4" name="name4" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="输入框5" name="name5" >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item label="输入框6" name="name6" >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item >
                            <Space>
                                <Button type="primary" htmlType="submit">
                                    提交
                                </Button>
                                <Button htmlType="button" onClick={onReset}>
                                    重置
                                </Button>
                            </Space>
                        </Form.Item>
                    </Col>
                </Row>

            </Form>
            <Divider />
            <div className="tablecon">
                <div className="table_header">
                    <Space>
                        <Button
                            key="button2"
                            type="primary"
                            icon={<PlusOutlined />}
                        >
                            导入文件
                        </Button>
                        <Button key="button3" type="primary" danger icon={<DeleteOutlined />}>
                            批量删除
                        </Button>
                    </Space>
                  <Setting columns={columns} settingDisable={['name']} setColumns={setHideColumns}>
                    <Tooltip title="列设置">
                            <SettingOutlined className="tableSeting"></SettingOutlined>
                        </Tooltip>
                    </Setting>
                </div>
                <Table className="tablebox" rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        </>
    );
};
export default FormDemo;