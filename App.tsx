
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import DarkFeature from './components/DarkFeature';
import CustomerStories from './components/LightFeature'; 
import YellowFeature from './components/YellowFeature';
import StatsShowcase from './components/StatsShowcase';
import BottomCTA from './components/BottomCTA';
import Resources from './components/Resources';
import Footer from './components/Footer';
import RoleExplanation from './components/RoleExplanation';
import ProductivityBoost from './components/ProductivityBoost';
import EdgeDecoration from './components/EdgeDecoration';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={`min-h-screen bg-background text-primary selection:bg-accent selection:text-black overflow-x-hidden relative transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <EdgeDecoration />
        <Navbar />
        <main>
          <Hero />
          <CustomerStories />
          <StatsShowcase />
          <RoleExplanation />
          <FeaturesGrid />
          <DarkFeature />
          <ProductivityBoost />
          <YellowFeature />
          <Resources />
          <BottomCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
