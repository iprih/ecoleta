import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('Listagem de usuários');

    res.json(["Pri",
"Pimpa",
"Pipoca"])

});

app.listen(3333);