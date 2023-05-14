-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: shopmt
-- ------------------------------------------------------
-- Server version	8.0.13

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `district` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `street` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ward` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKda8tuywtf0gb6sedwk7la1pgi` (`user_id`),
  CONSTRAINT `FKda8tuywtf0gb6sedwk7la1pgi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'2023-04-28 14:19:03','mantm040702@gmail.com','2023-04-28 14:19:03','mantm040702@gmail.com','Tịnh Biên','0964294799','An Giang',_binary '','Cầu đường thét','Tran Man','Tân Lập',2);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (1,'2023-04-25 17:35:30','anonymousUser','2023-04-25 17:35:30','anonymousUser'),(2,'2023-04-28 14:17:22','anonymousUser','2023-04-28 14:17:22','anonymousUser'),(3,'2023-04-28 15:33:51','anonymousUser','2023-04-28 15:33:51','anonymousUser');
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `count` int(11) NOT NULL,
  `cart_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id`),
  KEY `FKjcyd5wv4igqnw413rgxbfu4nv` (`product_id`),
  CONSTRAINT `FK1uobyhgl1wvgt1jpccia8xxs3` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  CONSTRAINT `FKjcyd5wv4igqnw413rgxbfu4nv` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_46ccwnsi9409t36lurvtyljak` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'2023-04-25 17:39:48','admin@gmail.com','2023-04-25 17:39:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419187/vwwzrzsufhpklmjt4rwu.jpg',_binary '\0','Bánh Que Cay'),(2,'2023-04-25 17:40:28','admin@gmail.com','2023-04-25 17:40:28','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419228/wkj4pmcnaj6gtripqilr.jpg',_binary '\0','Snack - Rong Biển'),(3,'2023-04-25 17:40:52','admin@gmail.com','2023-04-25 17:40:52','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419251/ljjnr5hvbjovjsf6azxc.jpg',_binary '\0','Bánh Tráng'),(4,'2023-04-25 17:41:20','admin@gmail.com','2023-04-25 17:41:20','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419278/jg2qgx18nlrewxng66pu.jpg',_binary '\0','Da Heo - Tóp Mỡ'),(5,'2023-04-25 17:41:48','admin@gmail.com','2023-04-25 17:41:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419305/dwsjy48tjegwcpw5ffjk.jpg',_binary '\0','Đồ ăn tuổi thơ'),(6,'2023-04-25 17:42:11','admin@gmail.com','2023-04-25 17:42:11','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419330/iemt4ua6ymxbng6dnbbv.jpg',_binary '\0','Khô Bò - Heo'),(7,'2023-04-25 17:42:32','admin@gmail.com','2023-04-25 17:42:32','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419351/qxjdqbbbuwjxvnpehpk3.webp',_binary '\0','Nước uống tự nấu');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `is_deleted` bit(1) DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` double NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6w7x1hkcbj5g4ng2gow3t9fhc` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
INSERT INTO `delivery` VALUES (1,'2023-04-25 17:37:16','admin@gmail.com','2023-04-25 17:37:16','admin@gmail.com','Giao hàng trong 6 giờ',_binary '\0','Giao hàng hỏa tốc',30000),(2,'2023-04-25 17:37:33','admin@gmail.com','2023-04-25 17:37:33','admin@gmail.com','Giao hàng trong 24 giờ',_binary '\0','Giao hàng nhanh',20000),(3,'2023-04-25 17:37:48','admin@gmail.com','2023-04-25 17:37:48','admin@gmail.com','Giao hàng trong 3 ngày',_binary '\0','Giao hàng bình thường',12000);
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_product`
--

DROP TABLE IF EXISTS `image_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image_product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKml4177k7ufupebm7e4wgmvpnj` (`product_id`),
  CONSTRAINT `FKml4177k7ufupebm7e4wgmvpnj` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_product`
--

