const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const sendGrid = require('@sendGrid/mail');
const app = express();
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));