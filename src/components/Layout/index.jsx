import React, { useState, useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubOutlined
} from '@ant-design/icons';
import { Layout, Button, theme, Typography, Badge } from 'antd';
import SideMenu from './components/side_menu';
import { useNavigate } from 'react-router-dom';
import screenfull from 'screenfull'
import "./components/head.less"
import './index.less'
import AvatarIcon from './components/AvatarIcon'
import ThemeIcon from "./components/ThemeIcon"
import Watermark from "../Watermark/index"
import logoImg from "@/assets/svg/vite.svg"
const { Header, Sider, Content } = Layout;
const { Text } = Typography;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer,colorText },
  } = theme.useToken();
const navigate=useNavigate();


  const [fullScreen, setFullScreen] = useState(screenfull.isFullscreen)

  useEffect(() => {
    screenfull.on('change', () => {
      if (screenfull.isFullscreen) {
        setFullScreen(true)
      } else {
        setFullScreen(false)
      }
      return () => screenfull.off('change', () => { })
    })
  }, [])

  const handleFullScreen = () => {
    screenfull.toggle()
  }
  const jump = () => {
    window.open('https://github.com/jiandongzou/react-manage')
  };
  const goMsg=()=>{
    navigate("/system/notify")
  }
  return (

    <Layout >
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="left">
            <img src={logoImg} alt=""className="logoImg"/>
            <h2 className="logo-text" style={{color:colorText}}>Admin</h2>
          </div>
          <div className="right">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div className="toolbox">
              <Badge size="small" count={5} onClick={goMsg}>
                <i className="iconfont icon-Bell font-black text-[20px]" style={{color:colorText}}/>
              </Badge>
             
              <i
                onClick={handleFullScreen}
                style={{color:colorText}}
                className={[
                  'iconfont !text-[19px] font-black',
                  fullScreen ? 'icon-a-FullscreenExit' : 'icon-Fullscreen'
                ].join(' ')}

              />
              <ThemeIcon style={{color:colorText}}></ThemeIcon>
              <GithubOutlined
                title="Github"
                style={{color:colorText}}
                className="mx-[8px] flex cursor-pointer text-[20px] iconfont"
                onClick={jump}
              />
              <div className="username text-[20px] mx-[8px] iconfont" style={{color:colorText}}>admin</div>
              <AvatarIcon style={{color:colorText}}></AvatarIcon>
            </div>
          </div>
        </Header>
      </Layout >

      <Layout style={{ height: 'calc(100vh - 64px)',overflow: 'hidden' }}>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{
          background: colorBgContainer,
        }}>
          {/* <div className="demo-logo-vertical" ><Text>logo</Text></div> */}
          <SideMenu ></SideMenu>
        </Sider>


        <div className="content-lay" style={{
             overflowY:'scroll',
             width:'100%',
             display:"flex",
             alignItems:'stretch',
             flexDirection:'column',
        }}>
        <Content
          style={{
            margin: '16px',
            padding: 24,
           
            borderRadius:'10px',
            background: colorBgContainer,
          }}
        >
          
          <Watermark >
            
          </Watermark>
         
        </Content>
        </div>
      </Layout>
    </Layout>
  );
};
export default App;