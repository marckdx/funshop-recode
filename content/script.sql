CREATE DATABASE  IF NOT EXISTS bd_funshop;
USE bd_funshop;

DROP TABLE IF EXISTS tb_usuario;
CREATE TABLE tb_usuario (
  cd_usuario int(5) NOT NULL AUTO_INCREMENT,
  nm_usuario varchar(50) NOT NULL,
  vl_saldo decimal(4,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (cd_usuario)
);

INSERT INTO tb_usuario VALUES (1,'Marco Aurélio Lima',99.99),(2,'Jhonathan Rodrigues',99.99),(3,'Augusto Abranches',99.99);

DROP TABLE IF EXISTS tb_login;
CREATE TABLE tb_login (
  cd_login int(5) NOT NULL AUTO_INCREMENT,
  cd_usuario int(5) NOT NULL,
  ds_login varchar(50) NOT NULL,
  ds_senha varchar(13) NOT NULL,
  PRIMARY KEY (cd_login),
  KEY cd_usuario (cd_usuario),
  CONSTRAINT tb_login_ibfk_1 FOREIGN KEY (cd_usuario) REFERENCES tb_usuario (cd_usuario)
);

INSERT INTO `tb_login` VALUES (1,1,'marco@elit2.com','marco'),(2,2,'jhony@elit2.com','jhony'),(3,3,'augusto@instasoft.com','augusto');

CREATE TABLE tb_produto(
 cd_produto	int,
 nm_produto varchar(100) not null,
 ds_produto varchar(400) not null,
 qt_produto int not null,
 vl_produto double(5,2) not null,
 pc_desconto_produto double(3,2) null,
 st_produto boolean not null,
 ds_garantia_produto varchar(200) not null,
 primary key(cd_produto)
)

INSERT INTO tb_produto values(1,'PS3 Ratchet & Clank Future: Tools of Destruction', 'Desde 2002, Ratchet vem promovendo a destruição por onde passa.Ele tem uma aparência de mascote, mas é mestre no uso de armas pesadas.Com essa combinação, se tornou uma das séries mais populares dos consoles da Sony.', 
								50 , 79.00 , 0.05 , 1 ,'90 dias - Contra defeitos de Fabricação.Não Trocamos CDs, DVDs ou Blu-ray riscados.');

INSERT INTO tb_produto values(2,'PS3 Dead To Rights - Retribution', 'Afastado dos videogames desde 2005, o policial linha dura Jack Slate volta da aposentadoria e traz, claro, seu velho parceiro canino Shadow de volta. É o reinício da franquia "Dead to Rights", que começou como uma mera imitação de "Max Payne" e acabou rendendo continuações e até mesmo aventuras paralelas para diversas plataformas.',
							  40 , 99.00 , 0.05, 1, '90 dias - Contra defeitos de Fabricação. Não Trocamos CDs, DVDs ou Blu-ray riscados.');

INSERT INTO tb_produto values(3,'PS3 FaceBreaker', 'Lá se vão duas décadas desde Mike Tyson s Punch Out e poucos jogos de boxe depois dele tentaram unir o esporte a elementos cômicos, e menos ainda obtiveram algum sucesso. Com o desejo da EA Sports em inaugurar uma nova linha de títulos casuais, FaceBreaker evoca o clássico da década de 80 em bem-humorados duelos nos ringues.',
							  20, 49.00, 0.05, 1, '90 dias - Contra defeitos de Fabricação. Não Trocamos CDs, DVDs ou Blu-ray riscados.');

INSERT INTO tb_produto values(4, 'DEU A LOUCA NA FUN SHOP PS3 PES2014 - Pro Evolution Soccer', 'Pro Evolution Soccer 2014 marcará um novo começo para a popular série, com uma nova engine trazendo maior avanço para o jogo desde a sua criação. A new-engine usa o renomado FOX-Engine da Kojima Productions em seu núcleo, ampliado e melhorado para atender as demandas complexas e sob medida de um jogo de futebol.',
							  30, 114.80, 0.05, 1, '90 dias - Contra defeitos de Fabricação. Não Trocamos CDs, DVDs ou Blu-ray riscados.');
	
