// importazione file
import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import languages from './data/languages'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
