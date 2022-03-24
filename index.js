const express = require('express')
const app = express()
const port = 3001
const DataAccess = require('./data-access');

app.get('/', (req, res) => {
  res.status(200).send('Health Hero Go-Bots!');
})

app.get('/pixelland', (req, res) => {
    DataAccess.getMintedRecord();
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

  app.post('/claimland', (req, res) => {
    DataAccess.createMintRecord(req.body)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  })

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})