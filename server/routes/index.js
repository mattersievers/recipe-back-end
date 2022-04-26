const router = require('express').Router();

const recipeRoutes = require('./recipe-routes');

router.use('/recipes', recipeRoutes);

router.use( (req, res) => {
    res.status(404).send('404 Error!')
})

module.exports = router;
