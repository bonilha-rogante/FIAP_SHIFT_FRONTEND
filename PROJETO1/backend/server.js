const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const {uuidv4} = require('uuid')

const app = express();

app.use(cors());
app.use(bodyParser.json());

let produtos = [];

//ROTA CADASTRAR
app.post('/produtos',(req, res)=>{
    const {nome, descricao} = req.body;

    if(!nome || !descricao){
        return res.status(400).json({error: "Campo deve ser obrigatório"});
    }
    const novoProduto ={id:uuidv4(), nome, descricao};
    produto.push(novoProduto);
    res.status(200).json(novoProduto)
});














//EXECUTANDO O SERVIDOR
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})