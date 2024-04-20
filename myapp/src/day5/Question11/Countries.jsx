import React from 'react'
import { useQuery, gql } from '@apollo/client'
import './styles.css'

const MyQuery = gql`
  query {
    countries {
      name
      phone
      currenc
    }
  }
`

const Countries = () => {
  const { error, data, loading } = useQuery(MyQuery)

  console.log(error, loading, data)

  if (loading) return 'Loading...'
  if (error)
    return (
      <div className="ques11">
        <h2>{error.message}</h2>
      </div>
    )

  return (
    <div className="ques11">
      <h2>GraphQl Error handling</h2>
      <div>
        {data.countries.slice(0, 5).map((countries) => {
          return (
            <div>
              <h2>{countries.name}</h2>
              <h3>{countries.phone}</h3>
              <h3>{countries.currency}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Countries
