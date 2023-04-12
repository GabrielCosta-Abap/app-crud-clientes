const clienteNegocio = require("../negocio/cliente_negocio");

function listar(req, res) {    
    //Obtem os dados request
    //Trata a funcionalidade de negocio
    const listaClientes = clienteNegocio.listar();
    //Gera o response adequadamente
    res.json(listaClientes);  
}

function buscarPorId(req, res) {    
    //Obtem os dados request (e da URI)
    const id = req.params.id;
    console.log("ID:", id);
    //Trata a funcionalidade de negocio
    const cliente = clienteNegocio.buscarPorId(id);
    //Gera o response adequadamente  
    res.json(cliente);
}

function inserir(req, res) {    
    //Obtem os dados request
    const cliente = req.body;
    //Trata a funcionalidade de negocio
    const clienteInserido = clienteNegocio.inserir(cliente);
    //Gera o response adequadamente  
    res.status(201).json(clienteInserido);
}

function atualizar(req, res) {    
    //Obtem os dados request
    const id = req.params.id;
    const cliente = req.body;

    //Trata a funcionalidade de negocio
    clienteNegocio.atualizar(id,cliente);

    //Gera o response adequadamente  
    res.json({msg:"Cliente atualizado com sucesso!"});
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