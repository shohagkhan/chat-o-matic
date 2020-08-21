import React from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';


const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});


const GET_MESSAGES = gql`
query{
  message{
    id
    user
    content
  }
}
`;


const Messages = ({user}) => {
    const {data} = useQuery(GET_MESSAGES)
    if (!data) {
        return null;
    }
    return JSON.stringify(data)
}

const Chat = () => {
    return (
        <div><Messages user="Jack" /></div>
    )
}


export default () => {
    <ApolloProvider client={client}>
        <Chat />
    </ApolloProvider>
}