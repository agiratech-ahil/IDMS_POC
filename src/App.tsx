import AppRoutes from "./routes";
import 'antd/dist/reset.css';
import { ThemeProvider } from "./ThemeContext";

function App(){
  
  return (
    <ThemeProvider>
      <AppRoutes/>
    </ThemeProvider>
  )
}

export default App;