import React from 'react'
import loading from './ZKZx.gif'

const Spinner = () => {
  return (
    <div className='text-center'>
        <img src={loading} style={{height:"20px",width:"20px"}} alt="loading" />
    </div>
  )
}

export default Spinner