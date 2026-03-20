const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t-8 border-black bg-[#212121] text-white font-mono relative overflow-hidden">
      {/* Decorative Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Column 1: Character Stats */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 text-black font-bold px-2 py-1 border-2 border-black shadow-[2px_2px_0px_0px_white]">
                LVL 24
              </div>
              <span className="font-bold uppercase tracking-widest text-sm">Giovanni Hanz Guino</span>
            </div>
            
            {/* Experience Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400">
                <span>XP Progress</span>
                <span>99% to Next Level</span>
              </div>
              <div className="w-full h-4 bg-gray-800 border-2 border-black p-0.5">
                <div className="h-full bg-green-500 w-[99%] animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Column 2: Logo & Copyright */}
          <div className="text-center flex flex-col items-center">
            <div className="bg-white text-black border-4 border-black p-2 mb-4 inline-block hover:rotate-3 transition-transform cursor-help">
              <span className="font-black text-2xl tracking-tighter uppercase">VNN</span>
            </div>
            <p className="text-[10px] uppercase text-gray-500 tracking-widest">
              © {currentYear} All Rights Reserved
            </p>
            <p className="text-[10px] uppercase text-blue-400 mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>

          {/* Column 3: System Status */}
          <div className="bg-black border-2 border-gray-700 p-4 shadow-[4px_4px_0px_0px_#333]">
            <h4 className="text-yellow-400 text-[10px] font-bold uppercase mb-2 border-b border-gray-800 pb-1">
              System Status
            </h4>
            <div className="space-y-1">
              <div className="flex justify-between text-[9px] uppercase">
                <span className="text-gray-400">Connection:</span>
                <span className="text-green-500">Secure</span>
              </div>
              <div className="flex justify-between text-[9px] uppercase">
                <span className="text-gray-400">Location:</span>
                <span className="text-white">Tacloban City, PH</span>
              </div>
              <div className="flex justify-between text-[9px] uppercase">
                <span className="text-gray-400">Server:</span>
                <span className="text-white">Vercel / Netlify</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-[9px] text-gray-600 uppercase italic">
            -- "The best way to predict the future is to develop it." --
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;