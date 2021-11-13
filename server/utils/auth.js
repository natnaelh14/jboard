const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch(e) {
      throw e
    }
    return req;
  },
  signToken: function ({ _id, username, full_name, email, security_ques, resume_url }) {
    const payload = { _id, username, full_name, email, security_ques, resume_url };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};