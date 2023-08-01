const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({extended:true}))


app.use(express.static('server/public'));
app.use(bodyParser.json());

let history = []
app.get('/calc', (req, res) => {
    console.log("in server, /calc", history)
    res.send(history)
})






app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
