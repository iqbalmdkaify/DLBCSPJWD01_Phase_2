// import React, { useEffect, useState } from 'react'
// import BlogProfile from '../src/components/BlogProfile';
// import { formatDate } from '../utils/blogUtils';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { IBlogData, useBlogData } from '../../Provider/BlogDataProvider';

/**
 * User clicks on blog and this page shows up or
 * User creates blog and it redirects the user to this page view which is being created
 */
import { useLoaderData } from 'react-router-dom';
// import blogImage from '../src/assets/images/about-me.jpg';
import { Blog } from '../types/Global';
import { formatDate } from '../utils/blogUtils';

const BlogPage = () => {

  const data = useLoaderData() as Blog;

  // const { id } = useParams();
  // const { getBlog } = useBlogData();
  // const [blog, setBlog] = useState<IBlogData | []>([]);

  // useEffect(() => {
  //   const fetchSingleBlog = async () => {
  //     if (id) {
  //       try {
  //         const blogData = await getBlog(id);
  //         setBlog(blogData); // Correctly set blog data in state
  //       } catch (err) {
  //         console.log("Error fetching blog! ", err);
  //       }
  //     }
  //   };

  //   fetchSingleBlog();
  // }, [id]);

  // if (!blog) {
  //   return <p>Loading...</p>;
  // }

  console.log(data);
  // TODO: Add Pagination for switching blogs
  return (
    <div className='lg:px-[22%]'>
      <p className='text-base text-center'>{formatDate(data.createdAt)} &#x2022; Written by {data.author}</p>
      <div className='flex flex-col lg:gap-[5rem] lg:mt-10'>
        {/* Blog Title */}
        <p className='font-medium lg:text-7xl text-center lg:leading-snug'>{data.title}</p>

        {/* Blog image container */}
        <div className=''>
          <img className='' src={data.blogImage[0].data} alt="blog image" />
        </div>

        {/* Blog content container */}
        <p className='text-base font-light'>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPage;