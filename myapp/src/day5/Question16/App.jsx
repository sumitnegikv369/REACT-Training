// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// import Display from './Display'

// const client = new ApolloClient({
//   uri: 'https://countries.trevorblades.com/graphql',
//   cache: new InMemoryCache(),
// })

// const App = () => {
//   return (
//     <ApolloProvider client={client}>
//       <Display />
//     </ApolloProvider>
//   )
// }

// export default App
import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Display from './Display'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Display />
    </ApolloProvider>
  )
}

export default App
