-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: tubirra
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Rubia'),(2,'Negra'),(3,'Artesanal'),(4,'Sin Alcohol');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datosuser`
--

DROP TABLE IF EXISTS `datosuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datosuser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int NOT NULL,
  `calle` varchar(45) NOT NULL,
  `altura` int NOT NULL,
  `codigo` int NOT NULL,
  `provincia` varchar(45) NOT NULL,
  `telefono` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datosuser`
--

LOCK TABLES `datosuser` WRITE;
/*!40000 ALTER TABLE `datosuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `datosuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `formapago`
--

DROP TABLE IF EXISTS `formapago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `formapago` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `formapago`
--

LOCK TABLES `formapago` WRITE;
/*!40000 ALTER TABLE `formapago` DISABLE KEYS */;
INSERT INTO `formapago` VALUES (1,'Crédito'),(2,'Débito'),(3,'Contado'),(4,'Mercado Pago'),(5,'Pago Fácil');
/*!40000 ALTER TABLE `formapago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_productos` int NOT NULL,
  `imagenes` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ProIma_idx` (`id_productos`),
  CONSTRAINT `fk_ProIma` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,1,'heineken2.jpg'),(2,1,'heineken1.jpg'),(5,3,'antares1.jpg'),(6,3,'antares2.jpg'),(7,4,'quilmes1.jpg'),(8,4,'quilmes2.jpg'),(9,1,'heineken3.jpg'),(11,3,'antares3.jpg'),(12,4,'quilmes3.jpg'),(90,70,'asdasdundefined.jpg1614449408446.jpg'),(91,70,'asdundefined - Copy.jpg1614449408448.jpg'),(111,86,'stella2.jpg1615937755877.jpg');
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_producto` int NOT NULL,
  `id_user` int NOT NULL,
  `cantidad` int NOT NULL,
  `total` float NOT NULL,
  `id_formapago` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `marca` varchar(45) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `precio` float NOT NULL,
  `stock` int NOT NULL,
  `id_categoria` int NOT NULL,
  `rating` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_CatPro_idx` (`id_categoria`),
  CONSTRAINT `fk_CatPro` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Cerveza Heineken Rubia Lata 710 Ml',NULL,'2021-03-13 18:49:36','Schneider','Somos MercadoLíder - Número 1 en Ventas\r\nEnvíos a Todo el País - Mercado Envíos\r\nRetirá por nuestro Local de Villa Crespo:\r\nLunes a Sábados de 11 a 21hs',160,60,1,60),(3,'Cerveza Artesanal Antares Ipa 473 Ml',NULL,'2021-03-13 18:48:12','Antares','Es un concepto de bar más pequeño que los clásicos y donde la cerveza artesanal es la protagonista absoluta, para tomar o para llevar. ... La nueva propuesta diseñada por Antares ofrece una alternativa ágil y descontracturada para aquellos que buscan disfrutar de una amplia variedad de estilos cervezas.',139,25,2,10),(4,'Cerveza Quilmes Sin Alcohol 0,0 % Lata 473 Ml',NULL,'2021-03-13 17:28:10','Quilmes','Así es la nueva Cerveza Quilmes 0.0%, una cerveza Rubia elaborada con ingredientes naturales y nada de alcohol.',59,100,4,41),(70,'Cerveza Schneider Rubia Lata 473 Ml','2021-02-27 18:10:08','2021-03-11 23:34:29','Schneider','Así es la nueva Cerveza Quilmes 0.0%, una cerveza Rubia elaborada con ingredientes naturales y nada de alcohol.',123,123,3,79),(86,'Cerveza Artesanal La Vieja','2021-03-16 23:35:55','2021-03-16 23:35:55','La Vieja','Es un concepto de bar más pequeño que los clásicos y donde la cerveza artesanal es la protagonista absoluta, para tomar o para llevar. ... La nueva propuesta diseñada por Antares ofrece una alternativa ágil y descontracturada para aquellos que buscan disfrutar de una amplia variedad de estilos cervezas.',159,1000,2,90);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Juan','Lopez','admin@gmail.com','$2b$12$Zo9/6EFXjG1meysg3avdceq9hxzhq49MQEE7oJck1C0w6lYmdwJ2G','admin@gmail.com.jpg',1),(3,'Juan ','Perez','jperez@gmail.com','$2b$12$7bbmETdzAgUuNHkqvZOaQ.J7Iqsv5YmGkw1xF4ZXj9ycwu8uOWZae','jperez@gmail.com.jpg',1),(4,'Juan','Perez','jperez@gmail.com','$2b$12$dQ0x83s7jwI.IXVYr9Bj3ubhmaGcpTeglI41..WoTQasVJlkL47VG','jperez@gmail.com.jpg',1),(5,'Eduardo','Baccarezza','ebacca@gmail.com','$2b$12$ax0MgP8VGavkrBrFHZLR.euYEmjwAsFCoE6joScOJI0xjrAq3vjWe','ebacca@gmail.com.jpg',1),(6,'Juan','Noto','Jnoto@gmail.com','$2b$12$bZvBOt/JB95wL5o0pXdxSOqiEOmVmVaVNPfzvsHZ6Ut17EJijDY9K','Jnoto@gmail.com.jpg',1),(7,'asdasd','asdasd','asdasd@gmail.com','$2b$12$aeFsMiSmFlFJYQGQD8FYJ.mbVK2Yc5wdoED5yR0929ikRl2iK6Dyi','asdasd@gmail.com.jpg',1),(8,'pepe','argento','pepe@argento.com','$2b$12$iMP9kJZzARRLF0QAY0h1CuAjKP6ge7KfdHkGFcCDPFdyWqBS7Q3mi','pepe@argento.com.jpg',1),(9,'Eduardo','Lopez','elopez@gmail.com','$2b$12$wJS3PMbpcsGsNC4OxJCbuej8MGcP5JkB9h2s2QOCdPe.zruE/uXua','elopez@gmail.com.jpg',1),(10,'Jose','Lopez','elopez@gmail.com','$2b$12$SPMi8rY0DoZq4QV9dgc0Ye0sRYvRPmlE5Oze8mbPcDaQElJO.xEGm','elopez@gmail.com.jpg',1),(11,'Juan','Marcante','jmarcante@gmail.com','$2b$12$3E65uYkYeDVPllkruIqhYOPJHdTire3SEY2i4Gk2By7Vtg0T75zbq','jmarcante@gmail.com.jpg',1),(12,'Miguel','Cames','mcames@gmail.com','$2b$12$wOFWcvvaUhtiE.nj2i86ROEaOra3p4ryk5t9xc1WMVUEVhjmibCXO','mcames@gmail.com.png',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tubirra'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-20  1:57:13
