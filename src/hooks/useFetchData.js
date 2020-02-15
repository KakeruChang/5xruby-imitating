import { useState, useEffect } from 'react'

import constants from '../data/constants'

const useFetchData = (initialValue = []) => {
  const [postData, setPostData] = useState(initialValue)
  const { api } = constants

  useEffect(() => {
    fetch(api)
      .then(response => response.json())
      .then(json => {
        setPostData(json)
      })
      .catch(() => {})
    // .catch(err => {
    //   console.log(err)
    //   console.log('err')
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return postData
}

export default useFetchData
