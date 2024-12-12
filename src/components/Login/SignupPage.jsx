import React from 'react';

function SignupPage() {
  return (
    <div className="signup-page flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Sign Up</h2>
      <form className="bg-white dark:bg-gray-700 p-6 rounded shadow-md">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Username:</label>
        <input type="text" className="w-full p-2 mb-4 border rounded" />

        <label className="block mb-2 text-gray-700 dark:text-gray-300">Email:</label>
        <input type="email" className="w-full p-2 mb-4 border rounded" />

        <label className="block mb-2 text-gray-700 dark:text-gray-300">Password:</label>
        <input type="password" className="w-full p-2 mb-4 border rounded" />

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
