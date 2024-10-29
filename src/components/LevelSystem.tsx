import React from 'react';
import { Users } from 'lucide-react';

const levels = [
  { name: 'Novice', followers: '0-1K' },
  { name: 'Rising Star', followers: '1K-10K' },
  { name: 'Influencer', followers: '10K-50K' },
  { name: 'Celebrity', followers: '50K-100K' },
  { name: 'Superstar', followers: '100K-500K' },
  { name: 'Legend', followers: '500K-1M' },
];

export function LevelSystem() {
  return (
    <section id="levels" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Level Up Your Influence</h2>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-yellow-400/20 to-purple-900/50 blur-3xl"></div>
          <div className="relative bg-purple-900/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ultimate Goal: Legend Status</h3>
                <p className="text-gray-400">Reach 1 million followers</p>
              </div>
              <Users className="w-12 h-12 text-yellow-400" />
            </div>
            <div className="w-full bg-purple-950 rounded-full h-4 mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-4 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {levels.map((level, i) => (
                <div key={level.name} className="text-center">
                  <div className={`w-full aspect-square rounded-lg ${i <= 3 ? 'bg-yellow-400' : 'bg-purple-800'} mb-2 flex items-center justify-center`}>
                    <span className="text-xs font-medium text-purple-900">{level.followers}</span>
                  </div>
                  <span className="text-sm font-medium">{level.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}