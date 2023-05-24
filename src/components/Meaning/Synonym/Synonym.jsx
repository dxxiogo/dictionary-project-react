import styles from "./styles.module.css"

export default function Synonym ({synonyms}) {
    let listOfSynonyms = [];
    if(synonyms) {
        listOfSynonyms = synonyms.join(', ');
    }
    return (
        <div className={styles.synonym}>
            <h3>Synonyms:</h3>
            <p>{listOfSynonyms}</p>
        </div>
    )
}