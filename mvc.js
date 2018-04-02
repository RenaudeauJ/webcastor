var express = require('express');


var app = express();
app.use(express.static(__dirname ));

app.get('/accueil', function(req, res) {

    res.render('accueil.ejs',{titre:"accueil",page:"accueil"})
});


app.get('/dofus/ocre', function(req, res) {

    res.render('dofus/ocre.ejs',{titre:"Dofus"})
});

app.get('/dofus/exo', function(req, res) {

    res.render('dofus/exopa.ejs',{titre:"Dofus"})
});



app.use(function(req, res, next){

    res.setHeader('Content-Type', 'text/plain');

    res.status(404).send('Page introuvable !');

});


app.listen(8080);