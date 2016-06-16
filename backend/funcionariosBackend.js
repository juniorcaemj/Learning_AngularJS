/**
 * Created by Junior on 15/06/2016.
 */
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

var funcionarios = [
    {nome: "Bruno", admissao: new Date(), empresa: {nome: "Oi", codigo: 14}},
    {nome: "Sandra", admissao: new Date(), empresa: {nome: "Vivo", codigo: 15}},
    {nome: "Mariana", admissao: new Date(), empresa: {nome: "Tim", codigo: 41}}
];
var empresas = [
    {nome: "Oi", codigo: 14, categoria: "Fixo/Celular"},
    {nome: "Vivo", codigo: 15, categoria: "Fixo/Celular"},
    {nome: "Tim", codigo: 41, categoria: "Fixo/Celular"},
    {nome: "GVT", codigo: 25, categoria: "Fixo"},
    {nome: "Embratel", codigo: 21, categoria: "Fixo"}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/contatos', function(req, res) {
    res.json(contatos);
});

app.post('/contatos', function(req, res) {
    contatos.push(req.body);
    res.json(true);
});

app.get('/operadoras', function(req, res) {
    res.json(operadoras);
});

app.listen(process.env.PORT || 8080);

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/contatos', function(req, res) {
    res.json(contatos);
});

app.post('/contatos', function(req, res) {
    contatos.push(req.body);
    res.json(true);
});

app.get('/operadoras', function(req, res) {
    res.json(operadoras);
});