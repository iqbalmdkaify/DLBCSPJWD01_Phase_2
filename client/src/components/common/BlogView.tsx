import { useNavigate, useParams } from 'react-router-dom';
import { Blog } from '../../../types/Global';
import { formatDate, toImage } from '../../../utils/blogUtils';
import { FaTrashAlt } from 'react-icons/fa';
import { useBlogData } from '../../../Provider/BlogDataProvider';

type BlogViewProps = {
  data: Blog | null;
};

const BlogView = ({ data }: BlogViewProps) => {
  const params = useParams();
  const { deleteBlog } = useBlogData();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!params.id) {
      throw new Error("blog id is missing! Delete operation can't be performed")
    }

    deleteBlog(params.id).then(res => {
      console.log(res.message);
      navigate("/")
    }).catch(err => {
      console.error(err);
    })
  }

  if (!data) return <p className="text-center">Loading...</p>;

  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mb-8 md:justify-around'>
        <p className="text-base text-center min-w-fit">
          {formatDate(data.createdAt)} • Written by {data.author}
        </p>

        {/* Delete button */}
        <button className='bg-gray-300 rounded-full' onClick={() => handleDelete()}>
          <FaTrashAlt className='h-10 w-10 text-red-600 p-2' />
        </button>
      </div>
      <div className="flex flex-col gap-4 sm:gap-[2rem] md:gap-[3rem] lg:gap-[5rem] mt-1 sm:mt-3 md:mt-6 lg:mt-10">
        {/* Blog Title */}
        <p className="font-medium text-xl sm:text-2xl md:text-4xl lg:text-7xl text-center leading-snug">
          {data.title}
        </p>

        {/* Blog image container */}
        <div>
          {data.blogImage?.length > 0 && (
            <img src={toImage(data.blogImage[0].contentType, data.blogImage[0].data)} alt="blog image" className="w-full h-auto" />
          )}
        </div>

        {/* Blog content container */}
        <p className="text-base font-light text-justify">{data.content}</p>
      </div>
    </>
  );
};

export default BlogView;
