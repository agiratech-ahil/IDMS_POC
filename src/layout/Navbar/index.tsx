import { BellOutlined, LogoutOutlined, MenuOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Drawer, Dropdown, Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IdmsLogo from '../../assets/idmsLogo.svg';
import './navbar.css';

const Navbar: React.FC =()=>{

  const [ drawerVisible, setDrawerVisible ] = useState<boolean>(false);
  const navigate = useNavigate();

  // mock user data
  const userInitials = 'AB';

  const handleLogout=()=>{
      navigate('/login');
  }

  const menu = (
      <Menu>
          <Menu.Item key="logout" icon={<LogoutOutlined/>} onClick={handleLogout}>
              Logout
          </Menu.Item>
      </Menu>
  );

  const showDrawer =()=>{
      setDrawerVisible(true);
  }

  const onClose=()=>{
      setDrawerVisible(false);
  }

  return (

      <Layout>
          <Header
              className='navbar-header'
              style={{
                  padding: '0 2px',
                  backgroundColor: '#ffffff',
                //   boxShadow: '0 -0.5px 4px black',
                  boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
              }}
          >

              {/* left side */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                      type='text'
                      icon={<MenuOutlined style={{ color: '#00498F', fontSize: '20px' }}/>}
                      onClick={showDrawer}
                      style={{ marginRight: '16px' }}
                      className='navbar-menu-button'
                  />
                  <img src={IdmsLogo} alt='IDMS Logo' style={{ height: '50px', marginLeft: '1rem' }} className='navbar-logo'/>
              </div>


              {/* Right side */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                      type='text'
                      icon={ <SettingOutlined style={{ color: '#A9A9A9', fontSize: '20px', marginRight: '16px' }}/> }
                  />

                  <Button
                      type='text'
                  >
                      <Badge count={4} overflowCount={99} style={{ marginRight: '16px' }}>
                          <BellOutlined style={{ color: '#A9A9A9', fontSize: '20px' }}/>
                      </Badge>
                  </Button>

                  <Dropdown overlay={menu} trigger={['click']}>
                      <Avatar
                          style={{
                              backgroundColor: '#A9A9A9',
                              color: '#36454F',
                              cursor: 'pointer',
                              fontWeight: 'bold',
                              width: '36px',
                              height: '36px',
                              fontSize: '16px',
                              marginRight: '1rem'
                          }}
                      >
                          { userInitials || <UserOutlined/> }
                      </Avatar>
                  </Dropdown>
                  
              </div>

          </Header>

          {/* drawer for sidebar */}
          {/* <Drawer>
              <DrawerSidebar/>
          </Drawer> */}

      </Layout>
  )

}

export default Navbar;


// Navbar.tsx
// import {
//     BellOutlined,
//     LogoutOutlined,
//     MenuOutlined,
//     SettingOutlined,
//     UserOutlined,
//   } from '@ant-design/icons';
//   import { Avatar, Badge, Button, Dropdown, Layout, Menu } from 'antd';
//   import { Header } from 'antd/es/layout/layout';
//   import React, { useState } from 'react';
//   import { useNavigate } from 'react-router-dom';
//   import IdmsLogo from '../../assets/idmsLogo.svg';
//   import './navbar.css';
  
//   const Navbar: React.FC = () => {
//     const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
//     const navigate = useNavigate();
  
//     // Mock user data
//     const userInitials = 'AB';
  
//     const handleLogout = () => {
//       navigate('/login');
//     };
  
//     const menu = (
//       <Menu>
//         <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
//           Logout
//         </Menu.Item>
//       </Menu>
//     );
  
//     const showDrawer = () => {
//       setDrawerVisible(true);
//     };
  
//     const onClose = () => {
//       setDrawerVisible(false);
//     };
  
//     return (
//       <Layout>
//         <Header className="navbar-header">
//           {/* Left Side */}
//           <div className="navbar-left">
//             <Button
//               type="text"
//               icon={<MenuOutlined className="navbar-menu-icon" />}
//               onClick={showDrawer}
//               className="navbar-menu-button"
//             />
//             <img src={IdmsLogo} alt="IDMS Logo" className="navbar-logo" />
//           </div>
  
//           {/* Right Side */}
//           <div className="navbar-right">
//             <Button type="text" icon={<SettingOutlined className="navbar-icon" />} />
//             <Button type="text">
//               <Badge count={4} overflowCount={99} className="navbar-badge">
//                 <BellOutlined className="navbar-icon" />
//               </Badge>
//             </Button>
  
//             <Dropdown overlay={menu} trigger={['click']} >
//               <Avatar className="navbar-avatar" >
//                 {userInitials || <UserOutlined />}
//               </Avatar>
//             </Dropdown>
//           </div>
//         </Header>
  
        
//       </Layout>
//     );
//   };
  
//   export default Navbar;
  

