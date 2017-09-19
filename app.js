const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log(req.method, req.originalURL, res.statusCode);
    next();
})

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/news', function(req, res){
	res.send('news page');
});

app.listen(3000, function(){
    console.log('Listening on port 3000!')
})


