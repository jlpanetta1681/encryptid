/* eslint-disable no-unused-vars */
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require('body-parser')
const server = express();
const Auth = require("./Auth/auth-router");
const Cryptids = require('./Cryptids/cryptids-router')
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(bodyParser.json())

server.use("/api/auth", Auth);
server.use("/api/cryptids", Cryptids);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
