const { GraphQLServer } = require('graphql-yoga');


const message = []

const typeDefs = `
type Message {
    id: ID!
    user: String!
    content: String!
}
type Query {
    message: [Message]
}

type Mutation {
    postMessage(user: String!, content: String!): ID!
}
`
const resolvers = {
    Query: {
        message: () => message
    },
    Mutation: {
        postMessage: (parent, {user, content}, ctx, info) => {
            const id = message.length;
            message.push({
                id,
                user,
                content
            });
            return id;
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(({ port }) => {
    console.log(`Server running on port: http://localhost:${port}/`);
})