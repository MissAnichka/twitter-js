const express = require('express');
const app = express();
const nj = require('nunjucks');

let localVars = {
    title: 'Twitter Clone',
    users: [
        {name: 'Kanye'},
        {name: 'Gandalf'},
        {name: 'Obama'}
    ]
};
// nj.configure('views', {noCache: true});
// nj.render('index.html', locals, function(err,output){
//     if(err) throw error;
//     console.log(output);
// });

app.set('views', 'html');
app.engine('html', nj.render);
nj.configure('views', {noCache: true});


app.use('/', (req, res, next) => {
    console.log(req.method, req.originalURL, res.statusCode);
    next();
})

app.get('/', function(req, res){
    // res.send("Hello World Meow");
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render('index', {title: 'Hall of Fame', people: people}, function(err,output){
            if(err) throw error;
            console.log(output);
        });
    
});

app.get('/news', function(req, res){
	res.send('news page');
});

app.listen(3000, function(){
    console.log('Listening on port 3000!');
    // console.log(rend);
})


