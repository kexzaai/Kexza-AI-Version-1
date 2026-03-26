import React from 'react';

const LiquidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-black">
      {/* Mesh Gradient Accents inspired by the image */}
      <div className="absolute top-[-10%] left-[-5%] w-[80%] h-[70%] rounded-full bg-gradient-to-br from-purple-600/40 via-blue-600/20 to-transparent blur-[120px] animate-pulse transition-all duration-1000" />
      <div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-orange-500/30 via-red-500/10 to-transparent blur-[140px] animate-pulse delay-700 transition-all duration-1000" />
      
      {/* Dynamic Glows */}
      <div className="absolute bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[100px] animate-pulse delay-300" />
      <div className="absolute top-[40%] right-[30%] w-[35%] h-[35%] rounded-full bg-pink-500/15 blur-[90px] animate-pulse delay-1000" />

      {/* Surface Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default LiquidBackground;
