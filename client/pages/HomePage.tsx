import Masonry from 'react-masonry-css';
import HeroImage from '../src/assets/images/hero-image.jpg';
import BlogCard from '../src/components/common/BlogCard';
import { useLoaderData } from 'react-router-dom';
import { Blog } from '../types/Global';

const HomePage = () => {
  const breakpoints = {
    default: 2, // Default for larger screens
    1100: 2,    // For screens <= 1100px
    768: 1      // For screens <= 768px
  };
  const data: Blog[] = useLoaderData() as Blog[];
  console.log(data);
  return (
    <section className='hero-container'>

      {/* Hero Image */}
      <div className="hero-image-container">
        <img src={HeroImage} alt="hero image" className="hero-image" />
        <div className="overlay">
          <h1 className="overlay-text">Explore Your Journey</h1>
        </div>
      </div>

      {/* Blogs section */}
      <div>
        <p className='post-banner'>All Posts</p>

        {/* Masonry layout wrapper */}
        <div className="masonry-wrapper">
          <Masonry
            breakpointCols={breakpoints}
            className="masonry-grid"
            columnClassName="masonry-grid-column"
          >
            {data.map((item, idx) => (
              <BlogCard key={idx} heading={item.title} snippet={item.content} author='iqbalmdkaify' likesCount={0} />
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  )
}

export default HomePage;