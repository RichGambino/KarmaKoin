import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { SocialConnect } from './components/SocialConnect';
import { SocialTracker } from './components/SocialTracker';
import { SocialPass } from './components/SocialPass';
import { LevelSystem } from './components/LevelSystem';
import { Footer } from './components/Footer';
import { SignUp } from './components/SignUp';
import { LearnMore } from './components/LearnMore';
import { Overlooker } from './components/Overlooker';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [isOverlooker, setIsOverlooker] = useState(false);

  if (isOverlooker) {
    return <Overlooker />;
  }

  if (showSignUp) {
    return <SignUp />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-black text-white">
      <Navigation 
        onJoinClick={() => setShowSignUp(true)} 
        onOverlookerClick={() => setIsOverlooker(true)}
      />
      <Hero onJoinClick={() => setShowSignUp(true)} onLearnMoreClick={() => setShowLearnMore(true)} />
      <Features />
      <SocialConnect />
      <SocialTracker />
      <SocialPass />
      <LevelSystem />
      <Footer />
      <LearnMore isOpen={showLearnMore} onClose={() => setShowLearnMore(false)} />
    </div>
  );
}

export default App;