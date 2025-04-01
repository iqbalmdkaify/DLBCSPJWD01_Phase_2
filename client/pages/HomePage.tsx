import Masonry from "react-masonry-css";
import { lazy, Suspense, useEffect, useState } from "react";
import gridImage from "../src/assets/images/grid-image.jpg";
import { BlogCardSkeleton } from "../src/components/layout/Skeleton";
import { useBlogData } from "../Provider/BlogDataProvider";
import { BlogResponseType } from "../services/api";
const BlogCardPreview = lazy(() => import("../src/components/common/BlogCard"));

const HomePage = () => {
  const { getBlogs } = useBlogData();
  const [data, setData] = useState<BlogResponseType[] | null>(null);
  const [loading, setLoading] = useState(true);

  const breakpoints = {
    default: 2,
    1024: 2,
    768: 1,
  };

  useEffect(() => {
    getBlogs()
      .then((res) => {
        setData(res);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-transparent">
      <Masonry
        breakpointCols={breakpoints}
        className="flex w-full md:gap-9 lg:gap-16 xl:gap-[4.5rem] transition-all duration-300 ease-in-out"
        columnClassName="flex flex-col gap-4 md:gap-9 lg:gap-16 xl:gap-[4.5rem] transition-transform duration-300 ease-in-out"
      >
        {loading
          ? [...Array(4)].map((_, index) => (<BlogCardSkeleton key={index} />))
          : data?.map((item, idx) => (
            <Suspense fallback={<BlogCardSkeleton />} key={idx}>
              <BlogCardPreview
                _id={item.id}
                heading={item.heading}
                author={item.info.author}
                createdAt={item.info.createdAt}
                image={item.image[0]}
              />
            </Suspense>
          ))}
      </Masonry>

      <div className="mt-[2rem] lg:mt-[8rem]">
        <img
          src={gridImage}
          alt="masonry blog image"
          className="h-[400px] lg:h-[500px] w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HomePage;
