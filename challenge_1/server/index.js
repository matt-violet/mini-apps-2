const jsonServer = require('json-server')
const express = require('express')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const path = require('path')

server.use(middlewares)
server.use(router)
server.use('/', express.static(path.join(__dirname, './public')))

server.listen(3001, () => {
  console.log('JSON Server is running')
})