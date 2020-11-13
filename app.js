const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});



app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    const msg = {
        to: 'corbynkwan@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});

// || port
app.listen(process.env.PORT || port, () => console.log('app listening at port ...'));