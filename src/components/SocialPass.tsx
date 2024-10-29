import React from 'react';
import { Star, Sparkles, Crown, Trophy } from 'lucide-react';

const passes = [
  { title: 'Gold Pass', price: '$9.99', icon: Star, features: ['Basic Rewards', 'Custom Emojis', '2x Coin Multiplier'] },
  { title: 'Platinum Pass', price: '$19.99', icon: Sparkles, features: ['Premium Rewards', 'Exclusive Badges', '5x Coin Multiplier'] },
  { title: 'Royal Pass', price: '$49.99', icon: Crown, features: ['Ultimate Rewards', 'Custom Profile Themes', '10x Coin Multiplier'] },
];

export function SocialPass() {
  return (
    <section id="social-pass" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Choose Your Social Pass</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {passes.map(({ title, price, icon: Icon, features }) => (
            <div key={title} className="relative bg-gradient-to-b from-purple-800/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-700/50">
              <Icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className="text-3xl font-bold text-yellow-400 mb-6">{price}</p>
              <ul className="space-y-4 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-yellow-400 text-purple-900 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
                Get {title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}