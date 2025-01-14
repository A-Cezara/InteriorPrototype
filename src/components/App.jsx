import React from 'react';
import Navigation from './Landing/Navigation';
import HeroSection from './Landing/HeroSection';
import FloatingMenu from './Landing/FloatingMenu';

export default function App() {
  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
      <Navigation />
      <HeroSection />
      <FloatingMenu />
    </div>
  );
}
