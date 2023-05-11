import React, {useState} from "react";
import lup from "../../assets/lupa.png"
import styles from "./styles.module.css"

export default function Input ({searchWord}) {
    const [inputValue, setInputValue] = useState([]);

    async function fecthDictinonaryApi (word) {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const wordConcept = await response.json();
        console.log(wordConcept);
        return wordConcept;
    }

    return (
        <div className={styles.input}>
            <input type="text" placeholder="Search word" value={inputValue} onChange={(eve) => setInputValue(eve.target.value)} />
            <button onClick={() => {
                searchWord(fecthDictinonaryApi(inputValue));
                setInputValue('');
            }}>
                <img src={lup} alt="Icone de lupa"/>
            </button>
        </div>
    )
}