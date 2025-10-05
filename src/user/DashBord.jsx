import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, Eye, Search, Bell, ChevronDown, ArrowUpRight, ArrowDownRight, Sparkles, Zap, Target, Activity, MoreVertical } from 'lucide-react';

const DashBord = () => {
  const [timeFilter, setTimeFilter] = useState('daily');
  const [hoveredStat, setHoveredStat] = useState(null);
  
  const stats = [
    { 
      title: 'Total Reach', 
      value: '150K', 
      change: '+12.5%',
      trend: 'up',
      icon: Eye, 
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      bg: 'bg-gradient-to-br from-violet-50 to-purple-50',
    },
    { 
      title: 'Paid Reach', 
      value: '115K', 
      change: '+8.2%',
      trend: 'up',
      icon: Zap, 
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      bg: 'bg-gradient-to-br from-cyan-50 to-blue-50',
    },
    { 
      title: 'Organic Reach', 
      value: '35K', 
      change: '+15.3%',
      trend: 'up',
      icon: Target, 
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      bg: 'bg-gradient-to-br from-pink-50 to-rose-50',
    },
    { 
      title: 'Engagement', 
      value: '4.8%', 
      change: '-2.1%',
      trend: 'down',
      icon: Activity, 
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
    },
  ];

  const channels = [
    { name: 'Facebook', visits: '124K', growth: '+12%', percent: 85, gradient: 'from-blue-500 to-blue-600', bg: 'from-blue-50 to-blue-100', icon: '📘' },
    { name: 'Instagram', visits: '124K', growth: '+18%', percent: 92, gradient: 'from-pink-500 via-purple-500 to-indigo-500', bg: 'from-pink-50 to-purple-50', icon: '📷' },
    { name: 'LinkedIn', visits: '98K', growth: '+8%', percent: 68, gradient: 'from-blue-600 to-blue-700', bg: 'from-blue-50 to-indigo-50', icon: '💼' },
    { name: 'YouTube', visits: '156K', growth: '+25%', percent: 95, gradient: 'from-red-500 to-red-600', bg: 'from-red-50 to-orange-50', icon: '▶️' },
  ];

  const demographics = [
    { age: '< 15 years', count: '21K', percent: 27, color: 'from-pink-500 to-rose-500' },
    { age: '20 - 35 years', count: '64K', percent: 40, color: 'from-blue-500 to-indigo-500' },
    { age: '40 - 50 years', count: '18K', percent: 16, color: 'from-emerald-500 to-teal-500' },
    { age: '> 50 years', count: '5K', percent: 8, color: 'from-purple-500 to-violet-500' },
  ];

  const monthlyData = [
    { month: 'Jan', reach: 80, paid: 60, organic: 20 },
    { month: 'Feb', reach: 95, paid: 70, organic: 45 },
    { month: 'Mar', reach: 65, paid: 75, organic: 40 },
    { month: 'Apr', reach: 110, paid: 50, organic: 65 },
    { month: 'May', reach: 75, paid: 65, organic: 85 },
    { month: 'Jun', reach: 95, paid: 85, organic: 65 },
    { month: 'Jul', reach: 170, paid: 95, organic: 60 },
    { month: 'Aug', reach: 140, paid: 95, organic: 40 },
    { month: 'Sep', reach: 115, paid: 100, organic: 50 },
    { month: 'Oct', reach: 125, paid: 105, organic: 70 },
    { month: 'Nov', reach: 155, paid: 115, organic: 60 },
    { month: 'Dec', reach: 150, paid: 115, organic: 85 },
  ];

  const maxReach = Math.max(...monthlyData.map(d => d.reach));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden md:pt-[140px]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Clean Navigation */}
      <nav className="relative bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-200">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                  Dashboard
                </h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative max-w-7xl mx-auto p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredStat(idx)}
              onMouseLeave={() => setHoveredStat(null)}
              className={`group relative ${stat.bg} rounded-3xl p-6 hover:shadow-2xl hover:shadow-purple-200/50 hover:scale-105 transition-all duration-500 border border-white/50 overflow-hidden cursor-pointer`}
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-xl ${hoveredStat === idx ? 'shadow-purple-400/50 scale-110' : ''} transition-all duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold ${
                    stat.trend === 'up' 
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  } shadow-sm`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.change}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2 font-medium">{stat.title}</p>
                <p className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-2">
                Performance Analytics
              </h2>
              <p className="text-gray-500 text-sm">Real-time metrics and insights</p>
            </div>
            <div className="flex gap-2 bg-gray-100 rounded-2xl p-1.5 border border-gray-200">
              {['Daily', 'Weekly', 'Monthly'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter.toLowerCase())}
                  className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                    timeFilter === filter.toLowerCase()
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-300/50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-6 mb-8 flex-wrap">
            {[
              { label: 'Total Reach', value: '185K', color: 'from-violet-500 to-purple-500' },
              { label: 'Paid Reach', value: '133K', color: 'from-cyan-500 to-blue-500' },
              { label: 'Organic', value: '85K', color: 'from-pink-500 to-rose-500' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}></div>
                <span className="text-sm text-gray-600 font-medium">{item.label}</span>
                <span className="text-sm font-bold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="relative h-80">
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-xs text-gray-400 font-semibold">
              <span>200k</span>
              <span>150k</span>
              <span>100k</span>
              <span>50k</span>
              <span>0</span>
            </div>

            <div className="ml-12 h-full relative">
              <svg className="w-full h-full" style={{ height: '300px' }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={i}
                    x1="0"
                    y1={`${i * 25}%`}
                    x2="100%"
                    y2={`${i * 25}%`}
                    stroke="#f1f5f9"
                    strokeWidth="1"
                  />
                ))}

                <defs>
                  <linearGradient id="purpleGradientWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="lineGradientWhite" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#a855f7" floodOpacity="0.3"/>
                  </filter>
                </defs>

                <polyline
                  fill="url(#purpleGradientWhite)"
                  stroke="none"
                  points={`0,100 ${monthlyData.map((d, i) => 
                    `${(i / (monthlyData.length - 1)) * 100},${100 - (d.reach / maxReach) * 80}`
                  ).join(' ')} 100,100`}
                />

                <polyline
                  fill="none"
                  stroke="url(#lineGradientWhite)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#shadow)"
                  points={monthlyData.map((d, i) => 
                    `${(i / (monthlyData.length - 1)) * 100},${100 - (d.reach / maxReach) * 80}`
                  ).join(' ')}
                />

                <polyline
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7"
                  points={monthlyData.map((d, i) => 
                    `${(i / (monthlyData.length - 1)) * 100},${100 - (d.paid / maxReach) * 80}`
                  ).join(' ')}
                />

                <polyline
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.7"
                  points={monthlyData.map((d, i) => 
                    `${(i / (monthlyData.length - 1)) * 100},${100 - (d.organic / maxReach) * 80}`
                  ).join(' ')}
                />

                {monthlyData.map((d, i) => (
                  <g key={i}>
                    <circle
                      cx={`${(i / (monthlyData.length - 1)) * 100}%`}
                      cy={`${100 - (d.reach / maxReach) * 80}%`}
                      r="6"
                      fill="white"
                      stroke="url(#lineGradientWhite)"
                      strokeWidth="3"
                      className="hover:r-9 transition-all cursor-pointer"
                      filter="url(#shadow)"
                    />
                  </g>
                ))}
              </svg>

              <div className="flex justify-between text-xs text-gray-500 mt-4 font-semibold">
                {monthlyData.map((d) => (
                  <span key={d.month}>{d.month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Demographics */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                  Demographics
                </h2>
                <p className="text-gray-500 text-sm">Audience insights</p>
              </div>
              <button className="text-sm font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors">
                View More
                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <div className="relative w-44 h-44 mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <defs>
                      <linearGradient id="maleGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                      <linearGradient id="femaleGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#f43f5e" />
                      </linearGradient>
                      <linearGradient id="otherGradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                      <filter id="pieShadow">
                        <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.2"/>
                      </filter>
                    </defs>
                    <circle cx="88" cy="88" r="70" fill="none" stroke="#f1f5f9" strokeWidth="22" />
                    <circle cx="88" cy="88" r="70" fill="none" stroke="url(#maleGradWhite)" strokeWidth="22" strokeDasharray="299 440" strokeLinecap="round" filter="url(#pieShadow)" />
                    <circle cx="88" cy="88" r="70" fill="none" stroke="url(#femaleGradWhite)" strokeWidth="22" strokeDasharray="88 440" strokeDashoffset="-299" strokeLinecap="round" filter="url(#pieShadow)" />
                    <circle cx="88" cy="88" r="70" fill="none" stroke="url(#otherGradWhite)" strokeWidth="22" strokeDasharray="53 440" strokeDashoffset="-387" strokeLinecap="round" filter="url(#pieShadow)" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold text-gray-500">Total</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">100%</span>
                  </div>
                </div>
                <div className="space-y-3 w-full">
                  {[
                    { label: 'Male', percent: '68%', gradient: 'from-violet-500 to-indigo-500' },
                    { label: 'Female', percent: '20%', gradient: 'from-pink-500 to-rose-500' },
                    { label: 'Other', percent: '12%', gradient: 'from-teal-500 to-emerald-500' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 hover:bg-white hover:shadow-md transition-all">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient} shadow-md`}></div>
                        <span className="text-sm text-gray-700 font-medium">{item.label}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-900">{item.percent}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 mb-6 text-lg">Age Groups</h3>
                <div className="space-y-5">
                  {demographics.map((demo, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 font-medium">{demo.age}</span>
                        <div className="flex gap-6">
                          <span className="font-bold text-gray-900">{demo.count}</span>
                          <span className="text-gray-500 w-10 text-right font-semibold">{demo.percent}%</span>
                        </div>
                      </div>
                      <div className="h-2.5 bg-gray-100 border border-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${demo.color} rounded-full transition-all duration-700 shadow-lg`} 
                          style={{ width: `${demo.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Channels */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-1">
                  Top Channels
                </h2>
                <p className="text-gray-500 text-sm">Platform performance</p>
              </div>
              <button className="text-sm font-medium text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors">
                View All
                <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              </button>
            </div>

            <div className="space-y-4">
              {channels.map((channel, idx) => (
                <div key={idx} className={`group bg-gradient-to-br ${channel.bg} border border-gray-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-purple-200/50 hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${channel.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {channel.icon}
                        </div>
                        <span className="text-gray-900 font-bold text-lg">{channel.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-900 font-bold text-xl">{channel.visits}</span>
                        <span className="flex items-center gap-1 bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                          <ArrowUpRight className="w-3 h-3" />
                          {channel.growth}
                        </span>
                      </div>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className={`h-full bg-gradient-to-r ${channel.gradient} rounded-full transition-all duration-700 shadow-lg`}
                        style={{ width: `${channel.percent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBord;