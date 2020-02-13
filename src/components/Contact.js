import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import '../scss/contact.scss'

const Contact = props => {
  const { Img, data } = props
  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    content: ''
  })

  const onChangeHandler = event => {
    const { name } = event.target
    const origin = { ...info }

    origin[name] = event.target.value
    setInfo(origin)
  }

  return (
    <div className='mt-nav mb-5 pb-5'>
      <div className='bg-danger py-3'>
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
              聯絡我們
            </Link>
          </div>
          <h1 className='text-center text-light mb-4 font-weight-bold'>
            {data.contact.title}
          </h1>
          <div className='d-flex justify-content-center mb-3'>
            <span className='px-5' style={{ border: 'solid #fff 2px' }} />
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6 col-12 text-left'>
            <h3 style={{ fontSize: 24 }}>{data.contact.name}</h3>
            <div className='mb-3'>{data.contact.address}</div>
            <div className='row mb-3'>
              {data.contact.content.map(item => {
                return (
                  <div className='col-6' key={item.text}>
                    {item.type}：
                    {item.isLink ? (
                      <Link to='/' className='text-danger'>
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </div>
                )
              })}
            </div>
            <img className='img-fluid' src={Img.contact.map} alt='' />
          </div>
          <div className='col-md-6 col-12'>
            <form>
              <p className='text-left'>{data.contact.formTitle}</p>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInputName'
                  name='name'
                  value={info.name}
                  onChange={onChangeHandler}
                  placeholder='名字'
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInputEmail'
                  name='email'
                  value={info.email}
                  onChange={onChangeHandler}
                  placeholder='信箱'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInputTel'
                  name='phone'
                  value={info.phone}
                  onChange={onChangeHandler}
                  placeholder='電話'
                />
              </div>
              <div className='form-group'>
                <select
                  className='form-control'
                  defaultValue='default'
                  name='type'
                  onBlur={onChangeHandler}
                  onChange={onChangeHandler}
                  id='exampleFormControlSelect1'
                >
                  {data.contact.choice.map(item => {
                    if (item.value) {
                      return (
                        <option value={item.value} key={item.text}>
                          {item.text}
                        </option>
                      )
                    }
                    return (
                      <option value='default' disabled key={item.text}>
                        {item.text}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='5'
                  name='content'
                  value={info.content}
                  onChange={onChangeHandler}
                  placeholder='留下你的訊息'
                />
              </div>
              <div className='row mb-3'>
                <div className='col-md-8 col-12'>
                  <button type='button' className='rounded'>
                    <img
                      className='img-fluid'
                      src={Img.contact.button}
                      alt=''
                    />
                  </button>
                </div>
              </div>
              <button
                type='submit'
                className='btn btn-danger w-100 text-center py-3'
                style={{ fontSize: 18 }}
              >
                送出
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <div className='container'>
        <h3 className='text-center mt-5 mb-4'>{data.title}</h3>
        <div className='d-flex justify-content-center mb-5'>
          <span className='px-5' style={{ border: 'solid #dc3545 2px' }} />
        </div>
        <div className='row'>
          {data.text.map((item, index) => {
            return (
              <Link
                to='/#'
                className='col-md-3 col-12 text-decoration-none text-dark'
                key={item.titleOn}
              >
                <div className='d-flex justify-content-center'>
                  <img src={img[index]} alt='' />
                </div>
                <h3 className='text-center my-3'>
                  <div>{item.titleOn}</div>
                  <div>{item.titleUnder}</div>
                </h3>
                <div className='text-center'>{item.content}</div>
              </Link>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

Contact.propTypes = {
  Img: PropTypes.objectOf(PropTypes.any).isRequired,
  data: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Contact
