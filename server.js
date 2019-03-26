const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql');
const app = express();

/*app.use(express.static(path.join(__dirname, 'www'))); //?????
//app.use('/recorder-name', recordername)

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'www/index.html')); //???
})*/

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host      :   'localhost',
    user      :   'root',
    password  :   'root',
    database  :   'app_data',
    port      :   '/Applications/MAMP/tmp/mysql/mysql.sock' 
})
 
app.get('/', function (req, res) {
    res.send('Hello World!'); // This will serve your request to '/'.
  });

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql Connected...');
}); 

app.post('/observemenu/:studentid', (req, res) => {
    console.log(req.body);
    res.status(200).send({"message": "data received"})
})

/*
app.get('/team', (req, res) => {
    db.query('SELECT * FROM Team', (err, rows, fields) => {
        if(err){
            console.log('data fetched failed.')
            res.sendStatus(500)
            return
            //throw err
        }
        const teams = rows.map((row) => {
            return {teamname: row.TeamName}
        })                                  //row.map用来从每个row里筛选数据
        res.json(teams)
        console.log('data fetched successfully.')
    })
})*/

const port = process.env.PORT_ || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`); 
})