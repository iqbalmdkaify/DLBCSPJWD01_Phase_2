/* eslint-disable @typescript-eslint/no-unused-vars */

import Masonry from 'react-masonry-css';
import BlogCard from '../src/components/common/BlogCard';
import { useLoaderData } from 'react-router-dom';
import { Blog } from '../types/Global';

import bg1 from '../src/assets/images/bg-1.jpg';
import bg2 from '../src/assets/images/bg-2.jpg';
import bg3 from '../src/assets/images/bg-3.jpg';
import bg4 from '../src/assets/images/bg-4.jpg';
import bg5 from '../src/assets/images/bg-5.jpg';
import gridImage from '../src/assets/images/grid-image.jpg';

const HomePage = () => {
  const breakpoints = {
    default: 2,
    1024: 2,    // 2 columns for screens <= 1024px
    768: 1      // 1 column for screens <= 768px
  };
  // const data: Blog[] = useLoaderData() as Blog[];
  // console.log(data);
  const dummyData = [
    {
      heading: "Mastering Tailwind CSS for Modern UI",
      info: { author: "John Doe", createdAt: "2024-02-05" },
      image: bg1,
    },
    {
      heading: "Why TypeScript is a Game-Changer for Developers",
      info: { author: "Alex Johnson", createdAt: "2024-01-20" },
      image: bg3,
    },
    {
      heading: "The Future of Web Development with React",
      info: { author: "Jane Smith", createdAt: "2024-01-28" },
      image: bg2,
    },
    {
      heading: "Building Scalable Apps with Next.js",
      info: { author: "Michael Brown", createdAt: "2024-01-10" },
      image: bg5,
    },
    {
      heading: "Understanding Serverless Architecture",
      info: { author: "Emily Davis", createdAt: "2024-01-15" },
      image: bg4,
    },
  ];

  return (
    <section className='bg-transparent'>
      <Masonry
        breakpointCols={breakpoints}
        className="flex w-full md:gap-9 lg:gap-16 xl:gap-[4.5rem] transition-all duration-300 ease-in-out"
        columnClassName="flex flex-col md:gap-9 lg:gap-16 xl:gap-[4.5rem] transition-transform duration-300 ease-in-out"
      >
        {dummyData.map((item, idx) => (
          <BlogCard
            key={idx}
            heading={item.heading}
            author={item.info.author}
            createdAt={item.info.createdAt}
            image={item.image}
          />
        ))}
      </Masonry>

      <div className='md:mt-[8rem]'>
        <img src={gridImage} alt="masonry blog image" className='md:h-[500px] md:w-full object-cover' />
      </div>
    </section>
  )
}

export default HomePage;