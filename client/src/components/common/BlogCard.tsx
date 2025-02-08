// import { toSnippet, toImage } from '../../utils/blogUtils';
// import { useNavigate } from 'react-router-dom';

import { NavLink } from "react-router-dom";

type BlogCardProps = {
  // image?: { contentType: string; data: string };
  image?: string;
  heading: string;
  author: string;
  createdAt?: string;
  _id?: string;
}

const BlogCard = ({ image, heading, author, createdAt }: BlogCardProps) => {
  // const navigate = useNavigate();

  // const openBlog = () => {
  //   navigate(`/blogs/${_id}`);
  // };

  return (
    <div className='bg-transparent flex flex-col md:gap-6 text-dark' >

      {/* Image container */}
      <div>
        <img src={image} alt="blog image" />
        {/* <img src={toImage(image.contentType, image.data)} alt="Blog image" className='blog-image' /> */}
      </div>

      {/* Info container */}
      <div className='flex flex-col md:gap-6 items-center'>
        <p className="text-base font-normal">{createdAt} &#x2022; {author}</p>

        <NavLink to="/" className='font-medium md:text-4xl text-center md:w-[80%]'>{heading}</NavLink>

        <NavLink to="/" className="text-sm border-b-[1px] border-dark">Read more</NavLink>
      </div>
    </div>
  )
}

export default BlogCard