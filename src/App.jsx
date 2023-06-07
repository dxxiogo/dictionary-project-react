import { useContext, useState } from "react"
import Header from "./components/Header/Header"
import Input from "./components/Input/Input"
import Meaning from "./components/Meaning/Meaning"
import styles from './style.module.css'
import { ThemeContext } from "./contexts/ThemeContext"


function App() {
  const [meaning, setMeaning] = useState([]);
  const {theme} = useContext(ThemeContext);
  function searchWord (word) {
      setMeaning(word);
  } 
  return (
    <main className={`${styles.app} ${theme === 'light' ? styles.light : styles.dark}`} >
        <Header/>
        <Input  searchWordFunction={searchWord}/>
        <Meaning  wordConcepts={meaning}/>
    </main>
  )
}

export default App
