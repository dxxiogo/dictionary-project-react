import styles from "./styles.module.css";
import moonEmpty from "../../assets/moon-empty.png";
import moon from "../../assets/moon.png"
import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeToggleBtn () { 
    const [toggleBtn, setToggleBtn] = useState('desactive-mode');
    const [iconMoon, setIconMoon] = useState(moonEmpty);

    const {theme, toggleTheme} = useContext(ThemeContext);

    function changeMode () {
        if(toggleBtn == 'desactive-mode') {
            setToggleBtn('active-mode');
            setIconMoon(moon);
        } else {
            setToggleBtn('desactive-mode');
            setIconMoon(moonEmpty);
        }
        toggleTheme();
    }
    return (
        <div 
         className={styles["btn-toggle"]}>
            <div className={styles[toggleBtn]}>
                <div className={styles['pointer']} onClick={changeMode}></div>
            </div>
            <img src={iconMoon} alt="Lua" className={styles["icon-moon"]}/>
        </div>
    )
}