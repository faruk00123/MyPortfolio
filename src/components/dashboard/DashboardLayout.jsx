import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import { Menu } from 'lucide-react';
import { useAuthApp } from '@/lib/AuthAppContext';
import { useEffect } from 'react';

export default function DashboardLayout() {
  const { isLoggedIn, onLogin, onLogout } = useAuthApp();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex">
      {/* Mobile Overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <DashboardSidebar
        isOpen={sidebarOpen}
        mobileOpen={mobileSidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onMobileClose={() => setMobileSidebarOpen(false)}
        onLogout={onLogout}
      />

      {/* Main Content */}
      <div className="flex-1 min-h-screen flex flex-col overflow-hidden">
        {/* Mobile Top Bar */}
        <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0d0d0d] fixed top-0 right-0 left-0 z-30">
          <button onClick={() => setMobileSidebarOpen(true)} className="p-2 hover:text-primary transition-colors">
            <Menu size={20} />
          </button>
          <span className="font-mono text-sm font-bold">
            <span className="text-white">Omar</span>
            <span className="text-primary">Dev</span>
          </span>
          <div className="w-8" />
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <Outlet context={{ isLoggedIn, onLogin, onLogout }} />
        </div>
      </div>
    </div>
  );
}