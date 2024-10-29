import React from 'react';
import { TrendingUp, Users, MessageCircle, Share2, Award } from 'lucide-react';

const stats = [
  {
    platform: 'Twitter',
    engagement: {
      likes: 1234,
      comments: 456,
      shares: 789,
      growth: '+12.5%'
    },
    earnings: 2500
  },
  {
    platform: 'Instagram',
    engagement: {
      likes: 5678,
      comments: 890,
      shares: 234,
      growth: '+18.2%'
    },
    earnings: 3800
  },
  {
    platform: 'YouTube',
    engagement: {
      likes: 9012,
      comments: 345,
      shares: 678,
      growth: '+25.7%'
    },
    earnings: 6200
  }
];

const totalEarnings = stats.reduce((sum, stat) => sum + stat.earnings, 0);
const averageGrowth = (stats.reduce((sum, stat) => 
  sum + parseFloat(stat.engagement.growth), 0) / stats.length).toFixed(1);

export function SocialTracker() {
  return (
    <section id="tracker" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Performance Tracker</h2>
            <p className="text-xl text-gray-400">Monitor your social media impact and earnings</p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center space-x-6">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-1">Total Earnings</p>
              <p className="text-3xl font-bold text-yellow-400">{totalEarnings.toLocaleString()} KK</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-1">Avg Growth</p>
              <p className="text-3xl font-bold text-green-400">+{averageGrowth}%</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {stats.map((stat) => (
            <div key={stat.platform} 
              className="bg-purple-900/30 rounded-xl p-6 backdrop-blur-sm border border-purple-700/50">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4">{stat.platform}</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-black/20 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">Likes</p>
                      <p className="font-semibold">{stat.engagement.likes.toLocaleString()}</p>
                    </div>
                    <div className="text-center p-3 bg-black/20 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">Comments</p>
                      <p className="font-semibold">{stat.engagement.comments.toLocaleString()}</p>
                    </div>
                    <div className="text-center p-3 bg-black/20 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">Shares</p>
                      <p className="font-semibold">{stat.engagement.shares.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-between md:items-end">
                  <div className="flex items-center space-x-2 text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.engagement.growth}</span>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p className="text-sm text-gray-400 mb-1">Earnings</p>
                    <p className="text-2xl font-bold text-yellow-400">
                      {stat.earnings.toLocaleString()} KK
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          {[
            { icon: Users, label: 'Total Followers', value: '123.6K' },
            { icon: MessageCircle, label: 'Engagement Rate', value: '4.8%' },
            { icon: Share2, label: 'Total Shares', value: '45.2K' },
            { icon: Award, label: 'Karma Level', value: '32' }
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-black/20 rounded-lg p-4 flex items-center space-x-4">
              <Icon className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-sm text-gray-400">{label}</p>
                <p className="text-lg font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}