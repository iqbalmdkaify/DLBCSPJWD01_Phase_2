import BlogProfile from '../BlogProfile';
// import LikesCount from './LikesCount';
// import { toSnippet, toImage } from '../../utils/blogUtils';
// import { useNavigate } from 'react-router-dom';
import blogImage from '../../assets/images/PSX_20220629_222347.jpg';
import { SlLike } from "react-icons/sl";

type TBlogCardProps = {
  image?: { contentType: string; data: string };
  heading: string;
  snippet: string;
  likesCount: number;
  author: string;
  createdAt?: string;
  _id?: string;
}

const BlogCard = ({ image, heading, snippet, likesCount, author, createdAt, _id }: TBlogCardProps) => {
  // const navigate = useNavigate();

  // const openBlog = () => {
  //   navigate(`/blogs/${_id}`);
  // };

  return (
    // <div className='blog-container' onClick={openBlog}>
    <div className='blog-container' >

      {/* Blog Image holder */}
      <div className='blog-image-container'>
        <img src={blogImage} alt="Blog image" className='blog-image' />
        {/* <img src={toImage(image.contentType, image.data)} alt="Blog image" className='blog-image' /> */}
      </div>

      {/* Content */}
      <div className='blog-content-container'>

        {/* Profile info */}
        {/* <BlogProfile author={author} createdAt={createdAt} /> */}
        <BlogProfile author={author} createdAt={"2024-11-25T14:37:00.000Z"} />

        <h1 className='blog-heading'>{heading}</h1>
        {/* <p>{toSnippet(snippet)}</p> */}
        <p className='blog-snippet'>{snippet}</p>


        {/* Likes section */}
        <div className='likes-count-container'>
          <SlLike size={20} />
          <p>0</p>
        </div>

      </div>
    </div>
  )
}

export default BlogCard