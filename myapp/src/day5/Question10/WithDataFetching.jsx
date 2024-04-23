import { useEffect, useState } from 'react'

const WithDataFetching = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [axiosdata, setAxiosdata] = useState([])

    const getApidata = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        setAxiosdata(data.splice(0, 3))
      } catch (error) {
        console.log(error.message)
      }
    }

    useEffect(() => {
      getApidata()
    }, [])

    return <WrappedComponent axiosdata={axiosdata} />
  }

  return EnhancedComponent
}

export default WithDataFetching
