DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;

CREATE table users (

    id VARCHAR(25) PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL

);

CREATE table tasks (

    id VARCHAR(25) PRIMARY KEY,
    userId VARCHAR(25),
    creationTime VARCHAR(30),
    dueTime VARCHAR(30),
    description VARCHAR(500),
    status INTEGER,
    FOREIGN KEY(userId) REFERENCES users(id)

);