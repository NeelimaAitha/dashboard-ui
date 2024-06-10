import React from 'react';
import { useSession } from 'next-auth/react';
import LoadingSpinner from '../components/LoadingSpinner';

const LoginPage = () => {
  const { data } = useSession();
  if (!data) {
    // Handle case where data is undefined or falsy
    return <LoadingSpinner />;
  }

  // Destructure data only if it's truthy
  const { username, email } = data;

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <p>Email: {email}</p>
      {/* Other content for the login page */}
    </div>
  );
};

export default LoginPage;
