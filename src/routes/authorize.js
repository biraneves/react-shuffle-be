const jwt = require('jsonwebtoken');

const authorize = (...allowed) => {
    const autorizado = (role) => allowed.indexOf(role) > -1;

    return (req, res, next) => {
        const authHeader = req.headers['authorization'];

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Access denied' });
        }

        const token = authHeader.substring(7, authHeader.length);

        jwt.verify(token, process.env.JWT_PWD, (err, payload) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid token' });
            }

            if (autorizado(payload.role)) {
                next();
            } else {
                return res.status(401).json({ message: 'Role not allowed' });
            }
        });
    };
};

module.exports = authorize;
