import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Popover } from 'antd'


const CheckboxGroup = Checkbox.Group

const Settings = ({ children, columns, setColumns, settingDisable }) => {
    const plainOptions = columns.map((item) => ({
        label: item.title,
        value: item.dataIndex,
        disabled: settingDisable.includes(item.dataIndex)
    }))
    const keyOptions = columns.map((item) => item.dataIndex)

    const defaultCheckedList = columns.map((item) => item.dataIndex)

    const [checkedList, setCheckedList] = useState(defaultCheckedList)
    const [indeterminate, setIndeterminate] = useState(false)
    const [checkAll, setCheckAll] = useState(plainOptions.length == defaultCheckedList.length)

    const onChange = (list) => {
        setCheckedList(list)
        setIndeterminate(!!list.length && list.length < plainOptions.length)
        setCheckAll(list.length === plainOptions.length)
    }

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? keyOptions : settingDisable)
        setIndeterminate(!e.target.checked ? !!settingDisable.length : false)
        setCheckAll(e.target.checked)
    }

    const reset = () => {
        setCheckAll(defaultCheckedList.length == plainOptions.length)
        setIndeterminate(false)
        setCheckedList(defaultCheckedList)
    }

    useEffect(() => {
        setColumns(checkedList)
    }, [checkedList])

    const text = (
        <div className="set-header">
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                全选
            </Checkbox>
            <Button type="link" onClick={reset}>
                重置
            </Button>
        </div>
    )
    const content = <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    return (
        <Popover
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
            className="mu-popover"
            placement="bottomRight"
            title={text}
            content={content}
            trigger="click"
        >
            {children}
        </Popover>
    )
}

export default Settings
