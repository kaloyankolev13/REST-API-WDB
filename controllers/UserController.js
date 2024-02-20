const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a new user
module.exports.createUser = async (req, res) => {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    if (password !== confirmPassword) return res.status(400).send('Passwords do not match');

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    await user.save();
    res.json(user);
}

// Login a user
module.exports.loginUser = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid email or password');

    const token = jwt.sign({ userId: user._id ,name: user.name }, process.env.SESSION_SECRET, { expiresIn: '1h' });

    req.session.token = token;
    req.session.user = user._id;

    res.json(user);
}

module.exports.logoutUser = async (req, res) => {
    req.session.destroy();
    res.json({ message: 'Logged out' });
}