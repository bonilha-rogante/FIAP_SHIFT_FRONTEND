import Botao from "./Botao";


function HelloWorld(){

    //DECLARANDO VARIÁVEIS
    let nome = 'Fiap';

    function enviar(){
        alert(`Olá, Dev ${nome}`)
    }

    return (
        <>
        <h1>Seja Bem-Vindo {nome}</h1>
        <button onClick={enviar}>Clique</button>
        <Botao/>
        </>
    )
}

export default HelloWorld