import { ReactNode, createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "./themes";
import { ConfigProvider, ThemeConfig } from "antd";



interface ThemeContextProps {
    isDarkMode: boolean;
    toggleTheme: ()=> void;
}

const ThemeContext = createContext<ThemeContextProps>({
    isDarkMode: false,
    toggleTheme: ()=>{},
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [ isDarkMode, setIsDarkMode ] = useState<boolean>(()=>{
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';    
    });

    const toggleTheme=()=>{
        setIsDarkMode((prev)=>{
            const newTheme = !prev;
            localStorage.setItem('theme', newTheme?'dark':'light')
            return newTheme;
        })
    }

    const theme: ThemeConfig = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ConfigProvider theme={theme}>
                { children }
            </ConfigProvider>
        </ThemeContext.Provider>
    )
}

export const useTheme=()=> useContext(ThemeContext);