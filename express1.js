const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let cartes = [

    { palo: 'CORAZONES', num: 'A' },
    { palo: 'CORAZONES', num: 2 },
    { palo: 'CORAZONES', num: 3 },
    { palo: 'CORAZONES', num: 4 },
    { palo: 'CORAZONES', num: 5 },
    { palo: 'CORAZONES', num: 6 },
    { palo: 'CORAZONES', num: 7 },
    { palo: 'CORAZONES', num: 8 },
    { palo: 'CORAZONES', num: 9 },
    { palo: 'CORAZONES', num: 10 },
    { palo: 'CORAZONES', num: 'J' },
    { palo: 'CORAZONES', num: 'Q' },
    { palo: 'CORAZONES', num: 'K' },

    { palo: 'ROMBOS', num: 'A' },
    { palo: 'ROMBOS', num: 2 },
    { palo: 'ROMBOS', num: 3 },
    { palo: 'ROMBOS', num: 4 },
    { palo: 'ROMBOS', num: 5 },
    { palo: 'ROMBOS', num: 6 },
    { palo: 'ROMBOS', num: 7 },
    { palo: 'ROMBOS', num: 8 },
    { palo: 'ROMBOS', num: 9 },
    { palo: 'ROMBOS', num: 10 },
    { palo: 'ROMBOS', num: 'J' },
    { palo: 'ROMBOS', num: 'Q' },
    { palo: 'ROMBOS', num: 'K' },

    { palo: 'PICAS', num: 'A' },
    { palo: 'PICAS', num: 2 },
    { palo: 'PICAS', num: 3 },
    { palo: 'PICAS', num: 4 },
    { palo: 'PICAS', num: 5 },
    { palo: 'PICAS', num: 6 },
    { palo: 'PICAS', num: 7 },
    { palo: 'PICAS', num: 8 },
    { palo: 'PICAS', num: 9 },
    { palo: 'PICAS', num: 10 },
    { palo: 'PICAS', num: 'J' },
    { palo: 'PICAS', num: 'Q' },
    { palo: 'PICAS', num: 'K' },

    { palo: 'TREBOLES', num: 'A' },
    { palo: 'TREBOLES', num: 2 },
    { palo: 'TREBOLES', num: 3 },
    { palo: 'TREBOLES', num: 4 },
    { palo: 'TREBOLES', num: 5 },
    { palo: 'TREBOLES', num: 6 },
    { palo: 'TREBOLES', num: 7 },
    { palo: 'TREBOLES', num: 8 },
    { palo: 'TREBOLES', num: 9 },
    { palo: 'TREBOLES', num: 10 },
    { palo: 'TREBOLES', num: 'J' },
    { palo: 'TREBOLES', num: 'Q' },
    { palo: 'TREBOLES', num: 'K' }

];

app.get('/api/cartes', (req, res) => res.send(cartes));

app.get('/api/cartes/:palo', (req, res) => {
    let push = [];
    let cartes = cartes.forEach((c) => {
        if (c.palo === req.params.palo) push.push(p);
    });
    if (!cartes) res.status(404, 'Error');
    res.send(push);
});

app.get('/api/cartes/:palo/:num', (req, res) => {
    let cartes = cartes.find(a => a.palo === req.params.palo && a.num === req.params.num);
    if (!cartes) res.status(404, 'Error');
    res.send(cartes);
});

app.post('/api/cartes', (req, res)=>{
    let cartes={'palo': req.body.palo, 'num':parseInt(req.body.num)};
    cartes.push(cartes);
    res.send(cartes);
});
app.listen(2601, () => console.log('servidor iniciat'));