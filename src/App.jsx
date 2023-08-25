import { useState,useEffect } from 'react'
import { HashRouter,useLocation,useRoutes,useNavigate } from 'react-router-dom'

import { LoadingOutlined } from '@ant-design/icons'
import { Spin, ConfigProvider, theme } from 'antd'
import asyncMenuAction from "@/redux/modules/menu/action"
import {useLazy,Router} from '@/router/index'
import './App.css'
import '@/assets/aliFont/iconfont.css'
import { store } from '@/redux/index.js'
import { connect,useSelector} from 'react-redux';
//import { setupProdMockServer } from '@/mock/_index';
// if (process.env.NODE_ENV === 'production') {
//   console.log(11111);
//   setupProdMockServer();
// }

// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale

import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

function App(props) {
  const {user,asyncMenuAction}=props;
  const [loading, setLoading] = useState(false);
  const Navigate=useNavigate();
  const currentTheme = useSelector((state) => state.theme.status);
  useEffect(()=>{
    if(location.hash!="login" && user.name){
      getMenu()
    }else{
      Navigate("/login")
    }
  },[user.name])
  const getMenu=async()=>{
    setLoading(true)
    await asyncMenuAction();
    const menuList=store.getState().menu.menuList;
    useLazy(menuList);
    //setRoutes([])
    setLoading(false)
  }
  return (
    <ConfigProvider
    locale={locale}
      theme={{
        algorithm: currentTheme?theme.defaultAlgorithm:theme.darkAlgorithm
      }}
    >
      <Spin spinning={loading} className="root-loading" indicator={antIcon} tip="Loading">

        <Router />
      </Spin>
    </ConfigProvider>
  )
}

export default connect((state)=>({
  user:state.user,
  menu:state.menu
 // themeStatus:state.theme
}),{
  asyncMenuAction
})(App)
