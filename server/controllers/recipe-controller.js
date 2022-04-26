const { getDirectiveValues } = require('graphql');
const { Recipe } = require('../models');

module.exports = {
    getRecipes(req, res) {
        Recipe.find({})
        .select('-__v -_id -ingredients -instructions')
        .then(dbRecipeData => {
            let result = {recipeNames:[]};
            dbRecipeData.forEach(recipe => result.recipeNames.push(recipe.name));
            res.json(result);
        })
        .catch(err =>{
            console.log(err);
            res.status(400).json(err);
        });
    },

    getRecipeDetails(req,res) {
        Recipe.findOne({
            name: req.params.name
        })
        .select('-__v -name')
        .then(recipeDetailData => {
            console.log(recipeDetailData);
            let result = { details: { ingredients: recipeDetailData.ingredients, numSteps: recipeDetailData.instructions.length}}
            res.json(result);
        })
    }, 

    createRecipe(req, res) {
        Recipe.create(req.body)
        .select('-__v -_id')
        .then( (newRecipe) => { res.json(newRecipe)})
        .catch(err =>{
            console.log(err);
            res.status(400).json(err);
        });
    },

    updateRecipe({body}, res) {
        Recipe.findOneAndUpdate(
            {name: body.name},
            body,
            { new: true, runValidators: true }
        )
        .select('-__v -_id')
        .then( (newRecipe) => { 
            if(!newRecipe) {
                res.status(404).json({ message: 'No recipe found with this name!'});
                return;
            }res.json(newRecipe)})
        .catch(err =>{
            console.log(err);
            res.status(400).json(err);
        });
    }
}