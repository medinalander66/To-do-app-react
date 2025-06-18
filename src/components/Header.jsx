import { useEffect, useState } from "react"
import "../css/Header.css"
import "../css/App.css"
import Button from "./Button"
export default function Header(){


    const [darkMode, setDarkMode] = useState(false);
    const toggleTheme = () =>{
        setDarkMode( prev => !prev)
    }

    useEffect( () => {
        document.body.className = darkMode ? 'dark' : 'light';
        const toggleTheme=document.querySelector("toggle-theme")
        
    }, [darkMode])



    return(
        <>
            <header >
            <div className='header'>
                <h1>TO DO APP</h1>
                <Button className="toggle-theme" action={toggleTheme} text={darkMode ? "Light" : "Dark"} />
            </div>
        </header>
        </>

    )
}