const { Recipe } = require('../models');
const assert = require('assert');

describe('Deleting a recipe', () => {
	let recipe;
	beforeEach((done) => {
		recipe = new Recipe(
			{
			name: "toast", 
			ingredients: ["1 piece of bread", "butter (optional)"], 
			instructions: ["put the bread in a toaster", "push the toaster button", "wait and enjoy with butter"] 
			} 
		);
		recipe.save()
			.then(() => done());
	});
	

	it('Removes a recipe using its instance', (done) => {
	recipe.remove()
		// Checking if the recipe was deleted from DB or not
		.then(() => Recipe.findOne({ name: 'toast' }))
		.then((recipe) => {
			assert(recipe === null);
			done();
		});
	});

	it('Removes a recipe', (done) => {
	Recipe.findOneAndRemove({ name: 'toast' })
		.then(() => Recipe.findOne({ name: 'toast' }))
		.then((recipe) => {
			assert(recipe === null);
			done();
		});
	});

	it('Removes a recipe using its id', (done) => {
	Recipe.findByIdAndRemove(recipe._id)
		.then(() => Recipe.findOne({ name: 'toast' }))
		.then((recipe) => {
			assert(recipe === null);
			done();
		});
	})
})
