import React, { useEffect, useState } from 'react'
import blogImage from '../src/assets/images/PSX_20220629_222347.jpg';
import BlogProfile from '../src/components/BlogProfile';
import { formatDate } from '../utils/blogUtils';
import { SlLike } from 'react-icons/sl';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { IBlogData, useBlogData } from '../../Provider/BlogDataProvider';

/**
 * User clicks on blog and this page shows up or
 * User creates blog and it redirects the user to this page view which is being created
 */

const BlogPage = () => {

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

  // console.log(blog);

  return (
    <div className='blog-view-wrapper'>
      <Link className='blog-link' to="/">All Posts</Link>
      <div className='blog-view-content-container'>

        {/* BlogProfile component */}
        <BlogProfile author='iqbalmd81' createdAt={formatDate('2024-10-14T13:03:38.666+00:00')} />


        <div className='blog-view-content'>
          {/* Blog Heading */}
          <p className='blog-view-heading'>How reading changes your perspective</p>

          {/* Content view is divided into 4 section for styling purposes */}

          {/* Section 1 */}
          <p className='blog-view-content-section-one'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>

          {/* Section 2: Blog Image itself */}
          <div className='blog-view-content-section-two'>
            <img className='blog-view-content-image' src={blogImage} alt="blog-image" />
          </div>

          {/* Section 3 */}
          <p className='blog-view-content-section-three'>
            Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that's current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.
          </p>
        </div>

        {/* Likes section */}
        <div className='likes-count-container'>
          <SlLike size={20} />
          <p>0</p>
        </div>
      </div>

    </div>
  )
}

export default BlogPage;