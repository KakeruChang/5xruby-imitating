import { useState, useEffect } from 'react'

import constants from '../data/constants'

const useFetchData = (initialValue = []) => {
  const { api } = constants
  const [postData, setPostData] = useState(initialValue)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(json => {
        setPostData(json)
        // setError(() => {
        //   throw new Error('Error!')
        // })
        if (error) {
          setError(null)
        }
      })
      .catch(err => {
        setError(err)
        // setError(() => {
        //   throw new Error('Error!')
        // })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { postData, error }
}

export default useFetchData
