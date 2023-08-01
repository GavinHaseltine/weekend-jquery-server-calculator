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

app.post('/calc', (req, res) => {
  const input1 = Number(req.body.input1)
  const input2 = Number(req.body.input2)
  const symbol = req.body.symbol

  let result = calculate(input1, input2, symbol);

  let incomingCalculation = {
      input1,
      input2,
      symbol,
      result
  }

  console.log('Current History: ', incomingCalculation)
  history.push(incomingCalculation)
  res.sendStatus(201)
})

// SWITCH statements seem like just better if() else() chains. Instead of that
//complicated mess I had it can be replaced by "case" which seems just perfect.
function calculate(n1, n2, op) {
  switch (op) {
      case '+':
          return n1 + n2
      case '-':
          return n1 - n2
      case '*':
          return n1 * n2
      case '/':
          return n1 / n2
      default:
          return 0
  }
}



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
