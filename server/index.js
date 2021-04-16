const { ApolloServer, gql } = require('apollo-server');
const cryptoRandomString = require('crypto-random-string');

const typeDefs = gql`
  
  type User {
            id:ID!,
            mail:String!,
            code:String!
        }

    type Query {
        getUser: [User!]
        getCode: [User]!
    }

  type Mutation {
      changeMail(mail: String!): User!
  }
`

const addUser = (mail) => {
    const id = cryptoRandomString(5);
    const code = cryptoRandomString(4);
    return {
        id,mail,code
    } 
}



const resolvers = {
  Query: {
    getUser: (user) => users,
    getCode: (codeVerify) => users,
  },
  Mutation: {
      changeMail: (_, {mail}, {dataSrc}) => {
          console.log(dataSrc);

      }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;