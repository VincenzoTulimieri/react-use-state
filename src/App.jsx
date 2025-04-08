// importazione file
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import languages from './data/languages'

function App() {
  return (
    <>
      <Header />
      <Main  languages={languages}/>
    </>
  )
}

export default App
