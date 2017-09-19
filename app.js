const express = require('express');
const app = express();
const nj = require('nunjucks');
const routes = require('./routes');
app.use(express.static('public'))
app.use('/', routes);
app.set('view engine', 'html');
app.engine('html', nj.render);
nj.configure('views', {noCache: true});


// app.use('/', (req, res, next) => {
//     console.log(req.method, req.originalURL, res.statusCode);
//     next();
// })

// app.get('/', function(req, res){
//     // res.send("Hello World Meow");
//     const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//     res.render('index', {title: 'Hall of Fame', people: people});
// });

// app.get('/news', function(req, res){
// 	res.send('news page');
// });

app.listen(3000, function(){
    console.log('Listening on port 3000!');
})


