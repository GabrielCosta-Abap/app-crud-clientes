const clienteNegocio = require("./negocio/cliente_negocio");

const cli1 = {
    cpf: "11111111111",
    nome: "Fulano",
    telefone: "(51)9999-9099"
};

const cli2 = {
    cpf: "2222222222",
    nome: "Sicrano",
    telefone: "(51)9999-9779"
};

const cli3 = {
    cpf: "33333333333",
    nome: "Beltrano",
    telefone: "(51)9229-9179"
};

const cli4 = {
    cpf: "33333333333",
    nome: "Beltrano X",
    telefone: "(51)9229-9279"
};

clienteNegocio.inserir(cli1);

clienteNegocio.inserir(cli2);

clienteNegocio.inserir(cli3);

clienteNegocio.deletar(2);

clienteNegocio.atualizar(3, cli4);

console.log(clienteNegocio.listar());

console.log(clienteNegocio.buscarPorId(1));
