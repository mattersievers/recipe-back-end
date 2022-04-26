const { Recipe } = require('../models');

const resolvers = {
    Query:{
        recipeNames: async () => {
            return Recipe.find()
            .select('-__v -_id -instructions -ingredients')
            .populate('name');
        },
        recipeDetails: async (parent, {name}) => {
            const recipeData = Recipe.findOne({ name: name})
            .select('-__v -_id -name')
            .populate('ingredients instructions');
        }
    },
    Mutation:{
        addRecipe: async (parent, args, context) => {

        },
        updateRecipe: async (parent, args, context) => {

        }
    }
}

module.exports = resolvers;