const express=require('express');
const hbs=require('hbs');

let app=express();
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=> new Date().getFullYear());
hbs.registerHelper('screamIT',(text)=> text.toUpperCase());

app.set('view engine',hbs);
app.use(express.static('public'));

app.use((req,res,next)=>{
    var now=new Date().toString();
    console.log(req.method," ",req.url);
    next();
})

// app.use((req,res,next)=>{
//     res.render('404.hbs');
// })


app.get('/',(req,res)=>{
    res.render('home.hbs',{
        title: "Index Page",
        greeting: "Hello"
    })
})

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:"About Page",
    });
})


app.listen(3000,()=>{console.log("server is up")});