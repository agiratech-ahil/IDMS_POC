import { ThemeConfig } from "antd";

export const lightTheme: ThemeConfig = {
    token: {
        colorPrimary: '#18090ff',
        // colorBgLayout: '#ffffff',
        colorText: '#000000',
        colorBgContainer: '#CDD3D6'
    }
};

export const darkTheme: ThemeConfig = {
    token: {
        colorPrimary: '#177dcc',
        // colorBgLayout: '#36454F',
        colorText: '#ffffff',
        colorBgContainer: '#C7D0D5'
    }
};

export const customTheme = {
    token: {
        colorPrimary: '#00498F', // Primary color
        colorText: '#36454F', // Text color
        colorBgLayout: '#ffffff', // Layout background color
        colorBorder: '#d9d9d9', // Border color
        borderRadius: 8, // Global border radius
        fontSize: 16, // Base font size
        
    },
};