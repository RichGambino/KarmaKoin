import React from 'react';
import { Coins } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Coins className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold">Karma Koin</span>
          </div>
          <div className="text-sm text-gray-400">
            © 2024 Karma Koin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}