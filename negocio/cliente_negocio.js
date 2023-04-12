let listaClientes = [];
let idAutoIncrement = 1;

function listar() { 
    return listaClientes;
}

function inserir(cliente) {
    cliente.id = idAutoIncrement++;
    listaClientes.push(cliente);
    return (cliente);
}

function buscarPorId(id) {
    for (let cliente of listaClientes) {
        if(cliente.id == id){
            return cliente;
        }
    }
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
    for(let ind in listaClientes)
    {
        if(listaClientes[ind].id == id){
            listaClientes[ind] = novoCliente;
            listaClientes[ind].id = id;
        }
    }
}

module.exports = { 
    listar, 
    inserir, 
    buscarPorId, 
    deletar, 
    atualizar
}