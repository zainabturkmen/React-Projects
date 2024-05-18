import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  const {} = useGlobalContext()
  return <h2>stories component</h2>
}

export default Stories
