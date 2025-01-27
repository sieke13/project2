DROP DATABASE IF EXISTS virtualbrd_db;
CREATE DATABASE virtualbrd_db;
\c virtualbrd_db;
CREATE TABLE users (
    email VARCHAR (50) NOT NULL UNIQUE,
    passwordHash VARCHAR (25) NOT NULL
)
CREATE TABLE post (
    id SERIAL,
    authorId INTEGER NOT NULL,
    parentId INTEGER DEFAULT NULL,
    title VARCHAR(75) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    summary TINYTEXT,
    updatedAt DATETIME DEFAULT NULL,
    publishedAt DATETIME DEFAULT NULL,
    content TEXT PRIMARY KEY (id),
    UNIQUE KEY uq_slug (slug),
    KEY idx_post_user (authorId),
    KEY idx_post_parent (parentId),
    CONSTRAINT fk_post_parent FOREIGN KEY (parentId) REFERENCES post (id),
    CONSTRAINT fk_post_user FOREIGN KEY (authorId) REFERENCES users (userId)
);
CREATE TABLE post_comment (
    id SERIAL NOT NULL,
    postId INTEGER NOT NULL,
    parentId INTEGER DEFAULT NULL,
    title VARCHAR(100) NOT NULL,
    createdAt DATETIME NOT NULL,
    publishedAt DATETIME DEFAULT NULL,
    content TEXT PRIMARY KEY (id),
    KEY idx_comment_post (postId),
    KEY idx_comment_parent (parentId),
    CONSTRAINT fk_comment_parent FOREIGN KEY (parentId) REFERENCES post_comment (id),
    CONSTRAINT fk_comment_post FOREIGN KEY (postId) REFERENCES post (id)
);