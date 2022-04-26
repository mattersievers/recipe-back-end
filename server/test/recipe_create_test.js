const { Recipe } = require('../models');
const assert = require('assert');

//Recipes can be created
describe('Creating documents in MongoDB', () => {
      it('Creates a New Recipe', (done) => {
        const recipe = new Recipe(
            {
            name: "toast", 
            ingredients: ["1 piece of bread", "butter (optional)"], 
            instructions: ["put the bread in a toaster", "push the toaster button", "wait and enjoy with butter"] 
            } 
        );
        recipe.save()
        .then( () => {
            assert(!recipe.isNew);
            done();
        });
    });
});    
