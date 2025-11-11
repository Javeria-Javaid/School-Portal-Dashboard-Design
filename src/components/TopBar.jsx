import { Search, Bell, MessageSquare, ChevronDown, LogOut, User, Settings } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useState, useRef, useEffect } from 'react';

export function TopBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Search logic would go here
    console.log('Searching for:', e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      console.log('Performing search for:', searchQuery);
      // Execute search
    }
  };

  const handleNotificationClick = () => {
    console.log('Opening notifications');
    // Notification logic would go here
  };

  const handleMessagesClick = () => {
    console.log('Opening messages');
    // Messages logic would go here
  };

  const handleProfileAction = (action) => {
    console.log('Profile action:', action);
    setIsProfileOpen(false);

    switch (action) {
      case 'profile':
        // Navigate to profile page
        break;
      case 'settings':
        // Navigate to settings
        break;
      case 'logout':
        // Handle logout
        console.log('Logging out...');
        break;
      default:
        break;
    }
  };

  return (
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-6 lg:px-8 py-4">
          {/* Search Bar */}
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  onKeyPress={handleKeyPress}
                  placeholder="Search students, jobs, vendors..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400/20 focus:bg-white transition-all duration-200"
              />
              {searchQuery && (
                  <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    ×
                  </button>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 ml-6">
            {/* Notifications */}
            <button
                onClick={handleNotificationClick}
                className="relative p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <Bell className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-emerald-500 text-white text-xs border-2 border-white shadow-sm">
                3
              </Badge>
            </button>

            {/* Messages */}
            <button
                onClick={handleMessagesClick}
                className="relative p-3 rounded-xl hover:bg-gray-50 transition-colors group"
            >
              <MessageSquare className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-sky-500 text-white text-xs border-2 border-white shadow-sm">
                7
              </Badge>
            </button>

            {/* Separator */}
            <div className="w-px h-8 bg-gray-200 mx-2" />

            {/* Profile Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-xl p-2 transition-all duration-200 group"
              >
                <Avatar className="w-10 h-10 border-2 border-transparent group-hover:border-sky-100 transition-colors">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" />
                  <AvatarFallback className="bg-gradient-to-br from-sky-400 to-emerald-400 text-white">
                    AD
                  </AvatarFallback>
                </Avatar>
                <div className="text-left hidden sm:block">
                  <div className="text-sm font-medium text-gray-900">Admin User</div>
                  <div className="text-xs text-gray-500">Principal</div>
                </div>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="text-sm font-medium text-gray-900">Admin User</div>
                      <div className="text-xs text-gray-500">admin@school.edu</div>
                    </div>

                    <button
                        onClick={() => handleProfileAction('profile')}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <User className="w-4 h-4 text-gray-400" />
                      My Profile
                    </button>

                    <button
                        onClick={() => handleProfileAction('settings')}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <Settings className="w-4 h-4 text-gray-400" />
                      Account Settings
                    </button>

                    <div className="border-t border-gray-100 my-1" />

                    <button
                        onClick={() => handleProfileAction('logout')}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Log Out
                    </button>
                  </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}