import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate,useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const addIcon = (name) => <i className={`iconfont ${name}  font-black`} />
let rootSubmenuKeys = [];
const formatList=(menuList)=>{
  const menuArr = [];
  menuList.forEach(item => {
    let menu = {};
    if(item.children && item.children.length>0){
      menu=item.children[0];
      formatList(item.children);
    };
   
    if(item.element=="Layout" && item.children.length>0){
      rootSubmenuKeys.push("/"+item.children[0].path);
    }
    menuArr.push(menu)
  })
  return menuArr
};
let items=[];
const formatMenu = (menuList,path='') => {
  const menuArr = [];
  menuList.forEach(item => {
    let menu = {};
    let chidlren = item.children ? item.children : null;
    let title = item.meta?.title
    menu = chidlren ? getItem(title,`${path}/${item.path}`, addIcon(item.icon), formatMenu(chidlren,"/"+item.path)): getItem(title,`${path}/${item.path}`, addIcon(item.icon));
    menuArr.push(menu);
  });
  return menuArr
};


// submenu keys of first level

const App = (props) => {
  const { menuList } = props;
  const {pathname}=useLocation();
  const [openKeys, setOpenKeys] = useState([]);
  const urlArr= pathname.split("/")
  console.log("/"+urlArr[1]);
  const [defaultSelectedKeys,setDefaultSelectedKeys]= useState([pathname])
  
  const list = formatList(menuList);
  items=formatMenu(list);
  rootSubmenuKeys=[...new Set(rootSubmenuKeys)]
  useEffect(()=>{
    setOpenKeys(["/"+urlArr[1]])
  },[menuList])
  
  const onOpenChange = (keys) => {
  // console.log('key:'+keys)
  // console.log('openKeys:'+`${openKeys}`);
   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
       setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const navigate=useNavigate()
  const onClick = (node) => {
    navigate(node.key)
  }

  return (
    <Menu
     style={{flex:1}}
    
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      openKeys={openKeys}
      onClick={onClick}
      onOpenChange={onOpenChange}
      items={items}
    />
  )
}
export default connect((state) => state.menu, {

})(App)

