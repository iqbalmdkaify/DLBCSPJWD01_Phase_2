import BlogCard from "./BlogCard"
import heroImage from '../assets/hero-image.jpg';
import Button from "./common/Button";
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { IBlogData, useBlogData } from "../../Provider/BlogDataProvider";
import { useEffect, useState } from "react";

const Hero = () => {

  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const { getBlogs } = useBlogData();


  const [blogs, setBlogs] = useState<IBlogData[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {

      try {
        const blogData = await getBlogs();
        setBlogs(blogData);
      } catch (err) {
        console.log(err);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <main className="hero-container">
      <div className="hero-image-container">
        <img src={heroImage} alt="Pre blog image" className="hero-image" />
      </div>
      <div className="post-banner">
        <p>All Posts</p>
      </div>

      {/* Floating button to create blogs when the user is authenticated */}

      {/* TODO:// Button is not clickable in Mobile view */}
      {isAuth ? <div className='create-button-wrapper'>
        <Button text='CREATE BLOG' type='Secondary' action={() => navigate('/create-blog')} />
      </div> : null}

      <div className="blog-grid">
        {blogs ? blogs.map((blog) => (
          <BlogCard key={blog._id} image={blog.blogImage[0]} heading={blog.title} snippet={blog.content} likesCount={blog.likes} author={blog.author} createdAt={blog.createdAt} _id={blog._id} />
        )) : <p>Loading Blogs...</p>}
      </div>
    </main>
  )
}

export default Hero