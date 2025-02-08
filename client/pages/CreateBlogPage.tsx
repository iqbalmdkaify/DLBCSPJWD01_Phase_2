// import { useState } from 'react'
import Button from '../src/components/common/Button'
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
    <div className='bg-transparent md:px-[23%] text-dark'>
      <p className='text-4xl font-medium'>Got something to share? Let’s Bring It to Life!</p>
      <form className='flex flex-col md:gap-8 md:mt-[4rem]'>
        <div>
          <p className='text-base'>Blog Title *</p>
          {/* <input type="text" name="title" onChange={handleChange} value={formData.title} /> */}
          <input type="text" name="title" className="md:mt-2 md:px-9 md:py-[1.20rem] outline-offset-2 focus:outline outline-[2px] outline-dark w-full" />
        </div>
        <div>
          <p className='text-base'>Blog Content *</p>
          {/* <textarea name="content" onChange={handleChange} value={formData.content} />*/}
          <textarea name="content" className='w-full md:px-9 md:py-[1.20rem] md:mt-2 outline-offset-2 focus:outline outline-[2px] outline-dark' />
        </div>
        <div>
          <input
            type="file"
            id="imageUpload"
            name="image"
            accept="image/*" // Accepts only image file types
            required
            className=''
          // onChange={handleChange}
          />
        </div>
        {/* <Button text="CREATE" action={handleSubmit} /> */}
        <Button text="Create" />
      </form>
    </div>
  )
}

export default CreateBlogPage