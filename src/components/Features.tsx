import React from 'react';
import { Heart, Share2, MessageCircle, Repeat } from 'lucide-react';

const features = [
  { icon: Heart, title: 'Likes', desc: 'Earn coins when your content receives likes' },
  { icon: MessageCircle, title: 'Comments', desc: 'Engage in meaningful discussions' },
  { icon: Share2, title: 'Shares', desc: 'Spread valuable content to earn more' },
  { icon: Repeat, title: 'Reposts', desc: 'Get rewarded for amplifying great content' },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Earn Through Engagement</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-purple-900/30 p-6 rounded-xl backdrop-blur-sm hover:transform hover:-translate-y-1 transition-all">
              <Icon className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}