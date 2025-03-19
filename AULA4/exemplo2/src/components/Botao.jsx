function Botao(){
    //Criando uma Arrow função

    const handleClick=()=>{
        alert('Você clicou no botão component')
    }

    return (
        <>
        <button onClick={handleClick}> Botão component</button>
        </>
    )
}

export default Botao