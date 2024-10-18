import { BellOutlined, LogoutOutlined, MenuOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Drawer, Dropdown, Layout, Menu, Switch } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IdmsLogo from '../../assets/idmsLogo.svg';
import styles from './Navbar.module.css';  // Import CSS Module
import { useTheme } from '../../ThemeContext';

const Navbar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const { isDarkMode, toggleTheme } = useTheme();

  const userInitials = 'AB';

  const handleLogout = () => {
    navigate('/login');
  };

  const menu = (
    <Menu>
      <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <Layout>
      <Header className={styles.navbarHeader} style={{ backgroundColor: isDarkMode ? '#343434' : '#ffffff' }}>
        {/* Left side */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            type="text"
            icon={<MenuOutlined style={{ color: '#00498F', fontSize: '20px' }} />}
            onClick={showDrawer}
            style={{ marginRight: '16px' }}
            className={styles.navbarMenuButton}
          />

          <img
            src={IdmsLogo}
            alt="IDMS Logo"
            className={styles.navbarLogo}
          />
        </div>

        {/* Right side */}
        <div className={styles.navbarRight}>
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
            style={{ marginRight: '1rem' }}
          />

          <Button type="text">
            <SettingOutlined className={styles.navbarIcon} />
          </Button>

          <Button type="text">
            <Badge count={4} overflowCount={99} style={{ marginRight: '16px' }}>
              <BellOutlined className={styles.navbarIcon} />
            </Badge>
          </Button>

          <Dropdown overlay={menu} trigger={['click']}>
            <Avatar className={styles.navbarAvatar}>
              {userInitials || <UserOutlined />}
            </Avatar>
          </Dropdown>
        </div>
      </Header>

      {/* Sidebar Drawer */}
      <Drawer visible={drawerVisible} onClose={onClose}>
        {/* Sidebar Content Here */}
      </Drawer>
    </Layout>
  );
};

export default Navbar;


// import { BellOutlined, LogoutOutlined, MenuOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
// import { Avatar, Badge, Button, Drawer, Dropdown, Layout, Menu, Switch } from 'antd';
// import { Header } from 'antd/es/layout/layout';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import IdmsLogo from '../../assets/idmsLogo.svg';
// import './navbar.css';
// import { useTheme } from '../../ThemeContext';

// const Navbar: React.FC =()=>{

//   const [ drawerVisible, setDrawerVisible ] = useState<boolean>(false);
//   const navigate = useNavigate();

//   const { isDarkMode, toggleTheme } = useTheme();

//   // mock user data
//   const userInitials = 'AB';

//   const handleLogout=()=>{
//       navigate('/login');
//   }

//   const menu = (
//       <Menu>
//           <Menu.Item key="logout" icon={<LogoutOutlined/>} onClick={handleLogout}>
//               Logout
//           </Menu.Item>
//       </Menu>
//   );

//   const showDrawer =()=>{
//       setDrawerVisible(true);
//   }

//   const onClose=()=>{
//       setDrawerVisible(false);
//   }
  
  
//   return (

//     <Layout>
//         <Header
//             className='navbar-header'
//             style={{
//                 padding: '0 2px',
//                 // backgroundColor: '#ffffff',
//                 boxShadow: '0 -0.5px 4px black',
//                 //   borderBottom: '2px solid black',
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center'
//             }}
//         >

//             {/* left side */}
//             <div style={{ display: 'flex', alignItems: 'center' }}>

//                 <Button
//                     type='text'
//                     icon={<MenuOutlined style={{ color: '#00498F', fontSize: '20px' }}/>}
//                     onClick={showDrawer}
//                     style={{ marginRight: '16px' }}
//                     className='navbar-menu-button'
//                 />

//                 <img src={IdmsLogo} alt='IDMS Logo' style={{ height: '50px', marginLeft: '1rem' }} className='navbar-logo'/>

//             </div>


//             {/* Right side */}
//             <div style={{ display: 'flex', alignItems: 'center' }}>

//                 <Switch
//                     checked={isDarkMode}
//                     onChange={toggleTheme}
//                     checkedChildren="Dark"
//                     unCheckedChildren="Light"
//                     style={{ marginRight: '1rem' }}
//                 />

//                 <Button
//                     type='text'
//                     icon={ <SettingOutlined style={{ color: '#A9A9A9', fontSize: '20px', marginRight: '16px' }}/> }
//                 />

//                 <Button
//                     type='text'
//                 >
//                     <Badge count={4} overflowCount={99} style={{ marginRight: '16px' }}>
//                         <BellOutlined style={{ color: '#A9A9A9', fontSize: '20px' }}/>
//                     </Badge>
//                 </Button>

//                 <Dropdown overlay={menu} trigger={['click']}>
//                     <Avatar
//                         style={{
//                             backgroundColor: '#A9A9A9',
//                             color: '#36454F',
//                             cursor: 'pointer',
//                             fontWeight: 'bold',
//                             width: '36px',
//                             height: '36px',
//                             fontSize: '16px',
//                             marginRight: '1rem'
//                         }}
//                     >
//                         { userInitials || <UserOutlined/> }
//                     </Avatar>
//                 </Dropdown>

//             </div>

//         </Header>

//         {/* drawer for sidebar */}
//         {/* <Drawer>
//         <DrawerSidebar/>
//         </Drawer> */}

//     </Layout>

//   );

// }

// export default Navbar;

