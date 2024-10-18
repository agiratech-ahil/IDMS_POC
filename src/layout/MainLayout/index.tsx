// import { Layout } from 'antd';
// import React from 'react';
// import Navbar from '../Navbar';
// import { Outlet } from 'react-router-dom';
// import Sidebar from '../Sidebar';
// import { StyledContent } from './MainContentStyle';
// import { useTheme } from '../../ThemeContext';

// const { Content } = Layout;


// const PrimaryLayout: React.FC =()=>{

//     const { isDarkMode } = useTheme();

//     return (
//         <Layout style={{ height: '100vh', width: '100vw', overflow: 'hidden',  }}>
//             {/* backgroundColor:'#ffffff' */}
//             <Navbar/>

//             <Layout style={{ flexDirection: 'row', height: '100%' }}>
//                 <Sidebar/>
//                 {/* <Content style={{ display: 'flex', flexDirection: 'column'  }}>
//                     <Outlet/>
//                 </Content> */}
//                 <StyledContent isDarkMode={isDarkMode}>
//                     <Outlet/>
//                 </StyledContent>
//             </Layout>
        
//         </Layout>
//     )

// }

// export default PrimaryLayout;


// PrimaryLayout.tsx

import { Layout } from 'antd';
import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { useTheme } from '../../ThemeContext';
import styles from './MainContent.module.css';

const PrimaryLayout: React.FC = () => {

    const { isDarkMode } = useTheme();  // Retrieve the theme mode

    const contentClassName = isDarkMode ? styles.darkMode : styles.lightMode;

    return (
        <Layout style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <Navbar />
            
            <Layout style={{ flexDirection: 'row', height: '100%' }}>
                <Sidebar />
                <div className={`${styles.content} ${contentClassName}`}>
                    <Outlet/>
                </div>                
            </Layout>
        </Layout>
    );
};

export default PrimaryLayout;
