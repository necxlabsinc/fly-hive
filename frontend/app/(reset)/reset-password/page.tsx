"use client";
import React, { useState, useEffect } from 'react';


type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const baseClasses = "fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white z-50 transition-opacity duration-300";
  const typeClasses: Record<ToastType, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type] || typeClasses.info}`}>
      <div className="flex items-center justify-between">
        <span className="font-semibold">{message}</span>
        <button onClick={onClose} className="ml-4 text-white hover:text-gray-100 focus:outline-none">
          &times;
        </button>
      </div>
    </div>
  );
};


function App() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState(''); 


  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null); // { message, type }

  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ message, type });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer); 
    }
  }, [toast]);


  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      showToast('Please enter your email and password.', 'error');
      return;
    }

    
    console.log('Log-in attempt:', { email, password });

    const isSuccess = Math.random() > 0.3; 

    if (isSuccess) {
      showToast('Log-in successful! Welcome back!', 'success');
     
      setEmail('');
      setPassword('');
    } else {
      showToast('Log-in failed. Please check your credentials.', 'error');
    }
  };

 
  const handleResetPasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resetEmail) {
      showToast('Please enter your email address.', 'error');
      return;
    }

    console.log('Password reset attempt for:', resetEmail);

    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      showToast('Password reset link sent to your email!', 'success');
      setResetEmail('');
      setShowResetPasswordForm(false);
    } else {
      showToast('Failed to send reset link. Please try again.', 'error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-inter">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        {/* Conditional rendering based on showResetPasswordForm state */}
        {!showResetPasswordForm ? (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Log In</h2>
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-sm text-right">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); setShowResetPasswordForm(true); }}
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                Log In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Sign up
              </a>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Reset Password</h2>
            <form onSubmit={handleResetPasswordSubmit} className="space-y-6">
              <div>
                <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="reset-email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="you@example.com"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
              >
                Send Reset Link
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              Remembered your password?{' '}
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); setShowResetPasswordForm(false); }}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Log in
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
