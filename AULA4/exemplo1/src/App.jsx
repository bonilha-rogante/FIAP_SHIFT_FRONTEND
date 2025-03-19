import Imagem from '../src/assets/img.jpg'

function App() {

  //Declarando variáveis
  let nome = 'Wellington';
  let apelido = 'Cidade';
  let novoNome = nome.toUpperCase();

  //Criando funções
  function soma(v1, v2){
    return v1 + v2
  }

  //Arrow Function
  const subtrair=(v3, v4)=>{return v3 - v4}

  return (
    //FRAGMENT
    <>
     <p>Seja bem vindo ao React {novoNome} {apelido}</p>
     <p>A soma da função é: {soma(20, 9)}</p>
     <p>A subtração da Arrow Function é: {subtrair(50, 30)}</p>
     <img src={Imagem} alt="img cidade" width='500'/>
    </>

    
  )
}

export default App
