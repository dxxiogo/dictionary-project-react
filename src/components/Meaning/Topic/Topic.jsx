import styles from "./styles.module.css"
import Synonym from "../Synonym/Synonym"

export default function Topic ({partOfSpeechTopic, definitionsTopic, synonymsTopic}) {
  let listOfDefinitions = []
  if(definitionsTopic) {
    listOfDefinitions = definitionsTopic.map(({definition}) => {
      return <li>{definition}</li>
    } )
  }
    return (
          <div className={styles.topic}>
              <div className={styles["title-topic"]}>
                <h2>{partOfSpeechTopic}</h2>

              </div>
              <h3>Meaning</h3>
              <ul>
                {listOfDefinitions}
              </ul>
              <Synonym synonyms={synonymsTopic}/>
          </div>
    )
}