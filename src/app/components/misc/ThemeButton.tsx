"use client"
import { useTheme } from "next-themes"
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";


export const ThemeButton = () => {
    const { setTheme, theme } = useTheme()
    //const color = useState(theme)
  
    const toggleTheme = () => {
        if(theme === "dark") {
            setTheme("light") 
            return
        }

        setTheme("dark")
    }

    return (
        <button
        onClick={() => toggleTheme()}
        className="hover: bg"
        >
        {
            (theme === "dark") ? <MdLightMode size={25}/>: <MdDarkMode size={25}/>
        }
        </button>
    )
}