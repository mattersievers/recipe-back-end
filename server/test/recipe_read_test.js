const { Recipe } = require('../models');
const assert = require('assert');

//Recipes can be read
describe('Reading Details of Recipes', () => {
    let recipe;
    beforeEach((done) => {
        recipe = new Recipe(
            {
            name: "toast", 
            ingredients: ["1 piece of bread", "butter (optional)"], 
            instructions: ["put the bread in a toaster", "push the toaster button", "wait and enjoy with butter"] 
            } 
        );
        recipe.save().then(() => done());
    });
    it("Finds recipe with the same name", (done) => {
        Recipe.findOne({ name: "toast"})
        .then((result) => {
            assert(result.name === "toast");
            done();
        });
    })
})