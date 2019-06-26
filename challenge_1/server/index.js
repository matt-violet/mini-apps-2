const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const express = require('express')
const path = require('path')

server.use(middlewares)
server.use(router)
server.use('/', express.static(path.join(__dirname, './public')))

server.listen(3001, () => {
  console.log('JSON Server is running')
})