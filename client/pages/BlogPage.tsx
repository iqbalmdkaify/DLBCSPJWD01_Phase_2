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
import blogImage from '../src/assets/images/about-me.jpg';

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
  // TODO: Add Pagination for switching blogs
  return (
    <div className='lg:px-[22%]'>
      <p className='text-base text-center'>June 7th &#x2022; Written by Author</p>
      <div className='flex flex-col lg:gap-[5rem] lg:mt-10'>
        {/* Blog Title */}
        <p className='font-medium lg:text-7xl text-center lg:leading-snug'>How reading changes your perspective</p>

        {/* Blog image container */}
        <div className=''>
          <img className='' src={blogImage} alt="blog image" />
        </div>

        {/* Blog content container */}
        <p className='text-base font-light'>
          Id et dolor deserunt aute enim consequat sunt aute eiusmod cupidatat voluptate dolore incididunt velit. Et officia minim ullamco Lorem. Officia anim velit proident cillum amet labore cupidatat laboris eiusmod in nisi. Ea pariatur est fugiat fugiat aute sit nisi exercitation et aliqua mollit. Nisi officia do eiusmod amet officia.
          <br></br>
          <br></br>
          Proident ut dolor aliqua consectetur exercitation voluptate. Commodo tempor mollit dolor veniam est elit veniam aute incididunt culpa velit amet nulla. Culpa enim amet ullamco amet ullamco culpa consectetur. Sint ea dolor qui culpa magna eiusmod ut. Qui nulla consectetur excepteur sunt cupidatat exercitation veniam cupidatat voluptate deserunt. Mollit veniam exercitation excepteur consectetur minim in. Ipsum exercitation labore pariatur aliquip occaecat dolore consectetur cillum do duis.
          <br></br>
          <br></br>
          Excepteur enim Lorem do eiusmod id quis adipisicing tempor est eiusmod. Do exercitation tempor et eu eu minim anim nisi nostrud dolore Lorem pariatur. Enim eu in id non duis proident. Dolore nostrud anim officia consequat proident consectetur cillum sunt et irure adipisicing aute Lorem. Cillum magna labore ipsum est velit velit est.
          <br></br>
          <br></br>
          Irure aliquip quis laborum nisi. Nostrud officia qui cillum ad nulla incididunt ipsum enim quis. Dolore veniam magna exercitation elit aliqua ipsum.
          <br></br>
          <br></br>
          Mollit laborum et adipisicing deserunt veniam. Occaecat laboris exercitation ea esse sunt non Lorem ex velit ullamco minim sunt. Laboris voluptate aute aliquip velit reprehenderit ut adipisicing fugiat in enim.
          <br></br>
          <br></br>
          Magna proident occaecat aute ipsum voluptate velit nisi ut tempor aliquip Lorem aliqua qui Lorem. Dolor aliqua qui nulla sunt et. Sint do culpa aliqua mollit esse in fugiat. Nisi labore fugiat officia ut irure consectetur fugiat. Nisi sint non in elit adipisicing reprehenderit. Velit reprehenderit eu aute consectetur mollit incididunt do proident commodo.
          <br></br>
          <br></br>
          Veniam est cupidatat aliqua quis dolor in pariatur aute cupidatat id. Pariatur sit in occaecat quis mollit elit magna culpa reprehenderit fugiat dolore anim. Sint sunt consectetur ad commodo occaecat. Fugiat quis mollit minim fugiat. Veniam nisi consectetur nisi magna eiusmod consequat aliquip deserunt Lorem reprehenderit officia cillum nisi. Do esse culpa magna laborum sint magna irure fugiat eu pariatur eu labore consequat eiusmod. Occaecat ad voluptate do reprehenderit exercitation ullamco enim quis pariatur id veniam mollit eu.
        </p>
      </div>
    </div>
  )
}

export default BlogPage;