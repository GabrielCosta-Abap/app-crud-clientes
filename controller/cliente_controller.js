const clienteNegocio = require("../negocio/cliente_negocio");

async function listar(req, res) {    
    const listaClientes = await clienteNegocio.listar();
    res.json(listaClientes);  
}

async function buscarPorId(req, res) {    
    const id = req.params.id;

    try {

        const cliente = await clienteNegocio.buscarPorId(id);

        if (cliente) {
            res.json(cliente);
        }else{
            
            res.status(404).json({erro: "Cliente não encontrado!"})
        }


    } catch (error) {
        
        res.status(500).json({erro: error})
        
    }
}

async function inserir(req, res) {    
    const cliente = req.body;

    try {

        const clienteInserido = await clienteNegocio.inserir(cliente);
        res.status(201).json(clienteInserido);
        
    } catch (error) {
        
        res.status(500).json({erro: error})
        
    }
}

async function atualizar(req, res) {    
    const id = req.params.id;
    const cliente = req.body;
    
    try {
        
        let newCliente = await clienteNegocio.atualizar(id,cliente);
        res.status(200).json(newCliente);

    } catch (error) {
        
        res.status(500).json({erro: error})
        
    }
}

function deletar(req, res) {    
    const id = req.params.id;

    try {
        
        clienteNegocio.deletar(id);
        res.json({msg: "Cliente deletado com sucesso!"});
    
    } catch (error) {
        
        res.status(500).json({erro: error})
        
    }
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
}