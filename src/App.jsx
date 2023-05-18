import { useState } from "react"
import Header from "./components/Header/Header"
import Input from "./components/Input/Input"
import Meaning from "./components/Meaning/Meaning"

function App() {
  const [meaning, setMeaning] = useState([]);
  function searchWord (word) {
      setMeaning(word);
  } 
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
        <Header/>
        <Input  searchWordFunction={searchWord}/>
        <Meaning  wordConcepts={meaning}/>
    </main>
  )
}

export default App
