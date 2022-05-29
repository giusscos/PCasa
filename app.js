var express = require("express");
var app = express();
var port = 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/assets', express.static(__dirname + 'public/assets'));

app.set('views', './views');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.get('/store', (req, res) => {
    res.sendFile(__dirname + '/views/store.html')
});

app.get('/FAQ', (req, res) => {
    res.sendFile(__dirname + '/views/FAQ.html')
});

app.get('/contatti', (req, res) => {
    res.sendFile(__dirname + '/views/contatti.html')
});

app.get('/detersivi', (req, res) => {
    res.sendFile(__dirname + '/views/detersivi.html')
});

app.get('/prodotti-tipici', (req, res) => {
    res.sendFile(__dirname + '/views/prodotti-tipici.html')
});

app.get('/artigianato', (req, res) => {
    res.sendFile(__dirname + '/views/artigianato.html')
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/views/notFound.html')
});

app.listen(port, () => console.info(`App listening on port ${port}`));