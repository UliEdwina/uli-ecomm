const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const  expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const isLoggedIn = require('./utils/isLoggedIn')
const authChecker =require('./utils/authChecker')
const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: false }))

app.use(logger('dev'));


app.use(express.json());
app.use(cookieParser('super-secret'));


let user = {};

app.use(session({
    secret: 'super-secret',
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false,
        maxAge: 365 * 24 * 60 * 60 * 1000
    }
}))
app.use(expressValidator({
    errorformatter: function(params, message, value){
        let namespace = params.split(',')
        let root = namespace.shift()
        let formParam = root
        
        while (namespace.legth){
            formParam += '[' + namespace.shift() +']'
        }

        return{
            params:formParam,
            message: message,
            value: value
        }
    
    }
}))
app.get('/', (req, res, next) =>{
    console.log(req.session)
    console.log(req.cookies)

    if(req.query){
        next()

        return  
    }
    res.send('Hey folks');
})

app.get('/', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.get('/show-me-my-page', (req, res, next)=>{
    if(req.session.user){
        res.render('index', { user: req.session.user })
    } else {
        res.render('index', { user: null})
    }
})

app.post('/users/login', function (req, res){
    req.checkBody('password').equals(user.password).withMessage('Password Does Not Match')

    let errors = req.validationErrors()

    if (errors){
        res.render('login', {error_msg: true, errors: errors, success_msg: false})
        
    } else {
        req.session.user = req.body.email

        res.redirect('/show-me-my-page')
    }
})

app.post('/users/register', authChecker, function(req, res) {
    let errors = req.validationErrors()
    if (errors){
        res.render('register', {error_msg: true, errors: errors})
    }else{
        user.email = req.body.email
        user.password = req.body.password

        req.session.user = req.body.username

        res.redirect('/show-me-my-page')

    }
})
 
app.get('/register', isLoggedIn, function (res, res, next){
     res.render('register', {'error_msg': false})
 })

app.get('/users/login', isLoggedIn, function (req, res, next) {
    res.render('login', { success_msg: false, error_msg: false})
})
app.get('*', (req, res, next)=>  {
    res.send('PAGE YOU ARE LOOKING FOR DOES NOT EXIST!');
})
app.get('/user.logout',  function (req, res){
    req.session.destroy()
    res.redirect('/show-me-mypage')

})
app.get('/user.resetPassword', function (req, res){
    res.render('reset', )
})
app.post('/user.resetPassword', authChecker, function (req, res) {
    let errors = req.validationErrors()
    if (errors){
        res.render('Reset Password', {error_msg: true, errors: errors})
        req.render()
    }else{
        
        user.password = req.body.password

        req.session.user = req.body.password

        res.redirect('/user.login')

    }
})




let server = http.createServer(app)

server.listen(3000, ()=>{
 console.log('listening to port 3000')
})