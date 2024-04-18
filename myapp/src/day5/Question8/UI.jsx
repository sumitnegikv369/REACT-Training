import { gql, useQuery } from '@apollo/client'
import './styles.css'

const querygh = gql`
  query Countries {
    countries {
      name
      phone
      native
    }
  }
`

const UI = () => {
  const { data } = useQuery(querygh)
  console.log(data)
  return (
    <div className="ques8">
      {data && data.countries.slice(0, 10).map((country) => (
        <div key={country.phone}>
          <h2>{country.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default UI
