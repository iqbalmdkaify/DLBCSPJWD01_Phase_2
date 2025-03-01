import Masonry from 'react-masonry-css';
import BlogCard from '../src/components/common/BlogCard';
import { useLoaderData } from 'react-router-dom';
import gridImage from '../src/assets/images/grid-image.jpg';
import { BlogResponseType } from '../services/api';

const HomePage = () => {
  const data: BlogResponseType[] = useLoaderData() as BlogResponseType[];

  const breakpoints = {
    default: 2,
    1024: 2,    // 2 columns for screens <= 1024px
    768: 1      // 1 column for screens <= 768px
  };

  return (
    <section className='bg-transparent'>
      <Masonry
        breakpointCols={breakpoints}
        className="flex w-full md:gap-9 lg:gap-16 xl:gap-[4.5rem] transition-all duration-300 ease-in-out"
        columnClassName="flex flex-col gap-4 md:gap-9 lg:gap-16 xl:gap-[4.5rem] transition-transform duration-300 ease-in-out"
      >
        {data.map((item, idx) => (
          <BlogCard
            _id={item.id}
            key={idx}
            heading={item.heading}
            author={item.info.author}
            createdAt={item.info.createdAt}
            image={item.image[0]}
          />
        ))}
      </Masonry>

      <div className='mt-[2rem] lg:mt-[8rem]'>
        <img src={gridImage} alt="masonry blog image" className='h-[400px] lg:h-[500px] w-full object-cover' />
      </div>
    </section>
  )
}

export default HomePage;