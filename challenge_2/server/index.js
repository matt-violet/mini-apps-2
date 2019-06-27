const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const request = require('request');
const cors = require('cors');

app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/currency', (req, res) => {
  request('https://api.coindesk.com/v1/bpi/historical/close.json', (err, data, body) => {
    console.log('hrrrmmm')
    if (err) {
      console.log('GET request failed')
      res.sendStatus(500)
    } else {
      res.send(JSON.parse(body))
    }
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
});