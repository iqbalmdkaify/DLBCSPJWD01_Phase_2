import { Blog } from '../../../types/Global';
import { formatDate, toImage } from '../../../utils/blogUtils';

type BlogViewProps = {
  data: Blog | null;
};

const BlogView = ({ data }: BlogViewProps) => {
  if (!data) return <p className="text-center">Loading...</p>;

  return (
    <>
      <p className="text-base text-center">
        {formatDate(data.createdAt)} • Written by {data.author}
      </p>
      <div className="flex flex-col lg:gap-[5rem] lg:mt-10">
        {/* Blog Title */}
        <p className="font-medium lg:text-7xl text-center lg:leading-snug">
          {data.title}
        </p>

        {/* Blog image container */}
        <div>
          {data.blogImage?.length > 0 && (
            <img src={toImage(data.blogImage[0].contentType, data.blogImage[0].data)} alt="blog image" className="w-full h-auto" />
          )}
        </div>

        {/* Blog content container */}
        <p className="text-base font-light">{data.content}</p>
      </div>
    </>
  );
};

export default BlogView;
