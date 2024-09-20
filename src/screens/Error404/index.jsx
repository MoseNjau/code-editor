import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timeout when the component unmounts
  }, [navigate]); // Add 'navigate' to the dependency array

  return (
    <div>No Page Found, Redirecting to home page</div>
  );
};

export default Error404;
