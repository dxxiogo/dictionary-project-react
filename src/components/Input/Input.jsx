import lup from "../../assets/lupa.png"
import styles from "./styles.module.css"

export default function Input () {
    return (
        <div className={styles.input}>
            <input type="text" placeholder="Search word"/>
            <button><img src={lup} alt="Icone de lupa" /></button>
        </div>
    )
}