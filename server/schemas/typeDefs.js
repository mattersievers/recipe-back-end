const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Recipe{
    _id: ID
    name: String
    ingredients: [String]
    instructions: [String]
}

type Query {
    recipeNames: [Recipe]
    recipeDetails: Recipe
}

type Mutation {
    addRecipe(name: String!, ingredients: [String]!, instructions: [String]!): Recipe
    updateRecipe(name: String!, ingredients: [String]!, instructions: [String]!): Recipe
}

`;

module.exports = typeDefs;