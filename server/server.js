const express = require('express');
// const { ApolloServer } = require('apollo-server-express');

// const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// });

// server.start().then( res => {
//     server.applyMiddleware({ app });
    
   
// })


app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    
    app.use(require("./routes"));
    
    db.once('open', () => {
        app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
    });