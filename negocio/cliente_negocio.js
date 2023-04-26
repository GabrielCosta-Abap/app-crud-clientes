const persistencia = require('../persistencia/cliente_persistencia')

async function listar() { 
    return await persistencia.listarClientes();
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
            listaClientes.splice(ind, 1);
        }
    }
}

async function atualizar(id, novoCliente) {
    return await persistencia.atualizaCliente(id,novoCliente)
}

module.exports = { 
    listar, 
    inserir, 
    buscarPorId, 
    deletar, 
    atualizar
}