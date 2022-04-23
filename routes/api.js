const router = require("express").Router();
const database = require('../data.json');

router.get("/recipes", (req,res) => {
    let data = {recipeNames: []};
    database.recipes.forEach(recipe => data.recipeNames.push(recipe.name));
    res.json(data);
})

module.exports = router;