const { conexao } = require('./conexao')
const { Client, Pool } = require('pg');

module.exports = {

    insere_cliente: async (cliente)=>{
        const client = new Client(conexao)
        await client.connect();

        let sQuery = `INSERT INTO clientes `
        sQuery += `(cpf, nome, telefone)`
        sQuery += ` VALUES('${cliente.cpf}', '${cliente.nome}', '${cliente.telefone}') RETURNING *`
        const res = await client.query(sQuery);

        console.log('---------------------------------')
        await client.end();  
        return await res.rows
    },

    buscarPorId: async (id) =>{
        const client = new Client(conexao)
        await client.connect();
        
            let sQuery = 'SELECT * FROM clientes '
            sQuery += `WHERE id = ${id}`

            const res = await client.query(sQuery);

        await client.end();    
        return res.rows[0];
    },

    listarClientes: async (id) =>{
        const client = new Client(conexao);
        await client.connect();
        
            let sQuery = 'SELECT * FROM clientes ';

            const res = await client.query(sQuery);

        await client.end();    
        return res.rows;   
    },

    atualizaCliente: async (id, cliente)=>{
        const client = new Client(conexao);
        await client.connect();

        let sQuery = `UPDATE clientes SET `;
        
        if (cliente.nome) {
            sQuery = sQuery + 'nome = $1 '
        }                
        
        if (cliente.cpf) {
            sQuery = sQuery + ',cpf = $2 '
        }                

        if (cliente.telefone) {
            sQuery = sQuery + ',telefone = $3 '
        }                

        sQuery = sQuery + 'WHERE id = $4 RETURNING *;';


        console.log(sQuery)
        const res = await client.query(sQuery, [cliente.nome, cliente.cpf, cliente.telefone, id]);
        await client.end();  
        console.log(res);
        return res.rows;        
    }

}