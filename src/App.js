import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from "./components/Frase"
import List from './components/List'

function App() {
  const name = "Henrique"
  const Newname = name.toUpperCase()

  function sun(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'
  const nome = "Sofia"

  return (
    <div className="App">
      {/* <h1>Projeto de React</h1>
      <h2>Alterando o JSX</h2>
      <p>Olá, {Newname}</p>    
      <p>Soma de idade: {sun(18, 16)}</p>
      <img src={url} alt= "Quadro"/>
      <Frase />
      <SayMyName nome="Henrique"/>
      <SayMyName nome="Stefany"/>
      <SayMyName nome={nome}/>
      <HelloWorld /> */}
      <Pessoa 
        nome="Henrique"
        idade="18"
        profissao="Programador Junior"
        foto={url}/> 
      <List/>
    </div>
  )
}

export default App; 