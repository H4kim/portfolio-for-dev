import React, { useState } from 'react'
import { createContext } from "react";

export const ThemeContext = createContext({
    theme:'light',
    toggleTheme: () => {}
})


const ThemeProvider = (props) => {
    const [theme,setTheme] = useState('light')
    
    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

    return(
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider