import React from 'react'
import './Create.css';

const Create = () => {

  const handleCreateProduct = () => {
    
  }

  return (
    <>
    <h2>hello</h2>
      <div className="container">
        <div className="wrapper">
          <h2 className="title">Create food</h2>
          <form onSubmit={handleCreateProduct} encType="multipart/form-data">
            <div className="inputWrapper">
              <label htmlFor="title">Title</label>
              <input type="text" placeholder='Title' className='input' onChange={(e) => setTitle(e.target.value)} />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create