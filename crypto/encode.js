const jwt = require('jsonwebtoken');

const encode = (dataToEncode) => {
    try {
        const sessionToken = jwt.sign(dataToEncode, process.env.JWT_SECRET_SIGNING_KEY, {
            expiresIn: 60,
            audience: 'mock-audience',
            issuer: 'mock-issuer',
        });
        
        const b64Token = Buffer.from(sessionToken).toString('base64');

        return b64Token;
    } catch (error) {
        console.error(error)
        throw new Error('Something went wrong encoding the token');
    }
};

module.exports = encode;
