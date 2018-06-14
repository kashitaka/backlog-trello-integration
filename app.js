var
  express          = require('express'),
  bodyParser       = require('body-parser'),
  cookieParser     = require('cookie-parser'),

  backLogService   = require('./services/backLogService'),
  trelloService    = require('./services/trelloService'),

  app              = express(),

  server = require('http').createServer(app);

app.use( cookieParser() ) ;
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
  extended: true
}));

// ------------ routing ---------------------
app.get('/', function(req, res) {
  res.send("It works!");
});

app.post('/backlog/trello', function(req, res) {

    if (!backLogService.isBacklogAccess(req.headers)){
        res.send("OK");
        return;
    }

    backLogIssue = backLogService.parseBody(req.body);
    trelloService.createCard(
        backLogIssue.title,
        backLogIssue.desciption + "\n" +
        backLogIssue.url
        );

    res.send("OK");

});


// ------------ startup server ------------------
server.listen( process.env.PORT || 8080 );
console.log(
  'Express serveer listening on port %d',
  server.address().port
);
