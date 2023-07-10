import { useState, createContext } from "react";
import { Content } from "../home/home";

export const ThemeContext = createContext();

console.log(ThemeContext);

export const Theme = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    };

    return (
        <ThemeContext.Provider value={theme}>  
            <div style={{ textAlign: 'center', padding: 20 }}>
                <button className="btn btn-outline-info" onClick={changeTheme}>Change Theme</button>
                <Content />
            </div>
        </ThemeContext.Provider>
    )
}