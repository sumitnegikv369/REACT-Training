import { gql, useQuery } from '@apollo/client'


const querygh = gql`
  query Countries {
    countries {
      name
      emoji
    }
  }
`

const FetchData = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const { data } = useQuery(querygh)
    
console.log("jsfnjsf",data);
    return <WrappedComponent data={data} />
  }
  return EnhancedComponent
}

export default FetchData
