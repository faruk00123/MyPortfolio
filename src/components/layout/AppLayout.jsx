import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAuthApp } from '@/lib/AuthAppContext';

export default function AppLayout() {
  const { isLoggedIn, onLogin, onLogout } = useAuthApp();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-inter">
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main className="pt-20">
        <Outlet context={{ isLoggedIn, onLogin, onLogout }} />
      </main>
      <Footer />
    </div>
  );
}