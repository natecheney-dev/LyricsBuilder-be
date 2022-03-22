require('dotenv').config()


const server = require('./api/server');

const Port = process.env.PORT || 9000

server.listen(Port, ()=> {
    console.log(`Server Running on http://localhost:${Port}`)
})