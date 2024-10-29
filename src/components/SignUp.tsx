import React, { useState } from 'react';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-indigo-900 to-black p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Join Karma Koin</h1>
          <p className="text-gray-400">Start earning rewards for your social impact</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 bg-black/30 border border-purple-700/50 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-12 pr-4 py-3 bg-black/30 border border-purple-700/50 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 bg-black/30 border border-purple-700/50 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full pl-12 pr-4 py-3 bg-black/30 border border-purple-700/50 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-purple-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Create Account</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <a href="#" className="text-yellow-400 hover:text-yellow-300">
            Sign in
          </a>
        </p>
      </div>
    </section>
  );
}