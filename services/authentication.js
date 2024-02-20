const JWT = require("jsonwebtoken");
const secret = '$superman@erf%7asdrf'

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role
    }
    const token = JWT.sign(payload, secret);
    return token;
}

function verifyToken(token) {
    const payload = JWT.verify(token, secret)
    return payload
}

module.exports = {
    createTokenForUser,
    verifyToken,
}