import React, { useState } from 'react';
import { 
  Users, AlertTriangle, TrendingUp, Activity, 
  Shield, Ban, CheckCircle, RefreshCw, Search,
  Filter, MoreVertical, ArrowUpRight, MessageCircle
} from 'lucide-react';

const recentActivities = [
  { user: '@crypto_king', action: 'Reported for spam', status: 'pending', time: '2m ago' },
  { user: '@nft_lover', action: 'Multiple login attempts', status: 'investigating', time: '5m ago' },
  { user: '@web3_guru', action: 'Suspicious transactions', status: 'resolved', time: '15m ago' },
  { user: '@defi_master', action: 'Account verification', status: 'approved', time: '30m ago' },
  { user: '@meta_trader', action: 'Unusual activity', status: 'blocked', time: '1h ago' }
];

const platformStats = [
  { label: 'Active Users', value: '45.2K', change: '+12.3%', icon: Users },
  { label: 'Reports', value: '127', change: '-8.1%', icon: AlertTriangle },
  { label: 'Engagement Rate', value: '6.8%', change: '+2.4%', icon: Activity },
  { label: 'Avg. Response Time', value: '2.3m', change: '-15.2%', icon: MessageCircle }
];

export function Overlooker() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Overlooker Dashboard</h1>
            <p className="text-gray-400">Monitor and manage platform activity</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-purple-800/50 p-2 rounded-lg hover:bg-purple-700/50">
              <RefreshCw className="w-5 h-5" />
            </button>
            <button className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Generate Report
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search users, transactions, or activities..."
              className="w-full pl-12 pr-4 py-3 bg-black/30 border border-purple-700/50 rounded-lg focus:outline-none focus:border-yellow-400 text-white"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-purple-800/50 rounded-lg hover:bg-purple-700/50">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {platformStats.map(({ label, value, change, icon: Icon }) => (
            <div key={label} className="bg-purple-900/30 p-6 rounded-xl border border-purple-700/50">
              <div className="flex justify-between items-start mb-4">
                <Icon className="w-6 h-6 text-yellow-400" />
                <span className={`text-sm ${
                  change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {change}
                </span>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{label}</h3>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-purple-900/30 p-1 rounded-lg">
          {['overview', 'users', 'reports', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`flex-1 py-2 px-4 rounded-md capitalize transition-colors ${
                selectedTab === tab
                  ? 'bg-yellow-400 text-purple-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-purple-900/30 rounded-xl border border-purple-700/50 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 px-4 bg-black/20 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <p className="font-medium">{activity.user}</p>
                      <p className="text-sm text-gray-400">{activity.action}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      activity.status === 'pending' ? 'bg-yellow-400/20 text-yellow-400' :
                      activity.status === 'investigating' ? 'bg-blue-400/20 text-blue-400' :
                      activity.status === 'resolved' ? 'bg-green-400/20 text-green-400' :
                      activity.status === 'approved' ? 'bg-green-400/20 text-green-400' :
                      'bg-red-400/20 text-red-400'
                    }`}>
                      {activity.status}
                    </span>
                    <span className="text-sm text-gray-400">{activity.time}</span>
                    <button className="p-1 hover:bg-purple-800/50 rounded">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { label: 'Verify Users', icon: CheckCircle, color: 'text-green-400' },
            { label: 'Review Reports', icon: AlertTriangle, color: 'text-yellow-400' },
            { label: 'Manage Bans', icon: Ban, color: 'text-red-400' }
          ].map(({ label, icon: Icon, color }) => (
            <button
              key={label}
              className="flex items-center justify-between p-6 bg-purple-900/30 rounded-xl border border-purple-700/50 hover:bg-purple-800/30 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Icon className={`w-6 h-6 ${color}`} />
                <span className="font-medium">{label}</span>
              </div>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}