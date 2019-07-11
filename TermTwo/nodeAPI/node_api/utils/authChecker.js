function authChecker (req, res, next){
    userNameCheck(req)
    emailChecker(req)
    passwordCheck(req)
    
    next()
    }

    function userNameCheck (username){
    username.check('username').notEmpty().withMessage('Please Enter User Name').isLength({min:3, max:15}).withMessage('Username Must be Between 3 anf 15 Characters').blacklist(/<>\//)
    
    }
    
    function emailChecker (email){
    email.check('email').isEmail().withMessage('Please emter a valid Email')
    
    }
    
    function passwordCheck (password){
    
        password.check('password').notEmpty().withMessage('Cannot be Empty')
        
        password.checkBody('password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d`~!@#$%^&*()_+]{5,10}$/).withMessage('minimum 5 or max 10, one upper case, One lower case, one number and one special character' )
    
        password.checkBody('password2').notEmpty().withMessage('confirm password can not be empty').equals(password.body.password).withMessage('Password must match')
    }

    function passWordReset (password){
        password.check('password').notEmpty().withMessage('Cannot Be Empty').equals(password.body.password). withMessage ('must match')
        
    }
    module.exports = authChecker