// js and jsx is same but jsx is use to indicate the file is react js component

import React from 'react'
import {useState,useEffect} from "react"
import { Button,menu,Avatar,Typography, Menu,Dropdown,Space} from 'antd'
import {Link} from "react-router-dom";
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,DownOutlined,MenuOutlined} from '@ant-design/icons'

const Navbarr1 = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" className='logoimage' size="large"></Avatar>
            <Typography.Title level={2} className='logo'>
                <Link to="/Cryptohunt/">Cryptohunt</Link>
            </Typography.Title>
            <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined style={{color:"white"}}/></Button>
          </div>
          {/* Link: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.
          with link we can directly able to shift to the particular component without using any eventhandler*/}

          {/* whenever particular link get trigger it sends the triggered information to the routes and routes check the info of route and switch the component from one component to other */}

          {/* this links sends the to info to the router and on basis of this router route the component */}
          {/* link is use to trigger */}
            
            {activeMenu && <div>
            <Menu theme='dark'>
              <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/Cryptohunt/"/>Home
              </Menu.Item>
              <Menu.Item icon={<FundOutlined/>}>
              <Link to="/cryptocurrencies"/>Cryptocurrencies
              </Menu.Item>
              {/* <Menu.Item icon={<MoneyCollectOutlined/>}>
              <Link to="/exchange"/>Exchanges
              </Menu.Item> */}
              <Menu.Item icon={<BulbOutlined/>}>
              <Link to="/news"/>News
              </Menu.Item>
            </Menu>
        </div>}
    </div> 
  )
}


export  default Navbarr1;
