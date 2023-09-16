import jwt from 'jsonwebtoken'

const generateToken = (res, userId) => {
    // the userId is the payload and it is sent together with the token
const token = jwt.sign({userId}, process.env.JWT_SECRET, {
    expiresIn: '30d'
});

res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000
})
}

export default generateToken;