LOCK TABLES `image_product` WRITE;
/*!40000 ALTER TABLE `image_product` DISABLE KEYS */;
INSERT INTO `image_product` VALUES (1,'2023-04-25 17:46:07','admin@gmail.com','2023-04-25 17:46:07','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419561/lqtgddi9t0twn5ecii3e.jpg',1),(2,'2023-04-25 17:46:07','admin@gmail.com','2023-04-25 17:46:07','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419563/qx4ot1y0tlebsu1wqizl.jpg',1),(3,'2023-04-25 17:46:07','admin@gmail.com','2023-04-25 17:46:07','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419565/vqywm1eigtmnnsjgmh9o.jpg',1),(4,'2023-04-25 17:46:07','admin@gmail.com','2023-04-25 17:46:07','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419566/qzjt7rk7zkpn3lpqbjpe.jpg',1),(5,'2023-04-25 17:47:39','admin@gmail.com','2023-04-25 17:47:39','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419652/hthpgrn0grg5vek8j0l7.jpg',2),(6,'2023-04-25 17:47:39','admin@gmail.com','2023-04-25 17:47:39','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419654/vnf2unffzp1aut2wxrnk.jpg',2),(7,'2023-04-25 17:47:39','admin@gmail.com','2023-04-25 17:47:39','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419656/ex1rhrrlrxzhottfujw7.jpg',2),(8,'2023-04-25 17:47:39','admin@gmail.com','2023-04-25 17:47:39','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419658/pwx9xa7vs1kdgvztcnky.jpg',2),(9,'2023-04-25 17:48:48','admin@gmail.com','2023-04-25 17:48:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419722/rdkzkaxjnoeu6zzyh3tv.jpg',3),(10,'2023-04-25 17:48:48','admin@gmail.com','2023-04-25 17:48:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419724/n9bmiougpxsthsrhycjs.jpg',3),(11,'2023-04-25 17:48:48','admin@gmail.com','2023-04-25 17:48:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419726/qdd3eclky0rgc294brjk.jpg',3),(12,'2023-04-25 17:48:48','admin@gmail.com','2023-04-25 17:48:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419727/fjxkwijy3e25imcycxbk.jpg',3),(13,'2023-04-25 17:50:12','admin@gmail.com','2023-04-25 17:50:12','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419805/d6z600rhjgzy9kxnzpal.jpg',4),(14,'2023-04-25 17:50:12','admin@gmail.com','2023-04-25 17:50:12','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419807/xys0z8agaczmh8gzhzvh.jpg',4),(15,'2023-04-25 17:50:12','admin@gmail.com','2023-04-25 17:50:12','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419809/va1zg7eafeklwles6goi.jpg',4),(16,'2023-04-25 17:50:12','admin@gmail.com','2023-04-25 17:50:12','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682419811/rayx4h8hcooounhettk5.jpg',4),(17,'2023-04-25 18:20:02','admin@gmail.com','2023-04-25 18:20:02','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421595/kumagzhjr9go2lko9wi4.jpg',5),(18,'2023-04-25 18:20:02','admin@gmail.com','2023-04-25 18:20:02','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421597/hqnmofopeh2xmqeshmwi.jpg',5),(19,'2023-04-25 18:20:02','admin@gmail.com','2023-04-25 18:20:02','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421599/wd8h5orfowlgowj5mru3.jpg',5),(20,'2023-04-25 18:20:02','admin@gmail.com','2023-04-25 18:20:02','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421601/gmld4n5voxxll2wymkb1.jpg',5),(21,'2023-04-25 18:21:19','admin@gmail.com','2023-04-25 18:21:19','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421672/k9xljntf0hurbfxp18si.jpg',6),(22,'2023-04-25 18:21:19','admin@gmail.com','2023-04-25 18:21:19','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421674/i2kxgpikwylkz0tsoxdx.jpg',6),(23,'2023-04-25 18:21:19','admin@gmail.com','2023-04-25 18:21:19','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421676/ilur7gac0l9ci9l3dxv3.jpg',6),(24,'2023-04-25 18:21:19','admin@gmail.com','2023-04-25 18:21:19','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421678/pnwe2arxp9acpdkxssja.jpg',6),(25,'2023-04-25 18:22:32','admin@gmail.com','2023-04-25 18:22:32','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421743/vx8zf8ezvdbycgb7m3d4.jpg',7),(26,'2023-04-25 18:22:32','admin@gmail.com','2023-04-25 18:22:32','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421745/btvxek9zog8mks7kdlgf.jpg',7),(27,'2023-04-25 18:22:32','admin@gmail.com','2023-04-25 18:22:32','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421748/fdnjouucxtlavwy38vjq.jpg',7),(28,'2023-04-25 18:22:32','admin@gmail.com','2023-04-25 18:22:32','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421751/tbfcy5zdaduovjhuwknl.jpg',7),(29,'2023-04-25 18:23:47','admin@gmail.com','2023-04-25 18:23:47','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421821/axuqu1feuthejcb47kuz.jpg',8),(30,'2023-04-25 18:23:47','admin@gmail.com','2023-04-25 18:23:47','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421823/tzsdsfh3ugl7vi7bzmsq.jpg',8),(31,'2023-04-25 18:23:47','admin@gmail.com','2023-04-25 18:23:47','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421825/koefvqhwmbfdzxketwi7.jpg',8),(32,'2023-04-25 18:23:47','admin@gmail.com','2023-04-25 18:23:47','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421826/lakl3zlvtwgrn8w19bol.jpg',8),(33,'2023-04-25 18:24:52','admin@gmail.com','2023-04-25 18:24:52','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421885/woi9qqvbaqeclowtavqm.jpg',9),(34,'2023-04-25 18:24:52','admin@gmail.com','2023-04-25 18:24:52','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421888/b0bb5bgvcpshd5ci3ehf.jpg',9),(35,'2023-04-25 18:24:52','admin@gmail.com','2023-04-25 18:24:52','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421889/yz4auapfd2njlapujktk.jpg',9),(36,'2023-04-25 18:24:52','admin@gmail.com','2023-04-25 18:24:52','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421891/to8feteihbakdcg2ujou.webp',9),(37,'2023-04-25 18:25:51','admin@gmail.com','2023-04-25 18:25:51','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421943/rouszakps48bojhw1sjv.jpg',10),(38,'2023-04-25 18:25:51','admin@gmail.com','2023-04-25 18:25:51','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421946/vydmpxtlvw01gswxccpn.jpg',10),(39,'2023-04-25 18:25:51','admin@gmail.com','2023-04-25 18:25:51','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421948/gkfhk9yldiaont52ffm6.jpg',10),(40,'2023-04-25 18:25:51','admin@gmail.com','2023-04-25 18:25:51','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682421950/ectfzdhprulb5ye6ixno.jpg',10),(41,'2023-04-25 18:26:58','admin@gmail.com','2023-04-25 18:26:58','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422010/iehzy8edxcgjylsdwsha.jpg',11),(42,'2023-04-25 18:26:58','admin@gmail.com','2023-04-25 18:26:58','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422013/kfci7bafjha0jubgvb8d.jpg',11),(43,'2023-04-25 18:26:58','admin@gmail.com','2023-04-25 18:26:58','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422015/ceyiswmysaiuxdtxfdma.jpg',11),(44,'2023-04-25 18:26:58','admin@gmail.com','2023-04-25 18:26:58','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422017/krqlxcgjlpreuhv35geq.jpg',11),(45,'2023-04-25 18:28:13','admin@gmail.com','2023-04-25 18:28:13','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422085/rkaqe6yrvafefdx8k94l.jpg',12),(46,'2023-04-25 18:28:13','admin@gmail.com','2023-04-25 18:28:13','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422087/mr6jcgpgujcibu8bfm4w.jpg',12),(47,'2023-04-25 18:28:13','admin@gmail.com','2023-04-25 18:28:13','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422089/r4uim165bgjzjm73y9wf.jpg',12),(48,'2023-04-25 18:28:13','admin@gmail.com','2023-04-25 18:28:13','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422092/mdjkovougzpjvuxvg5v1.jpg',12),(49,'2023-04-25 18:29:38','admin@gmail.com','2023-04-25 18:29:38','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422171/rihxch7f73vey7isd9f5.jpg',13),(50,'2023-04-25 18:29:38','admin@gmail.com','2023-04-25 18:29:38','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422173/bugtfvm4da0co8i17cqe.jpg',13),(51,'2023-04-25 18:29:38','admin@gmail.com','2023-04-25 18:29:38','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422175/wi3hnn42thwhkdw1rsv8.jpg',13),(52,'2023-04-25 18:29:38','admin@gmail.com','2023-04-25 18:29:38','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422177/svsxhe2laurt1okn2oyt.jpg',13),(53,'2023-04-25 18:30:43','admin@gmail.com','2023-04-25 18:30:43','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422237/pfxnwb4waeonl1oihjtc.jpg',14),(54,'2023-04-25 18:30:43','admin@gmail.com','2023-04-25 18:30:43','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422239/jpedv8eykb46xncjlmd0.jpg',14),(55,'2023-04-25 18:30:43','admin@gmail.com','2023-04-25 18:30:43','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422240/mnylffxs3veag2l0jflz.jpg',14),(56,'2023-04-25 18:30:43','admin@gmail.com','2023-04-25 18:30:43','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422242/henr7bpdrcym7ljk7hzk.jpg',14),(57,'2023-04-25 18:31:49','admin@gmail.com','2023-04-25 18:31:49','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422304/adpbnaquz9ehbtcc01pp.jpg',15),(58,'2023-04-25 18:31:49','admin@gmail.com','2023-04-25 18:31:49','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422306/cqs6e03glhidlb9duljs.jpg',15),(59,'2023-04-25 18:31:49','admin@gmail.com','2023-04-25 18:31:49','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422307/mrv9xyrmnfp4qy6j7o4v.jpg',15),(60,'2023-04-25 18:31:49','admin@gmail.com','2023-04-25 18:31:49','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422309/nfuzcvzbgycalptt1stq.jpg',15),(61,'2023-04-25 18:34:31','admin@gmail.com','2023-04-25 18:34:31','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422465/jzwfr8cnwynew5x8y5pc.jpg',16),(62,'2023-04-25 18:34:31','admin@gmail.com','2023-04-25 18:34:31','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422467/a7ewql4xgch2fdapwr7m.jpg',16),(63,'2023-04-25 18:34:31','admin@gmail.com','2023-04-25 18:34:31','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422469/zdfmzeoxoaehuwgdfmgh.jpg',16),(64,'2023-04-25 18:34:31','admin@gmail.com','2023-04-25 18:34:31','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422471/s9xdugisnzbuqfzptsgv.jpg',16),(65,'2023-04-25 18:35:52','admin@gmail.com','2023-04-25 18:35:52','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422546/hxt2dgmljhks2awygxn1.jpg',17),(66,'2023-04-25 18:35:52','admin@gmail.com','2023-04-25 18:35:52','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422547/ao7ciai9ksgtqv3vjfb8.jpg',17),(67,'2023-04-25 18:35:52','admin@gmail.com','2023-04-25 18:35:52','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422549/sy0nluidmouhhqny4xyy.jpg',17),(68,'2023-04-25 18:35:52','admin@gmail.com','2023-04-25 18:35:52','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422551/otgfm8ri0jc8taqktcxu.jpg',17),(69,'2023-04-25 18:37:14','admin@gmail.com','2023-04-25 18:37:14','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422628/jrgiiykvxbhrdxnaidqi.jpg',18),(70,'2023-04-25 18:37:14','admin@gmail.com','2023-04-25 18:37:14','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422630/v998vz5b7cte7bq1lzzq.jpg',18),(71,'2023-04-25 18:37:14','admin@gmail.com','2023-04-25 18:37:14','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422632/j81oeyqvwoy3eucbwqtx.jpg',18),(72,'2023-04-25 18:37:14','admin@gmail.com','2023-04-25 18:37:14','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422633/iskjsksvw4u604e6frpt.jpg',18),(73,'2023-04-25 18:38:37','admin@gmail.com','2023-04-25 18:38:37','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422710/rl6x6rqtvyvo3iponq9x.webp',19),(74,'2023-04-25 18:38:37','admin@gmail.com','2023-04-25 18:38:37','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422712/sxgbsufvyfruglwuzspx.jpg',19),(75,'2023-04-25 18:38:37','admin@gmail.com','2023-04-25 18:38:37','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422714/xj6dyrlr0hpzlbanekga.jpg',19),(76,'2023-04-25 18:38:37','admin@gmail.com','2023-04-25 18:38:37','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422716/bt4mdgnd2oivmbgjbrbt.jpg',19),(77,'2023-04-25 18:39:41','admin@gmail.com','2023-04-25 18:39:41','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422774/fg2jzguwgflpvgoomfw7.jpg',20),(78,'2023-04-25 18:39:41','admin@gmail.com','2023-04-25 18:39:41','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422776/x27zyimb6ealermjcehu.jpg',20),(79,'2023-04-25 18:39:41','admin@gmail.com','2023-04-25 18:39:41','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422778/hsrmfcuzurswhuij4xpk.webp',20),(80,'2023-04-25 18:39:41','admin@gmail.com','2023-04-25 18:39:41','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422780/urxx4ycuu6ge3entnfpq.jpg',20),(81,'2023-04-25 18:40:48','admin@gmail.com','2023-04-25 18:40:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422840/l3w7yfbqqfhlhazoauys.jpg',21),(82,'2023-04-25 18:40:48','admin@gmail.com','2023-04-25 18:40:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422843/rpydfmdd0xtawtnpc2pd.jpg',21),(83,'2023-04-25 18:40:48','admin@gmail.com','2023-04-25 18:40:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422845/njfcpdraqgyw60fo1p8j.jpg',21),(84,'2023-04-25 18:40:48','admin@gmail.com','2023-04-25 18:40:48','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422847/hcxuilfcjbsezqrgbq6c.jpg',21),(85,'2023-04-25 18:42:07','admin@gmail.com','2023-04-25 18:42:07','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422919/xoy0apsekwdhvzbe0nfy.webp',22),(86,'2023-04-25 18:42:07','admin@gmail.com','2023-04-25 18:42:07','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422922/eqm9yxv5sfphdegz5oel.jpg',22),(87,'2023-04-25 18:42:07','admin@gmail.com','2023-04-25 18:42:07','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422923/fmanny5lcjqpptbm01cu.jpg',22),(88,'2023-04-25 18:42:07','admin@gmail.com','2023-04-25 18:42:07','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682422925/eynqrxhzfl7oyxc9lbrr.jpg',22),(89,'2023-04-26 08:26:13','admin@gmail.com','2023-04-26 08:26:13','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682472366/sl9bp9872akf9igel3tt.jpg',23),(90,'2023-04-26 08:26:13','admin@gmail.com','2023-04-26 08:26:13','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682472368/h1xblxyxabl8qz8trnrk.jpg',23),(91,'2023-04-26 08:26:13','admin@gmail.com','2023-04-26 08:26:13','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682472371/qh4w78y5y0mb6u4jnfhc.jpg',23),(92,'2023-04-26 08:26:13','admin@gmail.com','2023-04-26 08:26:13','admin@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682472373/ksblwr2ukgia81xo493t.jpg',23);
/*!40000 ALTER TABLE `image_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `count` int(11) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt4dc2r9nbvbujrljv3e23iibt` (`order_id`),
  KEY `FK551losx9j75ss5d6bfsqvijna` (`product_id`),
  CONSTRAINT `FK551losx9j75ss5d6bfsqvijna` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `FKt4dc2r9nbvbujrljv3e23iibt` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,'2023-04-28 14:19:19','mantm040702@gmail.com','2023-04-28 14:19:19','mantm040702@gmail.com',10,1,13),(2,'2023-04-28 14:19:19','mantm040702@gmail.com','2023-04-28 14:19:19','mantm040702@gmail.com',1,1,19);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `amount_from_user` double NOT NULL,
  `is_paid_before` bit(1) DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `delivery_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKtkrur7wg4d8ax0pwgo0vmy20c` (`delivery_id`),
  KEY `FKel9kyl84ego2otj2accfd8mr7` (`user_id`),
  CONSTRAINT `FKel9kyl84ego2otj2accfd8mr7` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKtkrur7wg4d8ax0pwgo0vmy20c` FOREIGN KEY (`delivery_id`) REFERENCES `delivery` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2023-04-28 14:19:19','mantm040702@gmail.com','2023-04-28 14:19:52','admin@gmail.com','Tran Man: Cầu đường thét, Tân Lập, Tịnh Biên, An Giang',190000,_binary '\0','0964294799','DELIVERED',1,2);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `otp`
--

DROP TABLE IF EXISTS `otp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `otp` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `code` int(11) DEFAULT NULL,
  `expired` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `otp`
--

LOCK TABLES `otp` WRITE;
/*!40000 ALTER TABLE `otp` DISABLE KEYS */;
/*!40000 ALTER TABLE `otp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `promotional_price` double NOT NULL,
  `quantity` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `sold` int(11) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1mtsbur82frn64de7balymq9s` (`category_id`),
  CONSTRAINT `FK1mtsbur82frn64de7balymq9s` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'2023-04-25 17:46:07','admin@gmail.com','2023-04-25 17:46:07','admin@gmail.com','<p>Snack que ăn giòn, nhai nhiều sẽ thấy ngon, đậm vị và có mùi tôm thơm thơm kích thích vị giác. Bánh que Dorkbua vị tôm 50g tiện lợi</p>','Bánh Que Đỏ Dorkbua Vị Tôm',20000,16000,100,0,0,1),(2,'2023-04-25 17:47:39','admin@gmail.com','2023-04-25 17:47:39','admin@gmail.com','<p>Bánh que Mix hương vị gà cay gói 60g của thương hiệu bánh que&nbsp;Mix&nbsp;có nguồn gốc nội địa Thái Lan với hương vị gà cay cay tạo cảm giác kích thích khi ăn</p>','Bánh Que Mix Hương Vị Gà Cay',20000,16000,100,0,0,1),(3,'2023-04-25 17:48:48','admin@gmail.com','2023-04-25 17:48:48','admin@gmail.com','<p>Bánh que Mix vị ớt cay gói 60g của thương hiệu bánh que Mix có nguồn gốc nội địa Thái Lan với hương vị ớt cay cay tạo cảm giác kích thích khi ăn.</p>','Bánh Que Mix Vị Ớt Cay',20000,16000,100,0,0,1),(4,'2023-04-25 17:50:12','admin@gmail.com','2023-04-25 17:50:12','admin@gmail.com','<p>Bánh que nhỏ nhỏ nên giòn rôm rốp, màu sắc vàng ươm kích thích vị giác vô cùng. Bánh que vàng vị bắp bơ Dorkbua gói 55g còn có hương vị bắp bơ thơm thơm hấp dẫn, ăn vào mặn mặn ngọt ngọt</p>','Bánh Que Vàng Dorkbua Vị Bắp Bơ',20000,16000,99,0,0,1),(5,'2023-04-25 18:20:02','admin@gmail.com','2023-04-25 18:20:02','admin@gmail.com','<p>2 lon snack vị kem chua &amp; hành Lay\'s 160g với sự kết hợp độc đáo từ sữa, phô mai và các thành phần khác tạo nên vị kem chua hành độc đáo mới lạ.</p>','Snack Khoai Tây Vị Kem',82000,65000,100,0,0,2),(6,'2023-04-25 18:21:19','admin@gmail.com','2023-04-25 18:21:19','admin@gmail.com','<p>Snack mang vị cay the, gia vị hoàn hảo lại còn đậm đà cho từng miếng mực giòn ngon, thơm khó cưỡng. Snack mực tẩm gia vị cay Bento gói 6g nội địa Thái Lan kích thích vị giác vừa ăn vừa xem phim là tuyệt vời.</p>','Snack Mực Tẩm Gia Vị Cay Bento',10000,7000,100,0,0,2),(7,'2023-04-25 18:22:32','admin@gmail.com','2023-04-25 18:22:32','admin@gmail.com','<p>Snack Talaethong đa dạng hương vị sản phẩm với hình dáng miếng mực hấp dẫn, snack là món ăn phù hợp với nhiều độ tuổi, có thể dùng ăn vặt, picnic,.... rất tiện lợi</p>','Snack Mực Truyền Thống',27000,20000,200,0,0,2),(8,'2023-04-25 18:23:47','admin@gmail.com','2023-04-25 18:23:47','admin@gmail.com','<p>Bánh Tráng Dẻo Tôm 500gr/1 xấp khoảng 15 miếng. Ko quá dày ko quá mỏng. Miếng bánh to. Vị mặn mặn thơm thơm lại cay nhẹ và mềm dẻo dễ ăn!</p>','Bánh Tráng Dẽo Tôm',45000,31000,100,0,0,3),(9,'2023-04-25 18:24:52','admin@gmail.com','2023-04-25 18:24:52','admin@gmail.com','<p>Được kết hợp giữa hương vị sữa với những sợi bánh dẻo dai thấm đượm gia vị với phômai tạo nên một màu sắc tuyệt vời, bắt mắt người xem.</p>','Bánh Tráng Lắc',20000,14000,100,0,0,3),(10,'2023-04-25 18:25:51','admin@gmail.com','2023-04-25 18:25:51','admin@gmail.com','<p>- Ngon nhức nhối vì món này luôn.<br>- 1 bịch gồm: bánh tráng phơi sương, 1 gói muối tôm, 1 gói hành phi, 1 gói sa tế ớt, 1 quả tắc/ quất.<br>- 1 xâu gồm 10 bịch nhỏ nha mọi người, tự trộn tự vò, ăn nghiện vô cùng, đã ăn là muốn ăn hoài</p>','Bánh Tráng Trộn Vò Tắc',42000,27000,100,0,0,3),(11,'2023-04-25 18:26:58','admin@gmail.com','2023-04-25 18:26:58','admin@gmail.com','<p>DA HEO QUAY GIÒN SỐT MẮM TỎI NHA MẤY TÌNH YÊU ƠI - &nbsp;Da heo được quay, không phải chiên bằng dầu nên cực giòn, không bị khét hay quá dầu</p>','Da Heo Chiên Giòn',60000,49000,100,0,0,4),(12,'2023-04-25 18:28:13','admin@gmail.com','2023-04-25 18:28:13','admin@gmail.com','<p>TÓP MỠ LIỀN DA SỐT MẮM HÀNH - Thơm lừng, cay cay, mặn mặn ngọt ngọt thấm đều từng miếng. Tóp mỡ được nhà em gia công không khác gì tóp heo quay đâu nhen bà con.</p>','Tóp Mỡ Sốt Mắm Hành',134000,78000,100,0,0,4),(13,'2023-04-25 18:29:38','admin@gmail.com','2023-04-28 14:20:28','admin@gmail.com','<p>MÌ TÔM TRẺ EM MIU MIU - Món mà từ sanh dziên tới trẻ nhỏ ai cũng thích cũng mê &gt;&lt;&nbsp;<br>Thèm lắm cái thức giòn rụm của mì tôm trẻ em, quyện cùng hương vị mặn ngọt của gói gia vị</p>','Mì Trẻ Em Ngày Xưa',2000,2000,290,5,10,5),(14,'2023-04-25 18:30:43','admin@gmail.com','2023-04-25 18:30:43','admin@gmail.com','<p>BỘT TRÁI CÂY NGÀY XƯA<br>Món ngon trong căn tin nhiều vậy nhưng trong số bánh kẹo tuổi thơ vẫn thích hũ bột trái cây này aww.&nbsp;</p>','Hủ Kẹo Bột Tuổi Thơ',3000,3000,200,0,0,5),(15,'2023-04-25 18:31:49','admin@gmail.com','2023-04-25 18:31:49','admin@gmail.com','<p>Chỉ cần chấm MILO CUBE với sữa tươi không đường và thưởng thức thôi. Vị sữa béo ngậy sẽ tăng thêm độ ngon cho milo cube, hơn nữa vừa ăn vừa nhâm nhi chút sữa không đường sẽ làm dịu độ ngọt của MILO CUBE. Gồm 15 viên</p>','Kẹo Milo Cube Thái Lan',27000,20000,200,0,0,5),(16,'2023-04-25 18:34:31','admin@gmail.com','2023-04-25 18:34:31','admin@gmail.com','<p>Khô bò mềm, vị cay cay kích thích vị giác. Tasty đảm bảo KHÔ BÒ thật , khô bò nhà làm đã trên 20 năm. Thưởng thức Khô Bò Ngon ngay với 1 cú click nào!</p>','Khô Bò Miếng Đóng Lon',305000,180000,12,0,0,6),(17,'2023-04-25 18:35:52','admin@gmail.com','2023-04-25 18:35:52','admin@gmail.com','<p>- Thành phần: thịt bò ,đường cát, muối ăn , ớt,tiêu ,gừng, tỏi, sả, ngũ vị hương...<br>- Hướng dẫn bảo quản: Nhiệt độ thường, tránh ánh nắng trực tiếp...<br>- Trọng lượng tịnh: 150gr/ 1 hũ</p>','Khô Bò Sợ Vụng',288000,158000,10,0,0,6),(18,'2023-04-25 18:37:14','admin@gmail.com','2023-04-25 18:37:14','admin@gmail.com','<p>Nguồn nguyên liệu sạch. Làm 100% từ thịt ức gà tươi, ớt , tỏi , lá chanh tươi, không phụ gia, không trộn bột.<br>Quy trình chế biến sạch, đảm bảo vệ sinh an toàn thực phẩm.</p>','Khô Gà Lá Chanh Đóng Lon',75000,39000,200,0,0,6),(19,'2023-04-25 18:38:37','admin@gmail.com','2023-04-28 14:19:19','mantm040702@gmail.com','<p>Tẩm ướp công thức riêng ko giống bất cứ loại heo khô nào trên thị trường . Ở mức độ nửa khô nửa ướt đặc biệt . Ăn đậm đà thơm ngon vị đặc trưng của thịt hoà quyện với tỏi giòn .</p>','Khô Heo Cháy Tỏi',260000,140000,199,0,1,6),(20,'2023-04-25 18:39:41','admin@gmail.com','2023-04-25 18:39:41','admin@gmail.com','<p>Món Chè dưỡng nhan gì vừa ngon lại vừa bổ &nbsp;Set nhà ONICI lại quá đầy đủ các nguyên liệu cao cấp nấu được TẬN HƠN 30 CHÉN &nbsp;Ai cũng không thể chối cãi về rất nhiều công dụng hữu ích của món Chè dưỡng nhan huyền thoại này.</p>','Chè Dưỡng Nhan',145000,107000,200,0,0,7),(21,'2023-04-25 18:40:48','admin@gmail.com','2023-04-25 18:40:48','admin@gmail.com','<p>Sâm bổ lượng Bếp của mẹ ONICI, Set nguyên liệu dùng thử 5-7 chén thượng hạn<br>Trước hết phải nói tới Sâm bổ lượng…hay còn gọi là chè sâm bổ lượng, là một món chè ngọt Việt Nam</p>','Sâm Bổ Lượng 9 Món',39000,33000,200,0,0,7),(22,'2023-04-25 18:42:07','admin@gmail.com','2023-04-25 18:42:07','admin@gmail.com','<p>CÔNG THỨC GIA TRUYỀN CHUẨN VỊ Ở QUÁN đảm bảo tiêu chí NHANH-GỌN-NGON HÂN HẠNH PHỤC VỤ chị em với #trà_sữa thơm ngon, đậm vị trà, không pha hoá chất và #trân_châu dai dai, thơm thơm, bùi bùi</p>','Set Trà Sữa Thái Xanh',42000,32000,200,0,0,7),(23,'2023-04-26 08:26:13','admin@gmail.com','2023-05-07 20:49:15','admin@gmail.com','<p>Chắc chắn tuổi thơ ai cũng từng được bà cho 1 gói bánh đồng tiền này rồi đúng không ạ, không thì là ký ức về những lần đi cướp cháo với đám bạn. Và giờ vẫn hương vị ngọt ngọt thêm chút mằn mặn giòn tan ấy đi cùng năm tháng lại gặp ở shop mình, bạn còn ngần ngại gì mà không thêm vào giỏ hàng để book một chuyến về tuổi thơ ạ.</p>','Bánh Quy Đồng Tiền Tuổi Thơ',13000,9000,100,0,0,5);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_like`
--

DROP TABLE IF EXISTS `product_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_like` (
  `user_id` bigint(20) NOT NULL,
  `product_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`product_id`),
  KEY `FKd6nh1euqp9m8i7p5dq25nb2wj` (`product_id`),
  CONSTRAINT `FK5qcc7vvkd0lg315ssqgndcx3d` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKd6nh1euqp9m8i7p5dq25nb2wj` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_like`
--

LOCK TABLES `product_like` WRITE;
/*!40000 ALTER TABLE `product_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_password`
--

DROP TABLE IF EXISTS `reset_password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reset_password` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `code` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `expired` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_password`
--

LOCK TABLES `reset_password` WRITE;
/*!40000 ALTER TABLE `reset_password` DISABLE KEYS */;
INSERT INTO `reset_password` VALUES (13,'2023-04-29 01:59:01','anonymousUser','2023-04-29 01:59:01','anonymousUser','rUSFI1jhHZ','cristran040702@gmail.com','2023-04-29 02:04:01');
/*!40000 ALTER TABLE `reset_password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `content` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `rating` int(11) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKnkc5s3da46cbx8oeqrfhnm7es` (`order_id`),
  KEY `FKiyof1sindb9qiqr9o8npj8klt` (`product_id`),
  KEY `FKiyf57dy48lyiftdrf7y87rnxi` (`user_id`),
  CONSTRAINT `FKiyf57dy48lyiftdrf7y87rnxi` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKiyof1sindb9qiqr9o8npj8klt` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `FKnkc5s3da46cbx8oeqrfhnm7es` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'2023-04-28 14:20:28','admin@gmail.com','2023-04-28 14:20:28','admin@gmail.com','Giao hàng nhanh, đóng gói cẩn thận',5,1,13,2);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'2023-04-25 00:00:00',NULL,NULL,NULL,'ADMIN'),(2,'2023-04-25 00:00:00',NULL,NULL,NULL,'USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `device_id` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `expired` datetime DEFAULT NULL,
  `refresh_token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,'2023-04-25 17:35:30','anonymousUser','2023-04-25 17:35:30','anonymousUser',NULL,'2023-04-25 20:23:30','S1sLBJeUsVjc1ar9KKVSSkWCmcvY5KS4cV8q4fiRuknX30FMKJOo4Jlu1hve12lg',1),(2,'2023-04-25 17:36:40','anonymousUser','2023-04-25 17:36:40','anonymousUser',NULL,'2023-04-25 20:24:40','GAS5dMsehph8Nsbtr6OaeJ5FblaBIOsvBZWDVeqoIR1FtdCDTCRAGWvCdhLYMUgf',1),(3,'2023-04-25 17:45:14','anonymousUser','2023-04-25 17:45:14','anonymousUser',NULL,'2023-04-25 20:33:14','Q5XUfSOXbALThaCqq859Btosf6bc0dcE83nmV9DJpAVv2iTCEKUkuBYV3Y8XdbXI',1),(4,'2023-04-25 18:18:02','anonymousUser','2023-04-25 18:18:02','anonymousUser',NULL,'2023-04-25 21:06:02','66WuNZdkmNS8YKiK5968SWb6jFP7dGN42qSVR4b2aoIlgmQY7WvNcqA7qlCmqSc6',1),(5,'2023-04-25 18:19:07','anonymousUser','2023-04-25 18:19:07','anonymousUser',NULL,'2023-04-25 21:07:07','HcK4G1aQhoJ6kWqcK0ivKs4N5AWMppqGq5sm5ZagOoPj04nMeYOBpIlM9SRGOff0',1),(9,'2023-04-28 14:17:22','anonymousUser','2023-04-28 14:17:22','anonymousUser',NULL,'2023-04-28 17:05:22','Ya76H5piqBnNQIVWABX4ecqGGffFqrDn626ZRLFnEcgATMjXncBmVdIl4VQ8ctDC',2),(10,'2023-04-28 14:19:39','anonymousUser','2023-04-28 14:19:39','anonymousUser',NULL,'2023-04-28 17:07:39','bTvj9JMhAuQEoeuWPPalXqThRJrqDjLqZDICq20qFsIcCWhWJuUf7dvZ3Sb5EObk',1),(11,'2023-04-28 14:29:07','anonymousUser','2023-04-28 14:29:07','anonymousUser',NULL,'2023-04-28 17:17:07','Cd4r8dulvo2A433tKESq7PjSUPTERllY0jQkdv0AjYKJqLFAGFhZXhsC5FqZrSlr',2),(12,'2023-04-28 14:29:37','anonymousUser','2023-04-28 14:29:37','anonymousUser',NULL,'2023-04-28 17:17:37','aGfcmJNdu186f5rKVgiSGYW4tKJfF6AQK02YhLfAvHhR4IWiO8ar7H7oYcalIA6m',2),(13,'2023-04-28 14:30:28','anonymousUser','2023-04-28 14:30:28','anonymousUser',NULL,'2023-04-28 17:18:28','T9vFZG7VOD4s3pCkdC14fj6EROkF7DgtIcbFZ67dQRiGL5Z9KtvIWodIg7B9cnYk',2),(14,'2023-04-28 14:31:23','anonymousUser','2023-04-28 14:31:23','anonymousUser',NULL,'2023-04-28 17:19:23','NfEtrgeiNQjm6mJIhOCEben02Zu8fjF7Yk2OChrgVB8do0FlEgRDOaslQ0dng8fQ',2),(16,'2023-04-28 14:33:57','anonymousUser','2023-04-28 14:33:57','anonymousUser',NULL,'2023-04-28 17:21:57','hlHcOmEl7eBD219TB9rVKVa943pVgVot5IGFoiMKmq4rhf96PoobJ7vFjsqZ3Job',2),(18,'2023-04-28 15:33:51','anonymousUser','2023-04-28 15:33:51','anonymousUser',NULL,'2023-04-28 18:21:51','hdt3meWWeddfAW2veL2poK17ZgQ8WHYuMEiV95TdnESKTsPKN9jEBYvmMhATMc9L',3),(19,'2023-04-28 15:37:57','anonymousUser','2023-04-28 15:37:57','anonymousUser',NULL,'2023-04-28 18:25:57','tUthBAGN9Dh2EL44FuJIiZ6C5m4QsAeGJS761Kc55qMPeTlhETUSkhGX4CCRhZcl',3),(20,'2023-04-28 15:39:14','anonymousUser','2023-04-28 15:39:14','anonymousUser',NULL,'2023-04-28 18:27:14','vqXBY8pkk5KtvPMFt0hZNRiCPj1iqFrEAXLTgHfkUXuAaN2qThP5EJqhnqgBtt0N',3),(21,'2023-04-28 15:47:16','anonymousUser','2023-04-28 15:47:16','anonymousUser',NULL,'2023-04-28 18:35:16','OTpgPEjKhB1Kld4rNdZNsZFO3KQ3euJNbAbZgAZ5mGigtHC2T13HEa9ncHYghrQI',3),(22,'2023-04-28 15:56:46','anonymousUser','2023-04-28 15:56:46','anonymousUser',NULL,'2023-04-28 18:44:46','Cckg5Y3IWECrNoV8IhXKvc27YiZdfuveuEHluWdhOPL3lpJghaa3NKoGZgeWUlSr',3),(26,'2023-04-28 17:40:35','anonymousUser','2023-04-28 17:40:35','anonymousUser',NULL,'2023-04-28 20:28:35','Q7eI6edStGhYg5aRp0enip3msioBgDGFGbLYLjDW456gA8srOpHH4asGpOXX8PnW',3),(27,'2023-04-28 17:54:30','anonymousUser','2023-04-28 17:54:30','anonymousUser',NULL,'2023-04-28 20:42:30','fmFB8H7pasLkHnsA7nQnjGnZiupVmAQ43HYBctjJEk0LcQ0AuK6m6sB27LjAcr92',3),(28,'2023-04-28 21:39:25','anonymousUser','2023-04-28 21:39:25','anonymousUser',NULL,'2023-04-29 00:27:25','871GC9PDmPOcbGhGOm0JWvgQ1aC6Sfdri7RsWg2vfQN61fFLbWHicEOsmBRY5Brs',3),(29,'2023-04-28 22:02:55','anonymousUser','2023-04-28 22:02:55','anonymousUser',NULL,'2023-04-29 00:50:55','FJC8NqWoO3XjCVKcKAYdB7dHJMdSnQvKmNLp020d7e39M8GEN7NvmXuPuXXLApd1',3),(30,'2023-04-28 22:03:12','anonymousUser','2023-04-28 22:03:12','anonymousUser',NULL,'2023-04-29 00:51:12','FTPI0hhjGaLikSjSFqcGVAVD7NAVO3gvRGEPnQfs1vCOej8F3clEhhFiboGKnQDZ',3),(31,'2023-04-28 22:46:58','anonymousUser','2023-04-28 22:46:58','anonymousUser',NULL,'2023-04-29 01:34:58','pNoiuD9JrbdpHLS8Grjko7dD0Io4QuIHIN5Vb2acIC2R4W9eP2K6QO5Bk1o7CXH9',3),(32,'2023-04-29 00:49:45','anonymousUser','2023-04-29 00:49:45','anonymousUser',NULL,'2023-04-29 03:37:45','e8qRRRDqMFrB0V9ntdEs38BjfOWSfRIYOqXcfNcobHsgBDB9Bh0eMIasYpFiIrbv',3),(33,'2023-04-29 01:12:36','anonymousUser','2023-04-29 01:12:36','anonymousUser',NULL,'2023-04-29 04:00:36','AJ81RmDFonf2FLHseG1bb8YO5mhP36UtCpoq0N93RU4WGIr0KKEvqTQjMbWq0PaO',3),(34,'2023-04-29 01:26:24','anonymousUser','2023-04-29 01:26:24','anonymousUser',NULL,'2023-04-29 04:14:24','Git1PBmSp0ntopIAburHWjS0pfLAhuVhMHntNCeuAXVAcTpQkfSVemXBSpmsW72F',3),(35,'2023-04-29 01:27:27','anonymousUser','2023-04-29 01:27:27','anonymousUser',NULL,'2023-04-29 04:15:27','dddKB50hM7aAh5Uqg3dR61OIZBNcf7OknvJL9BBP2iSSWqUtV7slghk4RqvpDMAK',3),(37,'2023-04-29 01:34:51','anonymousUser','2023-04-29 01:34:51','anonymousUser',NULL,'2023-04-29 04:22:51','UPEs8hsjPfhLnoKKhdvS4i7WflbB5CCs65b872NIImNRffCJdJTBZ9ApZZqBA5gh',3),(38,'2023-04-29 01:42:39','anonymousUser','2023-04-29 01:42:39','anonymousUser',NULL,'2023-04-29 04:30:39','6DDsk7su0BUjJUTdFTaGUX7DXC5HaYTSOcgeHV1GIpDtg2UYZvIXkMRknje42PQl',3),(43,'2023-04-29 01:58:42','anonymousUser','2023-04-29 01:58:42','anonymousUser',NULL,'2023-04-29 04:46:42','NMb24oVIo0qjgdRkjWLv9QtfUfE6ek79bjcYaJo4Lcr8c0EIMhl0DeJU8CB75HEu',3),(44,'2023-05-07 20:45:33','anonymousUser','2023-05-07 20:45:33','anonymousUser',NULL,'2023-05-07 23:33:33','ANj3SZ7j7JSB05EZC8FgWbt26UXUpvppbCpAhPvZ6m2RvZJip5LGTlDpZGT3rvto',1),(46,'2023-05-15 00:34:02','anonymousUser','2023-05-15 00:34:02','anonymousUser',NULL,'2023-05-15 03:22:02','QI2iRHaLCDDlmMBkTOKnYOrvdWJrdf0b2rDVP785OYlP12cQJRoV5Fa5ugIhoo5R',1);
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transaction` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amount` double NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKsg7jp0aj6qipr50856wf6vbw1` (`user_id`),
  CONSTRAINT `FKsg7jp0aj6qipr50856wf6vbw1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `create_at` datetime DEFAULT NULL,
  `created_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `updated_by` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `e_wallet` double DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `first_name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `gender` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_card` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(32) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cart_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK_1ep90ws9w518nst3415yen9dv` (`id_card`),
  UNIQUE KEY `UK_589idila9li6a4arw1t8ht1gx` (`phone`),
  KEY `FKtqa69bib34k2c0jhe7afqsao6` (`cart_id`),
  CONSTRAINT `FKtqa69bib34k2c0jhe7afqsao6` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'2023-04-25 17:35:30','anonymousUser','2023-04-25 17:35:30','anonymousUser',NULL,NULL,0,'admin@gmail.com','admin',NULL,NULL,'admin','$2a$10$BYjgk84tfVEHozqpJwhL/.q6WT0fomldmPD6x2O4aJk8z3CEAn1fW',NULL,1),(2,'2023-04-28 14:17:22','anonymousUser','2023-04-28 14:47:26','mantm040702@gmail.com','https://res.cloudinary.com/dwoejm4g6/image/upload/v1682668045/csljuhqdswtifwiqbq3t.jpg','2002-07-04 00:00:00',0,'mantm040702@gmail.com','Tran Minh','male',NULL,'Man','$2a$10$Kujps6qUTbl8ehMMlkbkpOF0HilgMXUSqDA6qqEeuwklQ91xJYCrq','0964294799',2),(3,'2023-04-28 15:33:51','anonymousUser','2023-04-29 01:59:41','anonymousUser',NULL,NULL,0,'cristran040702@gmail.com','Cris',NULL,NULL,'Tran','$2a$10$7BGMtA/jOA.W0.A2QSo.Furr09VxFdnw6GvBifZS6iGZ7U9E4fsZS',NULL,3);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  KEY `FKa68196081fvovjhkek5m97n3y` (`role_id`),
  KEY `FK859n2jvi8ivhui0rl0esws6o` (`user_id`),
  CONSTRAINT `FK859n2jvi8ivhui0rl0esws6o` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKa68196081fvovjhkek5m97n3y` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,1),(2,2),(3,2);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-15  0:49:29
