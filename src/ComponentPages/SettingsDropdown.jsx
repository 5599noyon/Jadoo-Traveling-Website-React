import React, { useState } from 'react';
import {
  User, Settings, BarChart3, Gift, Calendar, Car,
  Bookmark, Heart, Clock, LogOut
} from 'lucide-react';
import { useAuth } from '../Hooks/useAuth';

const SettingsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  // Menu Items with proper click handlers
  const menuItems = [
    { icon: Settings, label: 'Settings & Privacy', onClick: () => console.log("Go to settings") },
    { icon: BarChart3, label: 'Professional Dashboard', onClick: () => console.log("Go to dashboard") },
    { icon: Gift, label: 'Special Offers', onClick: () => console.log("Show offers") },
    { icon: Calendar, label: 'Special Events', onClick: () => console.log("Show events") },
    { icon: Car, label: 'Vehicle Finds', onClick: () => console.log("Show vehicles") },
    { icon: Bookmark, label: 'Saved Booking', onClick: () => console.log("Show saved") },
    { icon: Heart, label: 'Favorite Booking', onClick: () => console.log("Show favorites") },
    { icon: Clock, label: 'Previous Booking', onClick: () => console.log("Show previous bookings") },
    {
      icon: LogOut,
      label: 'Logout',
      isLogout: true,
      onClick: () => logout(), // Properly calls logout
    },
  ];

  const handleItemClick = (item) => {
    item.onClick?.(); // Call the defined action
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
          
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-medium">Shahriar Noyon</p>
                <p className="text-sm text-blue-100"> noyon@email.com </p>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="py-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleItemClick(item)}
                  className={`w-full px-4 py-3 text-left flex items-center space-x-3 hover:bg-gray-50 transition-colors duration-150
                    ${item.isLogout
                      ? 'text-red-600 hover:bg-red-50'
                      : 'text-gray-700'}`}
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

      {/* Overlay (close when clicking outside) */}
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
