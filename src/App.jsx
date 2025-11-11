import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { Dashboard } from './components/pages/Dashboard';
import { SchoolProfile } from './components/pages/SchoolProfile';
import { Admissions } from './components/pages/Admissions';
import { Jobs } from './components/pages/Jobs';
import { Vendors } from './components/pages/Vendors';
import { Communication } from './components/pages/Communication';
import { Reports } from './components/pages/Reports';
import { Settings } from './components/pages/Settings';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <SchoolProfile />;
      case 'admissions':
        return <Admissions />;
      case 'jobs':
        return <Jobs />;
      case 'vendors':
        return <Vendors />;
      case 'communication':
        return <Communication />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar
            currentPage={currentPage}
            onNavigate={setCurrentPage}
            isCollapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <TopBar />

          <main className="flex-1 overflow-auto">
            <div className="max-w-[1600px] mx-auto p-8">
              {renderPage()}
            </div>
          </main>
        </div>

        <Toaster />
      </div>
  );
}