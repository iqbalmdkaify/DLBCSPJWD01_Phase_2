import Masonry from 'react-masonry-css';
import HeroImage from '../src/assets/images/hero-image.jpg';
import BlogCard from '../src/components/common/BlogCard';

const HomePage = () => {
  const breakpoints = {
    default: 2, // Default for larger screens
    1100: 2,    // For screens <= 1100px
    768: 1      // For screens <= 768px
  };

  return (
    <section className='hidden hero-container'>

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
            <BlogCard heading='Testing a new title' snippet='Officia officia ex cupidatat ipsum laborum aliquip nulla est reprehenderit magna.' author='iqbalmdkaify' likesCount={0} />
            <BlogCard heading='Enim aute id velit ipsum laborum in nostrud duis velit veniam id.' snippet='Officia officia ex cupidatat ipsum laborum aliquip nulla est reprehenderit magna.' author='iqbalmdkaify' likesCount={0} />
            <BlogCard heading='Enim aute id velit ipsum laborum in nostrud duis velit veniam id.' snippet='Officia officia ex cupidatat ipsum laborum aliquip nulla est reprehenderit magna.' author='iqbalmdkaify' likesCount={0} />
          </Masonry>
        </div>
      </div>
    </section>
  )
}

export default HomePage;