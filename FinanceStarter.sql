drop database if exists financeTest;

create database financeTest;

use financeTest;

create table user(
	userId varchar(100) primary key not null,
    email varchar(50) not null
);


create table request(
    requestId int primary key auto_increment not null,
    userId varchar(100) not null,
    foreign key fkUserId(userId) references user(userId),

    reqTime datetime not null,
    quantity dec(12,6) not null,
    stockCode varchar(4) not null,
    value dec(6,2) not null
);

drop database if exists finance;

create database finance;

use finance;
    
create table user(
	userId varchar(100) primary key not null,
    email varchar(50) not null
);


create table request(
    requestId int primary key auto_increment not null,
    userId varchar(100) not null,
    foreign key fkUserId(userId) references user(userId),

    reqTime datetime not null,
    quantity dec(12,6) not null,
    stockCode varchar(4) not null,
    value dec(6,2) not null
);
