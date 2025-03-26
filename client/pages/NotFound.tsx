import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error404, setError404] = useState<string | null>(null);

  const visitedpath = location.pathname.slice(1,);

  useEffect(() => {
    const fetchNotFoundMessage = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_ROOT_API}${visitedpath}`);
        setError404(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotFoundMessage();
  }, []);

  return (
    <div className='not-found-wrapper'>
      <h1 className='not-found-title'>Page Not Found 404!</h1>
      {/* <p className='not-found-message'>{error404}</p> */}
      <p className='not-found-message'>Unexpected error ocurred</p>
      <Link to="/" className='not-found-link' >Go to Home Page</Link>
    </div>
  )
}

export default NotFoundPage;