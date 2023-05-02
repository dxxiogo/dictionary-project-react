import dictionaryIcon from "../../assets/dictionary-icon.png"
import SelectFont from "../SelectFont/SelectFont"
import ThemeToggleBtn from "../ThemeToggleButton/ThemeToggleButton"
import styles from "./styles.module.css"

export default function Header () {

    return (
        <header className={styles.header}>
            <div>
               <img src={dictionaryIcon} alt="Dictionary icon" className={styles.icon}/>
            </div>
            <div className={styles["additional-function-container"]}>
                <SelectFont />
                <ThemeToggleBtn/>
            </div>
        </header>
    )
}