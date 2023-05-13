import PlayAudio from "../PlayAudio/PlayAudio";
import Topic from "./Topic/Topic";
import Synonym from "./Synonym/Synonym";
import styles from "./styles.module.css"

export default function Meaning ({wordConcepts}) {
    console.log(wordConcepts);
      return (
        <>
          <div className={styles["word-info"]}>
              <div>
                  <h1>{wordConcepts[0]?.word}</h1>
                  <h2>{wordConcepts[0]?.phonetic}</h2>
              </div>
              <PlayAudio/>
          </div>
          <div>
              <Topic/>
              <Synonym/>
          </div>
        </>   
      )
}