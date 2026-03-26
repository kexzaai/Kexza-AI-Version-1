import React from 'react';

const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[#020205]">
      {/* Primary Light Trails */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/20 blur-[140px] animate-pulse transition-all duration-1000" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-orange-600/20 to-red-600/10 blur-[120px] animate-pulse delay-700 transition-all duration-1000" />
      
      {/* Secondary Flowing Accents */}
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse delay-300" />
      <div className="absolute bottom-[40%] left-[5%] w-[35%] h-[35%] rounded-full bg-pink-500/15 blur-[90px] animate-pulse delay-1000" />

      {/* Surface Noise/Grain Effect (Optional but adds premium feel) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Deep Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
    </div>
  );
};

export default LiquidBackground;
