import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ClientArea from './pages/ClientArea';
import BlogList from './pages/Blog/BlogList';
import Careers from './pages/Careers';
import { AnimatePresence } from 'framer-motion';
import { PageTransition } from './components/ui/PageTransition';
import { trackPageView } from './lib/analytics';
import { useEffect } from 'react';

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <AnalyticsTracker />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="about" element={<PageTransition><About /></PageTransition>} />
          <Route path="services" element={<PageTransition><Home /></PageTransition>} />
          <Route path="blog" element={<PageTransition><BlogList /></PageTransition>} />
          <Route path="careers" element={<PageTransition><Careers /></PageTransition>} />
          <Route path="contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="client-area" element={<PageTransition><ClientArea /></PageTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
