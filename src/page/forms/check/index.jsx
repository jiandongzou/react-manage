
import React, { useState } from 'react';
import {
    Button,
    Checkbox,
    DatePicker,
    Form,
    Input,
    Divider,
    Radio,
    Select,
    Switch,
    Col,
    Row,
    Space,
    theme
} from 'antd';
const { RangePicker } = DatePicker;
 
const dateFormat = 'YYYY/MM/DD';

const FormDemo = () => {
    const {
        token: { colorBgContainer,colorText },
      } = theme.useToken();
    const formRef = React.useRef(null);
    const[formData,setFromData]=useState(null)
    const onReset = () => {
        formRef.current?.resetFields();
        setFromData(null);
    };
    const onFinish = (values) => {
        const date = values['date'];
        const dateRange =values['dateRange'];
        console.log(dateRange);

        const data={
            ...values
        };
        if(date){
            Object.assign(data,{date:date.format(dateFormat)})
        }
        if(dateRange){
            Object.assign(data,{ dateRange:[dateRange[0].format(dateFormat),dateRange[1].format(dateFormat)]})
        }
        setFromData(data)
        //console.log(data)
      };

    return (
        <>
            <Form  ref={formRef} name="control-ref" onFinish={onFinish}>
                <Row gutter={24}>
                    <Col span={6} >
                        <Form.Item label="输入框" name="name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={6} >
                        <Form.Item label="下拉框" name="select">
                            <Select>
                                <Select.Option value="demo1">Demo1</Select.Option>
                                <Select.Option value="demo2">Demo2</Select.Option>
                                <Select.Option value="demo3">Demo3</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="日期范围" name="dateRange" >
                            <RangePicker format={dateFormat} />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item label="日期" name="date" >
                            <DatePicker format={dateFormat} style={{
                                width:'100%'
                            }}/>
                        </Form.Item>
                    </Col>
                </Row>


                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label="复选框" name="check">
                            <Checkbox.Group>
                                <Checkbox value="A">A</Checkbox>
                                <Checkbox value="B">B</Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label="单选框" name="radio">
                            <Radio.Group>
                                <Radio value="apple"> Apple </Radio>
                                <Radio value="pear"> Pear </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Form.Item label="Switch" name="switch">
                            <Switch />
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
            <div style={{
               color: colorText
            }}>提交数据:{formData?JSON.stringify(formData):'空'}</div>
        </>
    );
};
export default FormDemo;