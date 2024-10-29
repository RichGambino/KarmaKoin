import React from 'react';
import { Twitter, Instagram, Youtube, Twitch, Facebook, LinkedinIcon } from 'lucide-react';

const socialPlatforms = [
  {
    name: 'Twitter',
    icon: Twitter,
    color: 'hover:bg-[#1DA1F2]',
    followers: '12.5K'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    color: 'hover:bg-[#E4405F]',
    followers: '24.8K'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    color: 'hover:bg-[#FF0000]',
    followers: '45.2K'
  },
  {
    name: 'Twitch',
    icon: Twitch,
    color: 'hover:bg-[#9146FF]',
    followers: '8.3K'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    color: 'hover:bg-[#1877F2]',
    followers: '32.1K'
  },
  {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    color: 'hover:bg-[#0A66C2]',
    followers: '15.7K'
  }
];

export function SocialConnect() {
  return (
    <section id="connect" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Connect Your Accounts</h2>
          <p className="text-xl text-gray-400">Link your social media accounts to start earning Karma Koin</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div key={platform.name} 
                className="relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-800/90 transform transition-transform duration-300 group-hover:scale-105"/>
                <div className="relative p-8 border border-purple-700/50 rounded-xl backdrop-blur-sm overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full filter blur-2xl transform translate-x-16 -translate-y-16"/>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <Icon className="w-8 h-8 text-gray-300" />
                      <h3 className="text-xl font-semibold">{platform.name}</h3>
                    </div>
                    <span className="text-sm text-gray-400">{platform.followers} followers</span>
                  </div>

                  <button className={`w-full py-3 px-6 rounded-lg border-2 border-transparent 
                    ${platform.color} transition-all duration-300 
                    hover:scale-[1.02] hover:text-white
                    flex items-center justify-center space-x-2 group`}>
                    <span>Connect {platform.name}</span>
                    <Icon className="w-5 h-5 transform transition-transform group-hover:rotate-12" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Connect multiple accounts to maximize your earning potential
          </p>
          <div className="inline-flex items-center justify-center px-8 py-4 bg-black/30 rounded-xl backdrop-blur-sm">
            <div className="flex items-center space-x-2 text-yellow-400">
              <span className="font-semibold">Bonus:</span>
              <span>+25% Karma Koin for each connected account</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}