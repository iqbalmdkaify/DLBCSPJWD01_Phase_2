import React, { useState } from 'react'
import Button from '../src/components/common/Button'
import { Link } from 'react-router-dom';
// import { useAuth } from '../../context/AuthProvider';
// import { useBlogData } from '../../Provider/BlogDataProvider';

// export interface IBlogFormData {
//   title: string,
//   content: string,
//   image: File | null,
// }

// export interface ISubmitFormData extends IBlogFormData {
//   author: string | null;
// }

const CreateBlogPage = () => {
  // const { user } = useAuth();
  // const { submitBlogData } = useBlogData();

  // const [formData, setFormData] = useState<IBlogFormData>({
  //   title: '',
  //   content: '',
  //   image: null,
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value, type } = e.target;

  //   if (type === 'file' && e.target instanceof HTMLInputElement) {

  //     // If the input is a file input, update the image in the state
  //     const file = e.target.files ? e.target.files[0] : null;
  //     setFormData({
  //       ...formData,
  //       image: file,
  //     });
  //   } else {

  //     // Otherwise, update the text fields
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   }
  // }

  // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   submitBlogData({
  //     ...formData,
  //     author: user ? user.username : null
  //   })
  // }

  return (
    <div className='create-blog-wrapper'>
      <p className="blog-form-title">Got an Idea? Let’s Bring It to Life!</p>
      <form className="blog-form">
        <div>
          <p>Blog Title *</p>
          {/* <input type="text" name="title" onChange={handleChange} value={formData.title} /> */}
          <input type="text" name="title" />
        </div>
        <div>
          <p>Blog Content *</p>
          {/* <textarea name="content" onChange={handleChange} value={formData.content} />*/}
          <textarea name="content" />
        </div>
        <div>
          <input
            type="file"
            id="imageUpload"
            name="image"
            accept="image/*" // Accepts only image file types
            required
          // onChange={handleChange}
          />
        </div>
        {/* <Button text="CREATE" type="Secondary" action={handleSubmit} /> */}
        <Button text="CREATE" type="Secondary" />

        {/* TODO:// Change its position and add some styling for Mobile and Desktop view */}
        <Link className='blog-link' to="/">Home Page</Link>
      </form>
    </div>
  )
}

export default CreateBlogPage