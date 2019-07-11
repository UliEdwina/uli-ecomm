function new(req, res){

    if(req.originalUrl === '/resetPassword' && !req.session.user){
        res.render('register', {success_msg: false, error_msg:false})
    }else if(req.originalUrl === '/users/' && !req.session.user){
        res.render('Enter New Password', {success_msg: false, error_msg: false})
    } else {
        res.redirect('/show-me-my-page')
    }
    }
