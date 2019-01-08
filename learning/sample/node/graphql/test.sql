
create database Test_User;

USE Test_User;
CREATE TABLE `Tab_User_Info` (
  id  INT(100) AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR(50)   NOT NULL COMMENT '姓名',
  uid   VARCHAR(50)    NOT NULL,
  sex tinyint(2) DEFAULT 1 COMMENT '1男2女',
  age tinyint(2) DEFAULT 1,
  description VARCHAR(50)  DEFAULT NULL,
  `createdAt` datetime DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT = 'test user';


INSERT INTO Tab_User_Info (`name`, uid, sex, age, description)
	VALUES
    ( 'fantasygao', 'uid123', 1, 24, 'this is boy' ),
    ( 'demi', 'uid124', 2, 24, 'this is girl' ),
    ( 'xxx', 'uid125', 1, 26, 'this is test user' ),
    ( 'testu', 'uid126', 2, 44, 'this is test user5' ),
    ( 'testu2', 'uid127', 2, 64, 'this is test user4' ),
    ( 'testu', 'uid128', 1, 14, 'this is test user2' ),
    ( 'testu2', 'uid129', 2, 4, 'this is test user9' );