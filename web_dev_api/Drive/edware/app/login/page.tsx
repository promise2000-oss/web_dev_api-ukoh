'use client';

import { useContext, useState, ChangeEvent } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { loginWithGoogle, loginWithApple, loginWithEmail, registerWithEmail, logout } from '../../lib/authHelpers';

export default function LoginPage() {
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginEmail = async () => {
    try {
      await loginWithEmail(email, password);
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const handleRegister = async () => {
    try {
      await registerWithEmail(email, password);
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">EchoBoard</h1>

        <div className="flex items-center gap-4">
          {user && (
            <>
              <img
                src={user.photoURL ?? ''}
                alt="Profile"
                className="w-10 h-10 rounded-full border"
              />
              <button
                onClick={logout}
                className="bg-red-100 text-red-600 px-4 py-2 rounded hover:bg-red-200 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>

      <section className="p-8 max-w-xl mx-auto">
        {user ? (
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Welcome, {user.displayName || user.email}
            </h2>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-center">Login to EchoBoard</h2>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                className="p-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="p-2 border rounded"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleLoginEmail}
                  className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Login with Email
                </button>
                <button
                  onClick={handleRegister}
                  className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700"
                >
                  Register
                </button>
              </div>
            </div>

            <button
              onClick={loginWithGoogle}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Sign in with Google
            </button>

            <button
              onClick={loginWithApple}
              className="w-full bg-black text-white py-2 rounded hover:opacity-90"
            >
              Sign in with Apple
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
