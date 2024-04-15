
import { gql, useQuery  } from '@apollo/client'

  const querygh = gql`
query Query {
  countries {
    name
    emoji
  }
}
`

const FetchData = (WrappedComponent) => {
    const EnhancedComponent = () => {
   const {data} = useQuery(querygh);

        return <WrappedComponent data={data}/>
    } 
  return EnhancedComponent;
}

export default FetchData



