import React from 'react';
import { X } from 'lucide-react';

interface LearnMoreProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LearnMore({ isOpen, onClose }: LearnMoreProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50">
      <div className="bg-gradient-to-b from-purple-900 to-purple-950 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">About Karma Koin</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-4 text-gray-300">
            <p>
              Karma Koin is a revolutionary platform that rewards users for their positive social media impact. By connecting your social media accounts, you can earn Karma Koin through meaningful interactions and engagement.
            </p>
            
            <h3 className="text-xl font-semibold text-white mt-6">How it works:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Connect your social media accounts</li>
              <li>Engage with your audience through likes, comments, and shares</li>
              <li>Earn Karma Koin based on your engagement metrics</li>
              <li>Level up your profile and unlock exclusive rewards</li>
              <li>Redeem your Karma Koin for various perks and benefits</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6">Benefits:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Earn rewards for actions you already take</li>
              <li>Build a stronger social media presence</li>
              <li>Access exclusive features and content</li>
              <li>Join a community of positive influencers</li>
              <li>Track your growth and impact across platforms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}