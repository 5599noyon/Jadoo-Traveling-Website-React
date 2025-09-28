import React, { useState } from 'react';
import { ChevronDown, User, Settings, Shield, BarChart3, Gift, Calendar, Car, Bookmark, Heart, Clock, LogOut } from 'lucide-react';

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Settings, label: 'Settings & Privacy', action: 'settingsPrivacy' },
    { icon: BarChart3, label: 'Professional Dashboard', action: 'dashboard' },
    { icon: Gift, label: 'Special Offers', action: 'offers' },
    { icon: Calendar, label: 'Special Events', action: 'events' },
    { icon: Car, label: 'Vehicle Finds', action: 'vehicles' },
    { icon: Bookmark, label: 'Saved Booking', action: 'saved' },
    { icon: Heart, label: 'Favorite Booking', action: 'favorites' },
    { icon: Clock, label: 'Previous Booking', action: 'previous' },
    { icon: LogOut, label: 'Logout', action: 'logout', isLogout: true }
  ];

  const handleItemClick = (action, label) => {
    console.log(`Clicked: ${label} (${action})`);
    setIsOpen(false);
    
    // Handle logout differently
    if (action === 'logout') {
      if (window.confirm('Are you sure you want to logout?')) {
        // Add logout logic here
        alert('Logged out successfully!');
      }
      return;
    }
    
    // Handle other actions
    alert(`Navigating to: ${label}`);
  };

  return (
    <div className="relative inline-block text-left ">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-blue-100">john.doe@email.com</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleItemClick(item.action, item.label)}
                  className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors duration-150 ${
                    item.isLogout ? 'text-red-600 hover:bg-red-50' : 'text-gray-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${item.isLogout ? 'text-red-500' : 'text-gray-500'}`} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">Version 1.0.0</p>
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SettingsDropdown;