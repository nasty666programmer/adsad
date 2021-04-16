const graphql = require('graphql');
const {GraphQLObject, GraphQLInt,GraphQLString} = graphql;

const UserType = new GraphQLObject({
    name: "User",
    fields: () => ({
        
    }),
});

module.exports = UserType;