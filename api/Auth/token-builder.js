const jwt = require( 'jsonwebtoken')
const {JWT_SECRET} = require('./secret')

function tokenBuilder(user){
    const payload = {
        subject: user.user_id,
        role: user.role
    };
    const options = {
        expiresIn: '1d',
    }
    const token = jwt.sign(
        payload,
        JWT_SECRET,
        options
    )
    return token;
}

module.exports = tokenBuilder