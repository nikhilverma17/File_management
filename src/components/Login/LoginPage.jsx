import React, { useState } from 'react';
import Layout from '../Layout';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const dummyCredentials = {
    email: 'admin@example.com',
    password: '123',
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === dummyCredentials.email && password === dummyCredentials.password) {
      // If credentials are correct, navigate to 2FA page
      navigate('/two-factor-auth');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white dark:bg-gray-700 p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Login</h2>
          <form onSubmit={handleLogin}>
            <label className="block mb-2 text-gray-700 dark:text-gray-300">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <label className="block mb-2 text-gray-700 dark:text-gray-300">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
              Login
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>

          {/* Reset Password Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Forgot your password?{' '}
              <a href="/reset-password" className="text-blue-500 hover:text-blue-600">
                Reset Password
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;
