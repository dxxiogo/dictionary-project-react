import styles from "./styles.module.css"
import moonEmpty from "../../assets/moon-empty.png"

export default function ThemeToggleBtn () {
    return (

        <div className={styles["btn-toggle"]}>
            <div className={styles['background-btn']}>
                <div className={styles['pointer']}></div>
            </div>
            <img src={moonEmpty} alt="Lua" className={styles["icon-moon"]}/>
        </div>
    )
}