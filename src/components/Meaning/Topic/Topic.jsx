import styles from "./styles.module.css"
import Synonym from "../Synonym/Synonym"

export default function Topic ({partOfSpeechTopic, definitionsTopic, synonymsTopic}) {
    return (
          <div className={styles.topic} >
              <div className={styles["title-topic"]}>
                <h2>{partOfSpeechTopic}</h2>

              </div>
              <h3>Meaning</h3>
              <ul>
                {definitionsTopic ?  definitionsTopic.map(({definition}) => {return <li key={`definition-${Math.random() * 1000}`}>{definition}</li>}) : null}
              </ul>
              <Synonym synonyms={synonymsTopic}/>
          </div>
    )
}