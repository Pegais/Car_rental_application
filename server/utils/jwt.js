var jwt = require('jsonwebtoken');
const createAccessJwt = (payload) => {
    
    var accessToken = jwt.sign({ payload }, process.env.JWT_ACCESS_TOKEN,{expiresIn:'1m'});
    return Promise.resolve(accessToken)
}

const createRefreshJwt = (payload) => {
    
    var refreshToken = jwt.sign({ payload }, process.env.JWT_REFRESH_TOKEN,{expiresIn:'1d'});
    return Promise.resolve(refreshToken)
}


module.exports = {
    createAccessJwt,
    createRefreshJwt,
}
