const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // 1. Get the token from the request header
  const token = req.header('x-auth-token');

  // 2. Check if no token is present
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // 3. If there is a token, verify it
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // 4. Attach the user payload to the request object
    req.user = decoded.user;
    
    // 5. Call next() to proceed to the route's logic
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};