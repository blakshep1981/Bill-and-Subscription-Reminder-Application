-- Drops the bills if it exists currently --
DROP TABLE IF EXISTS bills;
-- creates the bills database --
CREATE DATABASE bills;

USE bills;

CREATE TABLE subscriptions
(
	id int NOT NULL AUTO_INCREMENT,
	subscription varchar(255) NOT NULL,
	amount INT NOT NULL,
    dueDate DATE,
	PRIMARY KEY (id)
);
