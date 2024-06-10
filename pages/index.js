import React from 'react';
import { useSession } from 'next-auth/react';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = () => {
  const { data: sessionData, status } = useSession();

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  const { data } = sessionData || {}; // Safely access 'data' with default empty object

  // Use 'data' properties safely
  const username = data ? data.username : 'Guest';
  const email = data ? data.email : 'aithaneelima@gmail.com';

  return (
    <div>
      <h1>Welcome, {username}</h1>
      <p>Email: {email}</p>
      {/* Other content for the home page */}
    </div>
  );
};

export default HomePage;
