drop database if exists financeTest;

create database financeTest;

use financeTest;

create table request(
	requestId int primary key auto_increment not null,
    reqTime datetime not null,
    stockCode varchar(4) not null,
    value dec(6,2) not null
);
    
create table user(
	userId int primary key auto_increment not null,
    email varchar(30) not null
);

create table user_request(
	requestId int not null,
    userId int not null,
    primary key(requestId, userId),
    foreign key(requestId) references request.requestId,
    foreign key(userId) references user.userId
);


drop database if exists finance;

create database finance;

use finance;

create table request(
	requestId int primary key auto_increment not null,
    reqTime datetime not null,
    stockCode varchar(4) not null,
    value dec(6,2) not null
);
    
create table user(
	userId int primary key auto_increment not null,
    email varchar(30) not null
);

create table user_request(
	requestId int not null,
    userId int not null,
    primary key(requestId, userId),
    foreign key(requestId) references request.requestId,
    foreign key(userId) references user.userId
);
