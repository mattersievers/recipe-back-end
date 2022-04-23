const router = require("express").Router();
const database = require('../data.json');

router.get("/recipes", (req,res) => {
    let data = {recipeNames: []};
    database.recipes.forEach(recipe => data.recipeNames.push(recipe.name));
    res.json(data);
});

router.get("/recipes/details/:name", (req, res) => {
    let data = {};
    let details = {};
    database.recipes.forEach(recipe => {
        if(recipe.name === req.params.name){
            details = {ingredients: recipe.ingredients, numSteps: recipe.instructions.length}
            data = {details};
        };
    })    
    res.json(data);
});

module.exports = router;