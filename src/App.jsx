import { useState } from "react"
import Header from "./components/Header/Header"
import Input from "./components/Input/Input"
import Meaning from "./components/Meaning/Meaning"


function App() {
  
  const [meaning, setMeaning] = useState([]);

  function searchWord (word) {
    const timeId = setTimeout(() => {
      setMeaning(word);
      console.log(meaning);
    }, 1000 * 5);
    clearTimeout(timeId);
  } 



  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
        <Header/>
        <Input  searchWord={searchWord}/>
        <Meaning  wordConcepts={meaning}/>
    </main>
  )
}

export default App
