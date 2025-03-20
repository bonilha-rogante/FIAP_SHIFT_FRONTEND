import {useState, useEffect} from 'react'
import axios from 'axios'

const Produtos = () => {
    
    //DECLARANDO A CHAMADA API (endpoint)
    const API_URL = 'http://localhost:5000/produtos';

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center text-blue-900">Sistema de Cadastro de Produtos</h1>
      <form className="mb-4">
        <div className="mb-2">
            <label htmlFor="nome" className="block text-sm font-bold text-blue-900">Nome</label>
            <input
                className="mt-1 p-2 border rounded-2xl w-full" 
                type="text" 
                id="nome" 
                placeholder="Digite o nome do produto" 
                value={novoProduto.nome}
                onChange={(e)=>setNovoProduto({...novoProduto, nome:e.target.value})}
            />
        </div>

        <div className="mb-2">
            <label htmlFor="descricao" className="block text-sm font-bold text-blue-900">Descrição</label>
            <input 
                className="mt-1 p-2 border rounded-2xl w-full"
                type="text" 
                id="descricao" 
                placeholder="Descrição do produto" 
                value={novoProduto.descricao}
                onChange={(e)=>setNovoProduto({...novoProduto, descricao: e.target.value})}
            />
        </div>
        <button className="bg-amber-500 hover:bg-amber-300 text-black font-extrabold py-2 px-4 rounded-2xl" onClick={handleSubmit}>
            {editar ? 'Alterar':'Cadastrar'}
        </button>
      </form>

      <ul>
        {produtos.map((produto)=>(
            <li key={produto.id} className="border p-2 mb-2 rounded-2xl flex items-center justify-between">
                <div>
                    <strong className="font-semibold"> {produto.nome}</strong>{produto.descricao}
                </div>
                <div>
                    <button className="bg-blue-600 hover:bg-blue-300 text-black font-bold py-1 px-4 rounded-2xl mr-2" onClick={()=>handleEditar(produto)}>Editar</button>

                    <button className="bg-red-500 hover:bg-red-300 text-black font-bold py-1 px-2 rounded-2xl" onClick={()=>apagarProduto(produto.id)}>Apagar</button>
                </div>
            </li>
        ))}

      </ul>
    </div>
  )
}

export default Produtos
