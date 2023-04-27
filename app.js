const express = require('express')

const app = express()

app.use((req, res, next) => {
	console.log("middleware_0")
	next()
})

app.use((req, res, next) => {
	console.log("middleware_1")
	next()
})

app.use('/users', (req, res, next) => {
	res.send("<h1>Welcome to /users<h1>")
})

app.use('/', (req, res, next) => {
	res.send("<h1>Welcome to Root!</h1>")
})

app.listen(3000)
