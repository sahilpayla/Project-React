import React from 'react'
import './Create.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Create = () => {

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [review, setReview] = useState("")
  const navigate = useNavigate()

  const { token } = useSelector((state) => state.auth)


  // type="file", e.target.files[0]
  const onChangeFile = (e) => {
    setImage(e.target.files[0])
  }

  const handleCloseImg = () => {
    setImage('')
  }

  const handleCreateProduct = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()
      let filename = null

      if (image) {
        filename = Date.now() + image.name
        formData.append("filename", filename)
        formData.append("image", image)

        await fetch(`http://localhost:8000/upload/image`, {
          headers: {
            "Authorization": `Bearer ${token}`
          },
          method: "POST",
          body: formData
        })
      }

      // uploading product 
      const res = await fetch(`http://localhost:8000/product`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          category,
          img: filename,
          price,
          review
        })
      })

      const food = await res.json()
      console.log(food)
      navigate(`/food/${food._id}`)

    } catch (error) {
      console.error(error.message)
    }
  }



  return (
    <>
      <h2>hello</h2>
      <div className="create-container">
        <div className="create-wrapper">
          <h2 className="create-title">Create food</h2>

          <form onSubmit={handleCreateProduct} encType="multipart/form-data">
            <div className="create-inputWrapper">
              <label htmlFor="html-title">Title</label>
              <input type="text"
                placeholder='Title'
                className='create-input'
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="create-inputWrapper">
              <label htmlFor="html-title">Description</label>
              <input type="text"
                placeholder='Description'
                className='create-input'
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="create-inputWrapper">
              <label htmlFor="html-title">Category</label>
              <input type="text"
                placeholder='Category'
                className='create-input'
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="create-inputWrapperImage">
              <label htmlFor="image" className='create-labelFileInput'>Image : <span>Upload Here</span></label>
              <input type="file"
                id="image"
                placeholder='Image'
                className='create-input'
                onChange={onChangeFile}
                style={{ display: 'none' }}
              />
              {
                image && <p className='create-imageName'>{image.name} <AiOutlineCloseCircle onClick={handleCloseImg} className='create-closeIcon' /> </p>
              }
            </div>
            <div className="create-inputWrapper">
              <label htmlFor="html-title">Price</label>
              <input type="number"
                step={0.01}
                placeholder='Price'
                className='create-input'
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="create-inputWrapper">
              <label htmlFor="html-title">Review</label>
              <input type="number"
                step={0.1}
                min={1}
                max={5}
                placeholder='Review'
                className='create-input'
                onChange={(e) => setReview(e.target.value)}
              />
            </div>

            <div className="create-buttonWrapper">
              <button type='submit' className="create-submitBtn">
                Submit
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Create