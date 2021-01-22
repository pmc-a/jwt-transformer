const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const { decode, encode } = require('./crypto');

app.use(bodyParser.json());

app.get('/health', (req, res) => {
    res.status(200).send();
});

app.get('/encode', (req, res) => {
    const { email, uuid } = req.query;

    try {
        const encodedJwt = encode({ email, uuid });

        res.status(200).send(encodedJwt);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/decode', (req, res) => {
    const { token } = req.body;

    try {
        const decodedJwt = decode(token);

        res.status(200).send(decodedJwt);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(5009, () => console.log('Server listening on 5009'));
