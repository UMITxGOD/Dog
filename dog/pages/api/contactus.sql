create table `contactus`(
`contactId` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
`name` varchar(255) NOT NULL,
`emailId` varchar(255) NOT NULL,
`contactNo` BIGINT(20) NOT NULL,
`enteryTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`contactId`), 
UNIQUE KEY `cid` (`name`,`enteryTime`)
)ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into `contactus` (`name`,`emailId`,`contactNo`) values ("umit","umitkumarsahoo111@gmail.com","9337033263");

create table `comment`(
    `username` VARCHAR(255) DEFAULT 'ANONYMUS',
    `usercomment` VARCHAR(255) NOT NULL ,
    `enteryTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `coid` (`username`,`enteryTime`)
)ENGINE=INNODB DEFAULT CHARSET=utf8;