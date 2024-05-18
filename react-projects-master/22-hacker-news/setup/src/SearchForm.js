import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {query, handleSearch} = useGlobalContext()
  return <h2>search form</h2>
}

export default SearchForm
