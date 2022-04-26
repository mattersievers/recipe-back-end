const { Recipe } = require('../models');

const resolvers = {
    Query:{
        recipeNames: async () => {
            return Recipe.find()
            .select('-__v -instructions -ingredients')
            .populate('name');
        },
        recipeDetails: async (parent, args, context) => {

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