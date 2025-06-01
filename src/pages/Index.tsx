
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <footer className="py-8 text-center text-muted-foreground border-t border-border">
          <p>&copy; 2025 Janakiraman. Built with React and passion.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
