import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import Pagination from '../common/Pagination'
import '../../scss/post.scss'
import useFetchData from '../../hooks/useFetchData'
import { RubyContext, UPDATE_POST } from '../../context/RubyContext'

const Post = props => {
  const { Img, data } = props
  const { postData, error } = useFetchData()
  const [page, setPage] = useState(1)
  const [dataDisplay, setDataDisplay] = useState([])
  const { dispatch } = useContext(RubyContext)

  useEffect(() => {
    dispatch({ type: UPDATE_POST, postData })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData])

  useEffect(() => {
    const start = (page - 1) * 4
    const end = page * 4
    setDataDisplay(postData.slice(start, end))
  }, [page, postData])

  if (error) {
    return (
      <div className='mt-lg'>
        <div className='container'>
          <div className='alert alert-danger' role='alert'>
            資料載入出現問題請稍後再嘗試
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='mt-nav'>
      <div
        className='py-3 post-h1'
        style={{ backgroundImage: `url(${Img.post.img})` }}
      >
        <div className='container'>
          <div className='d-flex justify-content-end text-light'>
            <span className='badge badge-primary p-2 contact-title-button'>
              <FontAwesomeIcon icon={faThumbsUp} size='1x' />
              <span className='px-1'>讚</span>
              <span>15</span>
            </span>
            <span className='badge badge-primary p-2 contact-title-button'>
              分享
            </span>
          </div>
          <div className='d-flex justify-content-center mb-4'>
            <Link to='/' className='text-decoration-none text-light'>
              首頁
            </Link>
            <span className='text-light mx-1'>{'>'}</span>
            <Link to='/' className='text-decoration-none text-light'>
              最新消息
            </Link>
          </div>
          <h1 className='text-center text-light mb-4 font-weight-bold'>
            {data.post.title}
          </h1>
          <div className='d-flex justify-content-center'>
            <span className='px-5' style={{ border: 'solid #fff 2px' }} />
          </div>
          <div className='text-light text-center mb-2 mt-3 font-weight-bolder'>
            {data.post.subTitle}
          </div>
        </div>
      </div>
      <div className='container'>
        {dataDisplay.map(item => {
          return (
            <div className='row bg-light text-left my-5' key={item.id}>
              <div className='col-md-6 col-12'>
                <div
                  className='post-img'
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              </div>
              <div className='col-md-6 col-12 py-3 pr-3 d-flex flex-column'>
                <small className='d-block text-grey'>{item.date}</small>
                <h3 className='my-3'>
                  <Link to='/' className='post-title'>
                    {item.title}
                  </Link>
                </h3>
                <p>{item.content}</p>
                <div className='d-flex justify-content-between mt-auto'>
                  <small className='text-grey'>By {item.author}</small>
                  <button type='button' className='btn btn-outline-danger px-4'>
                    看更多
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className='my-5 py-5'>
        <Pagination
          dataLength={postData.length}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  )
}

Post.propTypes = {
  Img: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Post
