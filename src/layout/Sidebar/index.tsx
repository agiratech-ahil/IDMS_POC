import React, { useState, useEffect, useRef } from 'react';
import { Layout, Menu, Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import documentsIconDefault from '../../assets/threeLayersDefault.svg';
import documentsIconActive from '../../assets/threeLayersActive.svg';
import dashboardIconDefault from '../../assets/statisticsDefault.svg';
import dashboardIconActive from '../../assets/statisticsActive.svg';
import taskManagementDefault from '../../assets/doubleCheckboxesDefault.svg';
import taskManagementActive from '../../assets/doubleCheckboxesActive.svg';
import userManagementDefault from '../../assets/userSettingsDefault.svg';
import userManagementActive from '../../assets/userSettingsActive.svg';
import { DashboardOutlined, FileTextOutlined, HistoryOutlined, LeftOutlined, RightOutlined, SettingOutlined, SolutionOutlined, TeamOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';


const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar: React.FC =()=>{

    const location = useLocation();
    const navigate = useNavigate();
    const [ collapsed, setCollapsed ] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    

    const getSelectedKeys=()=>{
        const path = location.pathname;
        if( path === '/' ) return ['dashboard'];
        if( path.startsWith('/documents') ) return ['documents'];
        if( path.startsWith('/task') ) return ['taskManagement'];
        if( path.startsWith('/administration') ) return ['administration'];
        return [];
    }

    const getOpenKeys=()=>{
        const path = location.pathname;
        if( path.startsWith('/tasks') ) return ['taskManagement'];
        if( path.startsWith('/administration') ) return ['administration'];
        return [];
    }

    const [ selectedKeys, setSelectedKeys ] = useState<string[]>(getSelectedKeys());
    const [ openKeys, setOpenKeys ] = useState<string[]>(getOpenKeys());

    useEffect(()=>{

        const handleClickOutside = ( event: MouseEvent ) => {
            if( sidebarRef.current && !sidebarRef.current.contains( event.target as Node ) ){
                setCollapsed(true);
            }
        };

        document.addEventListener( 'mousedown', handleClickOutside );
        return ()=>{
            document.removeEventListener( 'mousedown', handleClickOutside );
        };

    },[]);

    const handleMenuClick = ( e: any )=>{
        const { key, keyPath } = e;
        setSelectedKeys([key]);
        if( keyPath.length === 1 ){
            navigate(getRouteByKey(key));
        }
    }

    const handleSubMenuClick = ( e: any ) => {
        const { key } = e;
        navigate(key);
    };

    const getRouteByKey = ( key: string ) => {
        switch(key){
            case 'dashboard':
                return '/';
            case 'documents':
                return '/documents';
            case 'taskManagement':
                return '/tasks';
            case 'administration':
                return '/administration';
            default:
                return '/';
        }
    }

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    }

    return (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={250}
          className="sidebar"
          ref={sidebarRef}
          breakpoint="lg"
          collapsedWidth={80}
          trigger={null}
          style={{
            height: '100%',
            // position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo" style={{ height: '64px', margin: '16px', textAlign: 'center' }}>
            <img
              src={collapsed ? dashboardIconDefault : dashboardIconActive}
              alt="Logo"
              style={{ width: '40px', height: '40px' }}
            />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onOpenChange={(keys) => setOpenKeys(keys as string[])}
            onClick={handleMenuClick}
          >
            <Menu.Item key="dashboard" icon={<DashboardOutlined/>}>
              <span onClick={() => navigate('/')}>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="documents" icon={<FileTextOutlined/>}>
              <span onClick={() => navigate('/documents')}>Documents</span>
            </Menu.Item>
            <SubMenu key="taskManagement" icon={<UnorderedListOutlined/>} title="Task Management">
              <Menu.Item key="/tasks/my_tasks" icon={<SolutionOutlined/>} onClick={handleSubMenuClick}>
                My Tasks
              </Menu.Item>
              <Menu.Item key="/tasks/all_tasks" icon={<UnorderedListOutlined/>} onClick={handleSubMenuClick}>
                All Tasks
              </Menu.Item>
              <Menu.Item key="/tasks/completed_tasks" icon={<HistoryOutlined/>} onClick={handleSubMenuClick}>
                Completed Tasks
              </Menu.Item>
              <Menu.Item key="/tasks/task_history" icon={<HistoryOutlined/>} onClick={handleSubMenuClick}>
                Task History
              </Menu.Item>
            </SubMenu>
            <SubMenu key="administration" icon={<UserOutlined/>} title="Administration">
              <Menu.Item key="/administration/user_management" icon={<UserOutlined/>} onClick={handleSubMenuClick}>
                User Management
              </Menu.Item>
              <Menu.Item key="/administration/roles_permissions" icon={<SettingOutlined/>} onClick={handleSubMenuClick}>
                Roles and Permissions
              </Menu.Item>
              <Menu.Item key="/administration/teams" icon={<TeamOutlined/>} onClick={handleSubMenuClick}>
                Teams
              </Menu.Item>
              <Menu.Item key="/administration/department" icon={<SolutionOutlined />} onClick={handleSubMenuClick}>
                Department
              </Menu.Item>
              <Menu.Item key="/administration/task_description" icon={<FileTextOutlined />} onClick={handleSubMenuClick}>
                Task Description
              </Menu.Item>
              <Menu.Item key="/administration/user_groups" icon={<TeamOutlined />} onClick={handleSubMenuClick}>
                User Groups
              </Menu.Item>
            </SubMenu>
          </Menu>
          <Button
            type="primary"
            onClick={toggleCollapse}
            style={{
              position: 'absolute',
              bottom: 20,
              left: collapsed ? '50%' : '80%',
              transform: 'translateX(-50%)',
            }}
          >
            {collapsed ? <RightOutlined/> : <LeftOutlined/>}
          </Button>
        </Sider>
    );
    

}

export default Sidebar;

