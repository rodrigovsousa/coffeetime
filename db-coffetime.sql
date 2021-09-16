CREATE TABLE CARGO (
	
	NOME VARCHAR(20) NOT NULL,
	DESCRICAO VARCHAR(20) NOT NULL,
	ID INTEGER PRIMARY KEY);
		
CREATE TABLE MOTIVO (
	
	DESCRICAO VARCHAR(20) NOT NULL, 
	TITULO VARCHAR(20) NOT NULL, 
	ID INTEGER PRIMARY KEY);
	
CREATE TABLE SITUACAO (
	
	DESCRICAO VARCHAR(20) NOT NULL,  
	ID INTEGER PRIMARY KEY);
	
CREATE TABLE USUARIO(
			
	ID INTEGER PRIMARY KEY,
	NOME VARCHAR(80) NOT NULL,
	CPF VARCHAR(14) NOT NULL,
	DATANASCIMENTO date NOT NULL,
	CARGO_ID INTEGER NOT NULL REFERENCES CARGO (ID),
	FOTO BLOB,
	EMAIL VARCHAR(40) NOT NULL,
	ST_ATIVO BOOLEAN NOT NULL,
	TELEFONE VARCHAR(15) NOT NULL);
		
CREATE TABLE EVENTO (
		
	ID INTEGER PRIMARY KEY,
	DATA TIMESTAMP NOT NULL,
	JUSTIFICATIVAADIAMENTO VARCHAR(200) NOT NULL,
	MOTIVO_ID INTEGER NOT NULL REFERENCES MOTIVO (ID),
	VALOR DECIMAL(10,2) NOT NULL,
	SITUACAO INTEGER NOT NULL REFERENCES SITUACAO (ID),
	PATROCINADOR VARCHAR(80) NOT NULL);
		
CREATE TABLE USUARIO_EVENTO (
	
	USUARIOID INTEGER REFERENCES USUARIO (ID),
	EVENTOID INTEGER REFERENCES EVENTO (ID),
	PRIMARY KEY (USUARIOID, EVENTOID)
		);
