function authChecker (req, res, next){
userNameCheck(req)
emailChecker(req)
passwordCheck(req)

next()
}
function userNameCheck (username){
username.check('username').notEmpty().withMessage('Please Enter User Name').isLengt({min:3, max:15}).withMessage('Username Must be Between 3 anf 15 Characters').blacklist(/<>\//)

}

function emailChecker (email){
email.checl('email').isEmail().withMessage('Please emter a valid Email')

}

function passwordCheck (pasword){

    password.check('password').notempty().withMessage('Cannot be Empty')
    
    password.checkBody('password').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d`~!@#$%^&*()_+]{5,10}$/).withMessage('minimum 5 or max 10, one upper case, One lower case, one number and one special character' )

    password.checkBody('password2').notEmpty().withMessage('confirm password can not be empty').equals(password.body.password),withMessage('Password must match')
}
module.export = authChecker