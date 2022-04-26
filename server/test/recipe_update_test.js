const { Recipe } = require('../models');
const assert = require('assert');

describe('Updating a recipe', () => {
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

	// Handling Redundant Code
	function helperFunc(assertion, done) {
	assertion
		.then(() => Recipe.find({}))
		.then((recipes) => {
			console.log(recipes)
			assert(recipes.length === 1);
			assert(recipes[0].name === 'updated toast');
			done();
		});
	}

	it('Sets and saves a recipe using an instance', (done) => {
		// Not yet updated in MongoDb
		recipe.set('name', 'updated toast');
		helperFunc(recipe.save(), done);
	});

	it('Update a recipe using instance', (done) => {
		helperFunc(recipe.update({ name: 'updated toast' }), done);
	});
});
