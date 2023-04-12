const express = require('express');
const clienteRota = require('./rota/cliente_rota')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/clientes", clienteRota);

app.listen (3000, () => { 
    console.log("Iniciando o servidor...");
})