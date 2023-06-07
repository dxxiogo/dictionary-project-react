import styles from "./styles.module.css"
import playIcon from "../../assets/play-icon.png"
import { useState} from "react"

export default function PlayAudio ({urlAudio}) {
    const [isPlaying, setIsPlaying] = useState(false);
    function playAudio (ev) {
        setIsPlaying(true);
    }
    return (
        <div className={styles["background-play"]}>
            
             {
                isPlaying && (
                    <audio src={urlAudio} style={{display:"none"}} autoPlay onEnded={() => setIsPlaying(false)}> </audio>
                )
             }
            <img src={playIcon} onClick={playAudio} alt="Icone de reproduzir audio" />
        </div>
     )    
}