const { Router } = require('express');
const router = Router();

const User = require('../User');

const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email, password})
    await newUser.save();

    const token = jwt.sign({_id: newUser._id}, 'secretKey')
    res.status(200).json({token})
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email})
    if(!user) return res.status(401).send('el correo no esta registrado');
    if(user.password !== password) return res.status(401).send('password incorrecto');

    const token = jwt.sign({_id: user._id}, 'secretKey');
    res.status(200).json({token});
})

router.get('/firmados', verifyToken,  (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'proteccion de rutas',
            description: 'protección de rutas, los usuarios firmados sólo podrán acceder al HOME, mientras que los no firmados sólo podrán acceder al signIn y al signUp',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id: 2,
            name: 'Token',
            description: 'Almacenamiento de token por lado del cliente',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id: 3,
            name: 'express',
            description: 'si te sientes familizarizado con otra librería puedes usarla, por ejemplo en vez de express usar sails, hapi o cualquier otra',
            date: '2019-11-17T20:39:05.211Z'
        },
        {
            _id: 4,
            name: 'entrega',
            description: 'la entrega del proyecto será por medio de GitHub o similar',
            date: '2019-11-17T20:39:05.211Z'
        }
    ])
})

module.exports = router;

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('no autorizado para ver el contenido');
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
        return res.status(401).send('null');
    }

    const payload = jwt.verify(token, 'secretKey')
    // console.log(payload)
    req.userId = payload._id;
    next();
}