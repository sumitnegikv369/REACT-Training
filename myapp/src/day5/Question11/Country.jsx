import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Countries from './Countries'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphhql',
  cache: new InMemoryCache(),
})

const Country = () => {
  return (
    <ApolloProvider client={client}>
      <Countries />
    </ApolloProvider>
  )
}

export default Country
