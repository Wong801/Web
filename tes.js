const express = require('express');
const mysql = require('mysql');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'arkademy'
});

db.connect((err) => {
    if(err) throw err;
    console.log('Server Connected');
});

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/assets',express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    let sql = 'SELECT * FROM produk';
    db.query(sql, (err, results) => {
        if(err) throw err;
        res.render('personal', {
            results: results
        });       
    });
});

app.post('/save',(req, res) => {
    let data = {nama_produk: req.body.nama_produk, keterangan: req.body.keterangan, harga: req.body.harga, jumlah: req.body.jumlah};
    let sql = "INSERT INTO produk SET ?";
    db.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
});

app.post('/edit', (req, res) => {
    let sql = "UPDATE produk SET nama_produk='"+req.body.nama_produk+"', keterangan='"+req.body.keterangan+"', harga='"+req.body.harga+"', jumlah='"+req.body.jumlah+"'";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/');       
    });
});

app.post('/delete', (req, res) => {
    let sql = "DELETE FROM produk"
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.redirect('/');       
    });
});

app.listen(5000, () => console.log('Server started'));


