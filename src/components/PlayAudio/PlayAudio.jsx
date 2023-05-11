import styles from "./styles.module.css"
import playIcon from "../../assets/play-icon.png"

export default function PlayAudio ({urlAudio}) {
    return (
        <div className={styles["background-play"]}>
            <audio src={urlAudio} style={{display:"none"}}></audio>
            <img src={playIcon} alt="Icone de reproduzir audio" />
        </div>
     )    
}