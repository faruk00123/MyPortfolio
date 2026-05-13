import React, { useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Home, LogOut, Activity, FolderGit2, MessageSquare, Clock, TrendingUp, Zap } from 'lucide-react';

const stats = [
  { icon: FolderGit2, label: 'Project Status', value: '12 ACTIVE', accent: false },
  { icon: Activity, label: 'System Health', value: 'OPTIMAL', accent: true },
  { icon: MessageSquare, label: 'Messages', value: '03 NEW', accent: false },
];

const activities = [
  { time: '2 hrs ago', text: 'Deployed portfolio v2.1 to production', type: 'deploy' },
  { time: '5 hrs ago', text: 'Pushed 14 commits to main branch', type: 'code' },
  { time: '1 day ago', text: 'New message from client — Project Alpha', type: 'message' },
  { time: '2 days ago', text: 'Completed code review for feature/auth', type: 'review' },
];

export default function Dashboard() {
  const { isLoggedIn, onLogout } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="min-h-[85vh] px-4 sm:px-6 max-w-7xl mx-auto py-12 sm:py-20 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">System Online</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
            Command <span className="text-primary italic">Center</span>
          </h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-all duration-300"
          >
            <Home size={14} />
            Go to Home
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2.5 bg-destructive text-destructive-foreground text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-all duration-300"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border mb-12">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className="bg-background p-8 sm:p-10 group hover:bg-card transition-all duration-500"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="flex items-center gap-2 mb-6">
              <stat.icon size={14} className="text-muted-foreground" />
              <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </h3>
            </div>
            <p className={`text-3xl sm:text-4xl font-mono font-bold ${stat.accent ? 'text-primary' : ''}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 border border-border p-8">
          <div className="flex items-center gap-2 mb-8">
            <Clock size={14} className="text-primary" />
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Recent Activity</h3>
          </div>
          <div className="space-y-0">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-border last:border-0 group hover:pl-2 transition-all duration-300">
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-2 group-hover:bg-primary transition-colors shrink-0" />
                <div>
                  <p className="text-sm font-mono">{activity.text}</p>
                  <span className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border border-border p-8">
          <div className="flex items-center gap-2 mb-8">
            <Zap size={14} className="text-primary" />
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">Quick Actions</h3>
          </div>
          <div className="space-y-3">
            {['New Project', 'View Analytics', 'Settings', 'Export Data'].map((action) => (
              <button
                key={action}
                className="w-full text-left px-4 py-3 border border-border text-xs font-mono uppercase tracking-wider hover:border-primary hover:text-primary hover:pl-6 transition-all duration-300"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}