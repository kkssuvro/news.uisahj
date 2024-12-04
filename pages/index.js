// pages/redirect.js (for Next.js or similar frameworks)
import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    // Set a delay (e.g., 5000ms = 5 seconds)
    setTimeout(() => {
      // Redirect to your desired URL after the delay
      window.location.href = 'https://exmpire.online/RSSNEW.html';
    }, 5000); // 5000ms = 5 seconds
  }, []);

  return (
    <div>
      <p>You will be redirected shortly...</p>
    </div>
  );
};

export default RedirectPage;

