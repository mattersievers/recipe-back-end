const router = require("express").Router();
const { writeFile } = require("fs");
const database = require('../data.json');
const {
    getRecipes,
    getRecipeDetails,
    createRecipe,
    updateRecipe
} = require('../controllers/recipe-controller')

router
    .route("/")
    .get(getRecipes)
    .post(createRecipe)
    .put(updateRecipe)
    

router
    .route("/details/:name")
    .get(getRecipeDetails)

module.exports = router;