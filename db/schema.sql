Drop database if exists burger_db;
CREATE DATABASE burger_db;
use burger_db;
drop table if exists burgers;
create table burgers (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    burger_name varchar(50),
    devoured boolean


);
