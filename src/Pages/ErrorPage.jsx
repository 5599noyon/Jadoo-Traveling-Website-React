import { useState, useEffect } from 'react';
import { AlertTriangle, Home, RefreshCw, ArrowLeft } from 'lucide-react';

export default function ErrorPage() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
    const interval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className={`max-w-2xl mx-auto text-center z-10 transform transition-all duration-1000 ${
        isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        
        {/* Error Icon with glitch effect */}
        <div className={`relative mb-8 ${glitchEffect ? 'animate-pulse' : ''}`}>
          <div className="relative">
            <AlertTriangle 
              size={120} 
              className={`mx-auto text-red-400 drop-shadow-2xl transform transition-transform duration-300 hover:scale-110 ${
                glitchEffect ? 'hue-rotate-180' : ''
              }`}
            />
            {glitchEffect && (
              <>
                <AlertTriangle 
                  size={120} 
                  className="absolute top-0 left-1/2 transform-translate-x-1/2 translate-x-1 text-cyan-400 opacity-70"
                />
                <AlertTriangle 
                  size={120} 
                  className="absolute top-0 left-1/2 transform-translate-x-1/2 -translate-x-1 text-red-600 opacity-70"
                />
              </>
            )}
          </div>
        </div>

        {/* Error Code */}
        <div className="mb-6">
          <h1 className={`text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 animate-pulse ${
            glitchEffect ? 'blur-sm' : ''
          }`}>
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">
            The page you're looking for seems to have vanished into the digital void. 
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={handleGoHome}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 active:scale-95"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            Go Back
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={handleRefresh}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 active:scale-95"
          >
            <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
            Try Again
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Additional Help */}
        <div className="text-gray-400 text-sm">
          <p className="mb-2">Need help? Here are some suggestions:</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">Check the URL</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">Clear your cache</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">Contact support</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl animate-bounce"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl animate-bounce delay-1000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/10 rounded-full animate-ping`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}