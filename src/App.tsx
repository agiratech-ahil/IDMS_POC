import React from 'react';
// import './App.css';
import { ConfigProvider } from 'antd';
import AppRoutes from './routes';
import 'antd/dist/reset.css'; // Reset Ant Design styles
import { customTheme } from './theme';

function App() {

  return (
    <ConfigProvider theme={customTheme}>
      <AppRoutes/>
    </ConfigProvider>
    
  )
}

export default App;

// import React from 'react';
// import { ConfigProvider } from 'antd';
// import AppRoutes from './App';
// import 'antd/dist/reset.css'; // Reset Ant Design styles


// ReactDOM.render(
//   // <React.StrictMode>
//     <ConfigProvider>
//       <App />
//     </ConfigProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
