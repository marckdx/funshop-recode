CREATE DATABASE  IF NOT EXISTS `bd_funshop` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `bd_funshop`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: localhost    Database: bd_funshop
-- ------------------------------------------------------
-- Server version	5.6.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tb_login`
--

DROP TABLE IF EXISTS `tb_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_login` (
  `cd_login` int(5) NOT NULL AUTO_INCREMENT,
  `cd_usuario` int(5) NOT NULL,
  `ds_login` varchar(50) NOT NULL,
  `ds_senha` varchar(13) NOT NULL,
  PRIMARY KEY (`cd_login`),
  KEY `cd_usuario` (`cd_usuario`),
  CONSTRAINT `tb_login_ibfk_1` FOREIGN KEY (`cd_usuario`) REFERENCES `tb_usuario` (`cd_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_login`
--

LOCK TABLES `tb_login` WRITE;
/*!40000 ALTER TABLE `tb_login` DISABLE KEYS */;
INSERT INTO `tb_login` VALUES (1,1,'marco@elit2.com','marco'),(2,2,'jhony@elit2.com','jhony'),(3,3,'augusto@instasoft.com','augusto'),(4,4,'ursogil@elit2.com','urso'),(5,5,'valmirsl@elit2.com','valmir'),(6,6,'vagner@fatecpg.com.br','vagner');
/*!40000 ALTER TABLE `tb_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_produto`
--

DROP TABLE IF EXISTS `tb_produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_produto` (
  `cd_produto` int(11) NOT NULL AUTO_INCREMENT,
  `nm_produto` varchar(100) NOT NULL,
  `ds_produto` varchar(400) NOT NULL,
  `qt_produto` int(11) NOT NULL,
  `vl_produto` double(5,2) NOT NULL,
  `pc_desconto_produto` double(3,2) DEFAULT NULL,
  `st_produto` tinyint(1) NOT NULL,
  `ds_garantia_produto` varchar(200) NOT NULL,
  `ds_link_produto` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cd_produto`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_produto`
--

LOCK TABLES `tb_produto` WRITE;
/*!40000 ALTER TABLE `tb_produto` DISABLE KEYS */;
INSERT INTO `tb_produto` VALUES (1,'PS3 Ratchet & Clank Future: Tools of Destruction','Desde 2002, Ratchet vem promovendo a destruição por onde passa.Ele tem uma aparência de mascote, mas é mestre no uso de armas pesadas.Com essa combinação, se tornou uma das séries mais populares dos consoles da Sony.',50,79.00,0.05,1,'90 dias - Contra defeitos de Fabricação.Não Trocamos CDs, DVDs ou Blu-ray riscados.','../img_bd/1.jpg'),(2,'PS3 Dead To Rights - Retribution','Afastado dos videogames desde 2005, o policial linha dura Jack Slate volta da aposentadoria e traz, claro, seu velho parceiro canino Shadow de volta. É o reinício da franquia \"Dead to Rights\", que começou como uma mera imitação de \"Max Payne\" e acabou rendendo continuações e até mesmo aventuras paralelas para diversas plataformas.',40,99.00,0.05,1,'90 dias - Contra defeitos de Fabricação. Não Trocamos CDs, DVDs ou Blu-ray riscados.','../img_bd/2.jpg'),(3,'PS3 FaceBreaker','Lá se vão duas décadas desde Mike Tyson s Punch Out e poucos jogos de boxe depois dele tentaram unir o esporte a elementos cômicos, e menos ainda obtiveram algum sucesso. Com o desejo da EA Sports em inaugurar uma nova linha de títulos casuais, FaceBreaker evoca o clássico da década de 80 em bem-humorados duelos nos ringues.',20,49.00,0.05,1,'90 dias - Contra defeitos de Fabricação. Não Trocamos CDs, DVDs ou Blu-ray riscados.','../img_bd/3.jpg'),(4,'DEU A LOUCA NA FUN SHOP PS3 PES2014 - Pro Evolution Soccer','Pro Evolution Soccer 2014 marcará um novo começo para a popular série, com uma nova engine trazendo maior avanço para o jogo desde a sua criação. A new-engine usa o renomado FOX-Engine da Kojima Productions em seu núcleo, ampliado e melhorado para atender as demandas complexas e sob medida de um jogo de futebol.',30,114.80,0.05,0,'90 dias - Contra defeitos de Fabricação. Não Trocamos CDs, DVDs ou Blu-ray riscados.','../img_bd/4.jpg');
/*!40000 ALTER TABLE `tb_produto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tb_usuario`
--

DROP TABLE IF EXISTS `tb_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tb_usuario` (
  `cd_usuario` int(5) NOT NULL AUTO_INCREMENT,
  `nm_usuario` varchar(50) NOT NULL,
  `vl_saldo` decimal(4,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`cd_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_usuario`
--

LOCK TABLES `tb_usuario` WRITE;
/*!40000 ALTER TABLE `tb_usuario` DISABLE KEYS */;
INSERT INTO `tb_usuario` VALUES (1,'Marco Aurélio Lima',99.99),(2,'Jhonathan Rodrigues',99.99),(3,'Augusto Abranches',99.99),(4,'Gilberto Donizeti Fioravante',23.00),(5,'Valmir Santos da Silva',30.00),(6,'Vagner dos Santos Macedo',3.00);
/*!40000 ALTER TABLE `tb_usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-05-27 10:22:18
