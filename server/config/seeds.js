const db = require('./connection');
const { Recipe } = require('../models');

//using the information from data.json, seed the MongoDB database

db.once('open', async() =>{
    await Recipe.deleteMany();

    const recipes = await Recipe.insertMany([
        {
        name:"scrambledEggs",
        ingredients:["1 tsp oil","2 eggs","1 tsp salt"],
        instructions:["Beat eggs with salt","Heat oil in pan","Add eggs to pan when hot","Gather eggs into curds, remove when cooked","Salt to taste and enjoy"]
        },
        {
        name:"garlicPasta",
        ingredients:["500mL water","100g spaghetti","25mL olive oil","4 cloves garlic","Salt"],
        instructions:["Heat garlic in olive oil","Boil water in pot","Add pasta to boiling water","Remove pasta from water and mix with garlic olive oil","Salt to taste and enjoy"]
        },
        {
        name:"chai",
        ingredients:["400mL water","100mL milk","5g chai masala","2 tea bags or 20 g loose tea leaves"],
        instructions:["Heat water until 80 C","Add milk, heat until 80 C","Add tea leaves/tea bags, chai masala; mix and steep for 3-4 minutes","Remove mixture from heat; strain and enjoy"]
        },
        {
        name:"butteredBagel",
        ingredients:["1 bagel","butter"],
        instructions:["cut the bagel","spread butter on bagel"]
        }   
    ])
    
console.log('Recipes Seeded!')

process.exit();
})
