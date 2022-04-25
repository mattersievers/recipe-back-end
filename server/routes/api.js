const router = require("express").Router();
const { writeFile } = require("fs");
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

router.post("/recipes", (req, res) => {
    let data = {recipes: database.recipes};
    if(data.recipes.some((recipe)=> recipe.name === req.body.name)){
        res.json({
            "error": "Recipe already exists"
        })
        return;
    }
    data.recipes.push({
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    })

    writeFile('data.json', JSON.stringify(data), (err) => {
        if(err) throw err;
        console.log('File saved!');
    })
    res.json();
});

router.put("/recipes", (req, res) => {
    let data = {recipes: database.recipes};
    if(data.recipes.some((recipe)=> recipe.name === req.body.name)){
        const index = data.recipes.findIndex(recipe => recipe.name === req.body.name);
        data.recipes.splice(index, 1,
        {
            name: req.body.name,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions
        });
        writeFile('data.json', JSON.stringify(data), (err) => {
            if(err) throw err;
            console.log('File saved!');
        })
        res.json();
        return;
    } 
    res.json({"error": "Recipe does not exist"});
});

module.exports = router;