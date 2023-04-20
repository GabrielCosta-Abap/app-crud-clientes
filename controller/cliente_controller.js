const clienteNegocio = require("../negocio/cliente_negocio");

function listar(req, res) {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    const listaClientes = clienteNegocio.listar();
    //Gera o response adequadamente
    res.json(listaClientes);  
}

async function buscarPorId(req, res) {    
    const id = req.params.id;

    try {

        const cliente = await clienteNegocio.buscarPorId(id);
        res.json(cliente);

    } catch (error) {
        
        res.status(500).json({erro: error})
        
    }
}

async function inserir(req, res) {    
    const cliente = req.body;
    const clienteInserido = await clienteNegocio.inserir(cliente);
    res.status(201).json(clienteInserido);
}

async function atualizar(req, res) {    
    const id = req.params.id;
    const cliente = req.body;
    
    let newCliente = await clienteNegocio.atualizar(id,cliente);
    res.status(200).json(newCliente);
}

function deletar(req, res) {    
    //Obtem os dados request
    const id = req.params.id;
    //Trata a funcionalidade de negocio
    clienteNegocio.deletar(id);
    //Gera o response adequadamente  
    res.json({msg: "Cliente deletado com sucesso!"});
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
}