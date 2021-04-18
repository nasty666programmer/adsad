const { ApolloServer, gql } = require('apollo-server');
const { uuid } = require('uuidv4');

let codeCrypto = uuid().split('-');

const typeDefs = gql`
    type User {
        id: ID!
        email: String!
        verifyCode: String!
    }
    input UserInput {
        id: ID!
        email: String!
    }
    type Query {
        getUser: [User]!
        getCode: [User]!
    }
    type Mutation {
        mailChange(email: String!): User!
    }
`
const createUser = (email) => {
 const id = codeCrypto[0];
 const verifyCode = codeCrypto[1];
 console.log(verifyCode)
 console.log(id)
 
 return {
  id, email, verifyCode
 }
}
const resolvers = {
 Query: {
  getUser: (user) => users,
  getCode: (code) => users
 },
 Mutation: {
  mailChange: (_, { email }, { dataSources }) => {
    const user = createUser(email);
    users = [];
   users.push(user)
      
   return users[0]
  }
 }
}


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;