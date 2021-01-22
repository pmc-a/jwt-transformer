const jwt = require('jsonwebtoken');

const SUPER_SECRET_KEY = 'super-secret-key';

const decode = (base64Jwt) => {
    try {
        const decodedBuffer = Buffer.from(base64Jwt, 'base64');
        const encodedJwt = decodedBuffer.toString('ascii');
        console.log({ encodedJwt });

        const decodedJwt = jwt.verify(encodedJwt, SUPER_SECRET_KEY, { 
            audience: 'mock-audience',
            issuer: 'mock-issuer',
        });

        console.log({ decodedJwt });

        return decodedJwt;
    } catch (error) {
        // PETETODO: Handle expiry here

        console.error(error)
        throw new Error('Something went wrong decoding the token');
    }
};

module.exports = decode;
