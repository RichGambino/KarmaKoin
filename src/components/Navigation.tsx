import React from 'react';
import { Coins, Shield } from 'lucide-react';

interface NavigationProps {
  onJoinClick: () => void;
  onOverlookerClick: () => void;
}

export function Navigation({ onJoinClick, onOverlookerClick }: NavigationProps) {
  return (
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Coins className="w-8 h-8 text-yellow-400" />
        <span className="text-2xl font-bold">Karma Koin</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
        <a href="#connect" className="hover:text-yellow-400 transition-colors">Connect</a>
        <a href="#tracker" className="hover:text-yellow-400 transition-colors">Tracker</a>
        <a href="#social-pass" className="hover:text-yellow-400 transition-colors">Social Pass</a>
        <a href="#levels" className="hover:text-yellow-400 transition-colors">Levels</a>
        <button 
          onClick={onJoinClick}
          className="bg-yellow-400 text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
        >
          Get Started
        </button>
        <button
          onClick={onOverlookerClick}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-800/50 rounded-full hover:bg-purple-700/50 transition-colors"
        >
          <Shield className="w-5 h-5" />
          <span>Overlooker</span>
        </button>
      </div>
    </nav>
  );
}