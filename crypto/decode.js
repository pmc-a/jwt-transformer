const jwt = require('jsonwebtoken');

const decode = (base64Jwt) => {
    try {
        const decodedBuffer = Buffer.from(base64Jwt, 'base64');
        const encodedJwt = decodedBuffer.toString('ascii');

        const decodedJwt = jwt.verify(encodedJwt, process.env.JWT_SECRET_SIGNING_KEY, { 
            audience: 'mock-audience',
            issuer: 'mock-issuer',
        });

        return decodedJwt;
    } catch (error) {
        console.error(error)

        if (error instanceof jwt.TokenExpiredError) {
            throw new Error('Token has expired');
        } else {
            throw new Error('Something went wrong decoding the token');
        }
    }
};

module.exports = decode;
