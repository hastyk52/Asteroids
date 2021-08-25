DROP DATABASE IF EXISTS asteroids;

CREATE DATABASE asteroids;

\c asteroids

CREATE TABLE scores (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  username TEXT NOT NULL,
  score INT NOT NULL
);