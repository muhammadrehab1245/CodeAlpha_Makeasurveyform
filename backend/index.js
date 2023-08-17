const express = require('express')
const app = express()
const surveyrouter=require('./routers/user')
require('./db');
const cors = require('cors');
const port = 3030
app.use(express.json());
app.use(cors());
app.use(surveyrouter);
app.get('/', (req, res) => {
  res.send('Hello World!')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})