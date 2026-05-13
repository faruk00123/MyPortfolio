import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import { AuthAppProvider, useAuthApp } from './lib/AuthAppContext';

import PageNotFound from './lib/PageNotFound';

import AppLayout from './components/layout/AppLayout';
import DashboardLayout from './components/dashboard/DashboardLayout';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import DashboardOverview from './pages/DashboardOverview';
import RunningSkills from './pages/dashboard/RunningSkills';
import LearningJourney from './pages/dashboard/LearningJourney';
import CodePlayground from './pages/dashboard/CodePlayground';
import DashProjects from './pages/dashboard/DashProjects';
import DashSkills from './pages/dashboard/DashSkills';
import Resources from './pages/dashboard/Resources';
import UIComponents from './pages/dashboard/UIComponents';
import Courses from './pages/dashboard/Courses';




// Dashboard protection
function ProtectedRoute({ children }) {

  const { isLoggedIn, loading } = useAuthApp();

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
}




function AppRoutes() {

  return (

    <Routes>

      {/* Public Routes */}

      <Route element={<AppLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Route>



      {/* Dashboard Routes */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >

        <Route index element={<DashboardOverview />} />

        <Route path="skills-run" element={<RunningSkills />} />

        <Route path="learning" element={<LearningJourney />} />

        <Route path="playground" element={<CodePlayground />} />

        <Route path="projects" element={<DashProjects />} />

        <Route path="skills" element={<DashSkills />} />

        <Route path="resources" element={<Resources />} />

        <Route path="ui" element={<UIComponents />} />

        <Route path="courses" element={<Courses />} />

        <Route path="courses/free" element={<Courses />} />

        <Route path="courses/paid" element={<Courses />} />

      </Route>



      <Route path="*" element={<PageNotFound />} />

    </Routes>

  );
}



function App() {

  return (

    <QueryClientProvider client={queryClientInstance}>

      <Router>

        <AuthAppProvider>

          <AppRoutes />

        </AuthAppProvider>

      </Router>

      <Toaster />

    </QueryClientProvider>

  );
}

export default App;