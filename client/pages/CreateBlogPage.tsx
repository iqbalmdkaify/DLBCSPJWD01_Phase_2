import { useState } from 'react';
import { useAuth } from '../context/AuthProvider';
import { useBlogData } from '../Provider/BlogDataProvider';
import Button from '../src/components/common/Button'
import { BlogFormData } from '../types/Global';
import { useNavigate } from 'react-router-dom';


const CreateBlogPage = () => {
  const { user } = useAuth();
  const { submitBlogData } = useBlogData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    content: '',
    blogImage: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === 'file' && e.target instanceof HTMLInputElement) {

      // If the input is a file input, update the image in the state
      const file = e.target.files ? e.target.files[0] : null;
      setFormData({
        ...formData,
        blogImage: file,
      });
    } else {

      // Otherwise, update the text fields
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    submitBlogData({
      ...formData,
      author: user ? user.username : null,
    }).then(res => {
      if (res.success) {
        navigate(`/blogs/${res._id}`)
      } else {
        throw new Error(`Form Error: ${res.message}`)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div className='bg-transparent md:px-[23%] text-dark'>
      <p className='text-3xl lg:text-4xl font-medium'>Got something to share? Let’s Bring It to Life!</p>
      <form className='flex flex-col gap-4 lg:gap-8 mt-8 lg:mt-[4rem]'>
        <div>
          <p className='text-base'>Blog Title *</p>
          <input type="text" name="title" className="mt-1 md:mt-2 px-9 py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark w-full" onChange={handleChange} value={formData.title} />
        </div>
        <div>
          <p className='text-base'>Blog Content *</p>
          <textarea name="content" className='w-full md:px-9 py-[1.20rem] mt-1 md:mt-2 outline-offset-2 focus:outline outline-[2px] outline-dark' onChange={handleChange} value={formData.content} />
        </div>
        <div>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*" // Accepts only image file types
            required
            className=''
            onChange={handleChange}
          />
        </div>
        <Button text="Create" action={handleSubmit} />
      </form>
    </div>
  )
}

export default CreateBlogPage