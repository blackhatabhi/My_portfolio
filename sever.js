var express = require('express')
const  app = express()
const http = require('http').Server(app)


app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public')
});

http.listen(process.env.PORT || 4343, function () {
    console.log(`server started on http://localhost:4343`)
});
