import { Layout } from 'antd';
import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;


const PrimaryLayout: React.FC =()=>{


    return (
        <Layout style={{ height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor:'#ffffff' }}>
            
            <Navbar/>
            <Content style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Outlet/>
            </Content>
            
        </Layout>
    )

}

export default PrimaryLayout;