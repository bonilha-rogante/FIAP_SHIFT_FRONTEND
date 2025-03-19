import {useState} from 'react'

function Formulario(){
    //HOOK-useState - Manupula o estado da variável
    const[nome, setNome]=useState('');
    const[email, setEmail]=useState('');

    //Criando uma Função ahndleSubmit
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(nome, email)
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Formulário</h1>
            <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
            
            <input type="email" placeholder="Digite seu e-mail" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <button type="submit">Enviar</button>

        </form>
    )
}

export default Formulario