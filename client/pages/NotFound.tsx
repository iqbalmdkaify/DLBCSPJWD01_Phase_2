import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();
  const [error404, setError404] = useState<string | null>(null);

  const visitedpath = location.pathname.slice(1,);

  useEffect(() => {
    const fetchNotFoundMessage = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_ROOT_API}/${visitedpath}`);
        setError404(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotFoundMessage();
  }, [visitedpath]);

  return (
    <div className='w-screen h-screen bg-light flex justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-semibold text-3xl'>Page Not Found 404!</h1>
        <p className='text-base italic'>{`Unexpected error ocurred!, ${error404}`}</p>
        <Link to="/" className='text-blue-300 font-medium underline' >Go to Home Page</Link>
      </div>
    </div>
  )
}

export default NotFoundPage;