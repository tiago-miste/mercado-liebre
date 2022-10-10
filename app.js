const express = require('express');
const path = require("path")
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))

})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views.login.html'))

})

app.get('/register', (req,res)=> {
    res.sendFile(path.join(dirname, './views/register.html'))
})

app.use(express.static('public'))

app.listen(3030, ()=>  console.log('Servidor en servicio: http://localhost:3030/'));