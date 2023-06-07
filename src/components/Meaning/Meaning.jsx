import PlayAudio from "../PlayAudio/PlayAudio";
import Topic from "./Topic/Topic";
import styles from "./styles.module.css"

export default function Meaning ({wordConcepts}) {
    let playAudio = null
    if(wordConcepts[0]?.phonetics[0].audio) {
      playAudio =  <PlayAudio urlAudio= {wordConcepts[0]?.phonetics[0].audio ?? []} />;
    }
    const topics = wordConcepts[0]?.meanings
    let listOfTopics = []
    if(topics) {
      listOfTopics =  topics.map(({partOfSpeech, definitions, synonyms}) => {
        return <Topic partOfSpeechTopic={partOfSpeech} definitionsTopic={definitions} synonymsTopic={synonyms ?? []}/>
      })
    }
    if(!(wordConcepts.message)) {
      return (
        <>
          <div className={styles["word-info"]} style={!playAudio ? {justifyContent: 'left'}: {justifyContent: 'space-between'}}> 
              <div>
                  <h1>{wordConcepts[0]?.word}</h1>
                  <h2>{wordConcepts[0]?.phonetic}</h2>
              </div>
              {playAudio}
          </div>
            {listOfTopics}
        </>   
      )
    } else {
      return <p className={styles["no-definitions-found"]}>{wordConcepts.title}
      </p>
    }
}