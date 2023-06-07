import { useContext } from "react";
import styles from "./styles.module.css"
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function Synonym ({synonyms}) {
    
    const {theme} = useContext(ThemeContext)

    let listOfSynonyms = [];
    if(synonyms) {
        listOfSynonyms = synonyms.join(', ');
    }
    if(listOfSynonyms.length === 0) {
        listOfSynonyms = '';
        return (
            <></>
        )
    }
    return (
        <div className={`${styles.synonym} ${theme === 'light' ? styles.light : styles.dark} `}>
            <h3>Synonyms:</h3>
            <p>{listOfSynonyms}</p>
        </div>
    )
}