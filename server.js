const { GraphQLServer } = require('graphql-yoga');


const message = [
    { id: "1", user: "shohag", content: "Content" },
    { id: "2", user: "Amin", content: "Java" }
]
const typeDefs = `
type Message {
    id: ID!
    user: String!
    content: String!
}
type Query {
    message: [Message]
}
`
const resolvers = {
    Query: {
        message: () => message
    }
}

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(({ port }) => {
    console.log(`Server running on port: http://localhost:${port}/`);
})