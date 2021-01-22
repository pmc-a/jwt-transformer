const jwt = require('jsonwebtoken');

const SUPER_SECRET_KEY = 'super-secret-key';

const encode = (dataToEncode) => {
    try {
        const sessionToken = jwt.sign(dataToEncode, SUPER_SECRET_KEY, {
            expiresIn: 60,
            audience: 'mock-audience',
            issuer: 'this-here-wee-node-yolk',
        });
        
        const b64Token = Buffer.from(sessionToken).toString('base64');
        
        console.log({ b64Token });

        return b64Token;
    } catch (error) {
        console.error(error)
        throw new Error('Something went wrong encoding the token');
    }
};

module.exports = encode;
