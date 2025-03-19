import HelloWorld from "./components/HelloWorld"
import Botao from "./components/Botao"
import Aluno from "./components/Aluno"
import Dados from "./components/Dados"
import Contador from "./components/Contador"
import Formulario from "./components/Formulario"

function App() {

  return (
    <>
     <HelloWorld/> 
     <Botao/>
     <Aluno nome='Fiap' idade='20'/>
     <Dados usuario='Cidade' email='cidade@email.com'/>
     <Contador />
     <Formulario />
    </>
  )
}

export default App
