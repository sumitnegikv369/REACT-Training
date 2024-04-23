import React, { useEffect, useState } from 'react'
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
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)

  const nextPage = () => {
    if(currentPage<data.countries.length/countriesPerPage){
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if(currentPage>1){
      setCurrentPage(currentPage - 1)
    }
  }

  const loadPage = (i) => {
    setCurrentPage(i)
  }

  useEffect(() => {
    loadPage(1)
  }, [data])

  return (
    <div className="ques9">
      {data && (
        <>
          <div className="pagination">
            <p onClick={prevPage} disabled={currentPage === 1}>
              Prev
            </p>
            {Array(Math.ceil(data.countries.length / countriesPerPage))
              .fill(1)
              .map((_, i) => (
                <p
                  key={i}
                  onClick={() => loadPage(i + 1)}
                  disabled={currentPage === i + 1}
                  className={`${currentPage === i + 1 ? 'active' : ''}`}
                >
                  {i + 1}
                </p>
              ))}
            <p
              onClick={nextPage}
              disabled={
                currentPage ===
                Math.ceil(data.countries.length / countriesPerPage)
              }
            >
              Next
            </p>
          </div>
          <div className="container">
            {data.countries
              .slice(
                (currentPage - 1) * countriesPerPage,
                currentPage * countriesPerPage,
              )
              .map((country) => (
                <div key={country.phone}>
                  <h2>{country.name}</h2>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  )
}

export default UI
