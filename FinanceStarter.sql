drop database if exists financeTest;

create database financeTest;

use financeTest;

create table request(
	requestId int primary key auto_increment not null,
    reqTime datetime not null,
    quantity dec(6,6) not null,
    stockCode varchar(4) not null,
    value dec(6,2) not null
);
    
create table user(
	userId varchar(100) primary key not null,
    email varchar(50) not null
);

create table user_request(
	requestId int not null,
    userId varchar(100) not null,
    primary key(requestId, userId),
    foreign key fkRequestID (requestId) references request (requestId),
    foreign key fkUserID (userId) references user (userId)
);


drop database if exists finance;

create database finance;

use finance;

create table request(
	requestId int primary key auto_increment not null,
    reqTime datetime not null,
    quantity dec(6,6) not null,
    stockCode varchar(4) not null,
    value dec(6,2) not null
);
    
create table user(
	userId varchar(100) primary key not null,
    email varchar(50) not null
);

create table user_request(
	requestId int not null,
    userId varchar(100) not null,
    primary key(requestId, userId),
    foreign key fkRequestID (requestId) references request (requestId),
    foreign key fkUserID (userId) references user (userId)
);
