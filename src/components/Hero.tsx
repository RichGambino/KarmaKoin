import React from 'react';

interface HeroProps {
  onJoinClick: () => void;
  onLearnMoreClick: () => void;
}

export function Hero({ onJoinClick, onLearnMoreClick }: HeroProps) {
  return (
    <header className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">
            Turn Your Social Impact into Digital Rewards
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Earn Karma Koin through meaningful interactions. Level up your social presence and unlock exclusive rewards.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={onJoinClick}
              className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Join Now
            </button>
            <button 
              onClick={onLearnMoreClick}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400/10 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="grid grid-cols-3 gap-4 rotate-12 transform translate-x-1/4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-gradient-to-br from-yellow-400 to-purple-500 p-6 rounded-lg">
              <div className="h-32"></div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}