import {
  LayoutDashboard,
  School,
  Users,
  Briefcase,
  Package,
  MessageSquare,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

export function Sidebar({ currentPage, onNavigate, isCollapsed, onToggleCollapse }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'School Profile', icon: School },
    { id: 'admissions', label: 'Admissions', icon: Users },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'vendors', label: 'Vendors', icon: Package },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const getTooltipContent = (item) => {
    return item.label;
  };

  return (
      <div
          className={`bg-white border-r border-gray-200 h-screen sticky top-0 transition-all duration-300 ease-in-out flex flex-col ${
              isCollapsed ? 'w-20' : 'w-64'
          }`}
      >
        {/* Header */}
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          {!isCollapsed ? (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center">
                  <School className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">SchoolHub</div>
                  <div className="text-xs text-gray-500">Admin Portal</div>
                </div>
              </div>
          ) : (
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 flex items-center justify-center mx-auto">
                <School className="w-6 h-6 text-white" />
              </div>
          )}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
                <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                      onClick={() => onNavigate(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                          isActive
                              ? 'bg-gradient-to-r from-sky-50 to-emerald-50 text-sky-600 shadow-sm border border-sky-100'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } ${isCollapsed ? 'justify-center' : ''}`}
                  >
                    <Icon
                        className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                            isActive ? 'text-sky-500 drop-shadow-sm' : 'text-gray-400 group-hover:text-gray-600'
                        }`}
                    />
                    {!isCollapsed && (
                        <span className={`font-medium ${isActive ? 'text-sky-700' : 'text-gray-700'}`}>
                    {item.label}
                  </span>
                    )}
                  </button>

                  {/* Tooltip for collapsed state */}
                  {isCollapsed && hoveredItem === item.id && (
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap">
                        {getTooltipContent(item)}
                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                      </div>
                  )}
                </div>
            );
          })}
        </nav>

        {/* Footer - Collapse Button */}
        <div className="p-4 border-t border-gray-200">
          <button
              onClick={onToggleCollapse}
              onMouseEnter={() => setHoveredItem('collapse')}
              onMouseLeave={() => setHoveredItem(null)}
              className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all group ${
                  isCollapsed ? 'justify-center' : ''
              }`}
          >
            {isCollapsed ? (
                <>
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:scale-110" />
                  {hoveredItem === 'collapse' && (
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 whitespace-nowrap">
                        Expand
                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                      </div>
                  )}
                </>
            ) : (
                <>
                  <ChevronLeft className="w-5 h-5 transition-transform group-hover:scale-110" />
                  <span className="font-medium text-gray-700">Collapse</span>
                </>
            )}
          </button>
        </div>
      </div>
  );
}