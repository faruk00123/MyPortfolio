import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Zap, BookOpen, Code2, FolderGit2,
  Cpu, Library, Component, ChevronLeft, Home, LogOut,
  GraduationCap, ChevronDown
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Zap, label: 'Running Skills', path: '/dashboard/skills-run' },
  { icon: BookOpen, label: 'Learning Journey', path: '/dashboard/learning' },
  { icon: Code2, label: 'Code Playground', path: '/dashboard/playground' },
  { icon: FolderGit2, label: 'Projects', path: '/dashboard/projects' },
  { icon: Cpu, label: 'Skills', path: '/dashboard/skills' },
  { icon: Library, label: 'Resources', path: '/dashboard/resources' },
  { icon: Component, label: 'UI Components', path: '/dashboard/ui' },
  {
    icon: GraduationCap, label: 'Courses', path: '/dashboard/courses',
    children: [
      { label: 'Free', path: '/dashboard/courses?tab=free' },
      { label: 'Paid', path: '/dashboard/courses?tab=paid' },
    ]
  },
];

export default function DashboardSidebar({ isOpen, mobileOpen, onToggle, onMobileClose, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col fixed left-0 top-0 h-screen bg-[#0d0d0d] border-r border-white/5 z-30 transition-all duration-300 ${
          isOpen ? 'w-64' : 'w-16'
        }`}
      >
        <SidebarContent isOpen={isOpen} onToggle={onToggle} onLogout={handleLogout} />
      </aside>
      {/* Desktop spacer */}
      <div className={`hidden lg:block shrink-0 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`} />

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed left-0 top-0 h-screen w-64 bg-[#0d0d0d] border-r border-white/5 z-50 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent isOpen={true} onToggle={onMobileClose} onLogout={handleLogout} showClose />
      </aside>
    </>
  );
}

function SidebarContent({ isOpen, onToggle, onLogout, showClose }) {
  const [coursesOpen, setCoursesOpen] = React.useState(false);

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-white/5">
        {isOpen && (
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Code2 size={14} className="text-primary" />
            </div>
            <span className="font-mono font-bold text-sm">
              <span className="text-white">OMAR</span>
              <span className="text-primary">FARUK</span>
            </span>
          </div>
        )}
        {!isOpen && (
          <div className="w-7 h-7 bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto">
            <Code2 size={14} className="text-primary" />
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1 rounded hover:text-primary transition-colors text-white/40"
        >
          <ChevronLeft size={16} className={`transition-transform duration-300 ${!isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 overflow-y-auto space-y-0.5 px-2">
        {navItems.map((item) => {
          if (item.children) {
            return (
              <div key={item.path}>
                <button
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 group relative text-white/40 hover:text-white/80 hover:bg-white/5 ${coursesOpen ? 'text-white/80' : ''}`}
                >
                  <item.icon size={16} className="shrink-0" />
                  {isOpen && (
                    <>
                      <span className="text-xs font-medium tracking-wide flex-1 text-left">{item.label}</span>
                      <ChevronDown size={12} className={`transition-transform duration-300 ${coursesOpen ? 'rotate-180' : ''}`} />
                    </>
                  )}
                  {!isOpen && (
                    <div className="absolute left-full ml-3 px-2 py-1 bg-[#1a1a1a] text-white text-xs rounded border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                      {item.label}
                    </div>
                  )}
                </button>
                {/* Submenu */}
                {isOpen && (
                  <div className={`overflow-hidden transition-all duration-300 ${coursesOpen ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-4 pl-4 border-l border-white/5 py-1 space-y-0.5">
                      <NavLink
                        to="/dashboard/courses"
                        state={{ tab: 'free' }}
                        onClick={() => {}}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-200 ${
                            isActive ? 'text-primary' : 'text-white/35 hover:text-white/70 hover:bg-white/5'
                          }`
                        }
                      >
                        🔓 Free
                      </NavLink>
                      <NavLink
                        to="/dashboard/courses"
                        state={{ tab: 'paid' }}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-3 py-2 rounded text-xs transition-all duration-200 text-white/35 hover:text-white/70 hover:bg-white/5`
                        }
                      >
                        🔒 Paid
                      </NavLink>
                    </div>
                  </div>
                )}
              </div>
            );
          }
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded transition-all duration-200 group relative ${
                  isActive
                    ? 'bg-primary/10 text-primary border-l-2 border-primary -ml-px pl-[calc(0.75rem-1px)]'
                    : 'text-white/40 hover:text-white/80 hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon size={16} className={`shrink-0 ${isActive ? 'text-primary' : ''}`} />
                  {isOpen && (
                    <span className="text-xs font-medium tracking-wide">{item.label}</span>
                  )}
                  {!isOpen && (
                    <div className="absolute left-full ml-3 px-2 py-1 bg-[#1a1a1a] text-white text-xs rounded border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                      {item.label}
                    </div>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="border-t border-white/5 py-4 px-2 space-y-0.5">
        <NavLink
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded text-white/40 hover:text-white/80 hover:bg-white/5 transition-all duration-200 group relative"
        >
          <Home size={16} className="shrink-0" />
          {isOpen && <span className="text-xs font-medium tracking-wide">Back to Home</span>}
          {!isOpen && (
            <div className="absolute left-full ml-3 px-2 py-1 bg-[#1a1a1a] text-white text-xs rounded border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              Back to Home
            </div>
          )}
        </NavLink>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-white/40 hover:text-red-400 hover:bg-red-500/5 transition-all duration-200 group relative"
        >
          <LogOut size={16} className="shrink-0" />
          {isOpen && <span className="text-xs font-medium tracking-wide">Logout</span>}
          {!isOpen && (
            <div className="absolute left-full ml-3 px-2 py-1 bg-[#1a1a1a] text-white text-xs rounded border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              Logout
            </div>
          )}
        </button>
      </div>
    </div>
  );
}