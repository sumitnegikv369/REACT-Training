import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import UI from './UI'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
})

const Wrapper = () => {
  return (
    <ApolloProvider client={client}>
      <UI />
    </ApolloProvider>
  )
}

export default Wrapper
