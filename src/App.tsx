import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Methodology } from './components/Methodology';
import { InnerStruggle } from './components/InnerStruggle';
import { Checklist } from './components/Checklist';
import { Discover } from './components/Discover';
import { Instructor } from './components/Instructor';
import { Footer } from './components/Footer';

function LandingPage() {
  return (
    <div className="flex flex-col w-full bg-[#0A0A0A] overflow-x-hidden min-h-screen text-white font-sans selection:bg-[var(--color-brand-middle)] selection:text-white">
      <Hero />
      <Problem />
      <Methodology />
      <InnerStruggle />
      <Checklist />
      <Discover />
      <Instructor />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
