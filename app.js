const express = require('express');
const path = require("path")
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))

})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views.login.html'))

})

app.get('/register', (req,res)=> {
    res.sendFile(path.resolve(dirname, './views/register.html'))
})

app.use(express.static('public'))

// app.listen(3030, ()=>  console.log('Servidor en servicio: http://localhost:3030/')); //

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Servidor corriendo en el puerto ${port}"));