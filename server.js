const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const app = express();

const
    user = 'postgres',
    password = 'postgres',
    host = 'localhost',
    dbname = 'postgres',
    port='1234';

const client = new pg.Client(`postgres://${user}:${password}@${host}:${port}/${dbname}`);

app.use(express.static('bin'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Content-Type",'application/json');
    next();
});
app.listen(3001, () => {
    console.log('app listening on port 3001!');
});

app.get('/', (req, res) => {
    res.redirect('/!#/sankt-peterburg');

});

client.connect((err)=>{
    if (err) throw err;

    app.post('/api/user', (req, res) => {
        const {
            id,
            authDeadline
        } = req.body;
        console.log(req.body);

        client.query(`SELECT * FROM weather.users where id=${id}`,
            (err, data) => {
                if ( data.rows.length > 0 )
                    client.query(`UPDATE weather.users SET authdeadline=${authDeadline} where id=${id};`);
                else
                    client.query(`INSERT INTO weather.users(id, authDeadline) VALUES(${id}, ${authDeadline});`);
                res.end()
            });

    });
    app.get('/api/user', (req, res) => {
        client.query(`SELECT * FROM weather.users where id=${req.query.id}`,
            (err, data) => {
                if (err) res.end(err);
                res.send(data.rows);
            })
    })
});














