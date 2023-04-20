const persistencia = require('../persistencia/cliente_persistencia')

// let listaClientes = [];
// let idAutoIncrement = 1;

function listar() { 
    return listaClientes;
}

async function inserir(cliente) {
    await persistencia.insere_cliente(cliente)
    return cliente;
}

async function buscarPorId(id) {
    return await persistencia.buscarPorId(id)
}

function deletar(id) {
    for(let ind in listaClientes){
        if(listaClientes[ind].id == id){
            //remover cliente
            listaClientes.splice(ind, 1);
        }
    }
}

function atualizar(id, novoCliente) {
    persistencia.atualizaCliente(id,novoCliente)
}

module.exports = { 
    listar, 
    inserir, 
    buscarPorId, 
    deletar, 
    atualizar
}