import {useState, useEffect} from 'react'
import axios from 'axios'

const Produtos = () => {
    
    //DECLARANDO A CHAMADA API (endpoint)
    const  API_URL = 'http://localhost:5000/produtos';

    //HOOK - useState - Manipula o estado da variável
    const [produtos, setProdutos] = useState([]);
    const [novoProduto, setNovoProduto] = useState({nome:'', descricao:''});
    const [editar, setEditar] = useState(false);

    //MOSTRAR PRODUTOS CADASTRADOS
    useEffect(()=>{
        fetchProdutos();
    },[]);

    const fetchProdutos = async()=>{
        try{
            const response = await axios.get(API_URL);
            setProdutos(response.data);
        } catch(error){
            console.log('Erro ao buscar Produtos', error)
        }
    };

    //CADASTRAR PRODUTOS
    const cadastrarProduto = async () => {
        if(!novoProduto.nome || !novoProduto.descricao){
            alert("Campo Obrigatório")
            return;
        }
        try {
            const response = await axios.post(API_URL, novoProduto);
            setProdutos([...produtos, response.data]);
            setNovoProduto({nome:'', descricao:''})
            setEditar(false)
        }catch(error){
            console.log("Erro ao cadastrar Produto", error)
        }
    }

    //ALTERAR PRODUTOS
    const alterarProduto = async () => {
        if(!novoProduto.nome || !novoProduto.descricao){
            alert("Campo Obrigatório")
            return;
        }
        try {
            const response = await axios.put(`${API_URL}/${novoProduto.id}`, novoProduto);
            setProdutos(produtos.map(produto => (produto.id === novoProduto.id ? response.data: produto)));
            setNovoProduto({nome:'', descricao:''})
            setEditar(false)
        }catch(error){
            console.log("Erro ao alterar o Produto", error)
        }
    }

    //APAGAR PRODUTO
    const apagarProduto=async(id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setProdutos(produtos.filter(produto => produto.id !==id));
        } catch(error){
            console.log('Erro ao excluir produto', error)
        }
    }

    //CRIANDO A FUNÇÃO HANDLE SUBMIT
    const handleSubmit=()=>{
        if(editar){
            alterarProduto();
        }else{
            cadastrarProduto();
        }
    }

    //Criando a função do botão editar
    const handleEditar = (produto) => {
        setNovoProduto(produto);
        setEditar(false);
    }


  return (
    <div>
      <h1>Sistema de Cadastro de Produtos</h1>
      <form action="">
        <div>
            <label>Nome</label>
            <input 
                type="text" 
                id="nome" 
                placeholder="Digite o nome do produto" 
                value={novoProduto.nome}
                onChange={(e)=>setNovoProduto({...novoProduto, nome:e.target.value})}
            />
        </div>

        <div>
            <label>Descrição</label>
            <input 
                type="text" 
                id="descricao" 
                placeholder="Descrição do produto" 
                value={novoProduto.descricao}
                onChange={(e)=>setNovoProduto({...novoProduto, descricao: e.target.value})}
            />
        </div>
        <button onClick={handleSubmit}>
            {editar ? 'Alterar':'Cadastrar'}
            Cadastrar
        </button>
      </form>

      <ul>
        {produtos.map((produto)=>(
            <li key={produto.id}>
                <div>
                    <strong>{produto.nome}</strong>{produto.descricao}
                </div>
                <div>
                    <button onClick={()=>handleEditar(produto)}>Editar</button>
                    <button onClick={()=>apagarProduto(produto.id)}>Apagar</button>
                </div>
            </li>
        ))}

      </ul>
    </div>
  )
}

export default Produtos
