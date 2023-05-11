import ThemeToggleBtn from "../ThemeToggleButton/ThemeToggleButton"
import styles from "./styles.module.css"

export default function Header () {

    return (
        <header className={styles.header}>
            <div>
               <h1>{"Dictionary.jsx"}</h1>
            </div>
            <ThemeToggleBtn/>
        </header>
    )
}