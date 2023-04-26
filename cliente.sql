create TABLE clientes (
	id 		serial PRIMARY KEY,
	cpf 	VARCHAR ( 15 ) not null,
	nome 	VARCHAR ( 90 ) not null,
	telefone VARCHAR ( 30 ) not null
);

select * from clientes