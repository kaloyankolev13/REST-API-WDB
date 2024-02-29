const jwt = require('jsonwebtoken');

module.exports.isLoggedIn = (req, res, next) => {
    const token = req.session.token;
    if (!token) {
        return res.status(401).send("Unauthorized");
    }
    // Verify JWT token
    jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send("Unauthorized");
        }
        // Token is valid, proceed with the request
        console.log("Protected route accessed");
        next();
    });
}

module.exports.getUserIdfromToken = (req) => {
    const token = req.session.token;
    if (!token) {
        return null;
    }
    jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
        if (err) {
            return null;
        }
        return decoded.id;
    });
}
