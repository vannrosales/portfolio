const pixelBorder = "border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]";

function Hero() {
  return (
    <main className="max-w-6xl mx-auto mt-12 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" >
        
        {/* LEFT SIDE: Information */}
        <div className={`lg:col-span-2 bg-white text-black p-8 ${pixelBorder} relative overflow-hidden`}>
          {/* Animated "Scanline" overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]"></div>

          <h1 className="text-3xl font-bold uppercase mb-6 flex items-center gap-2">
            <span className="text-blue-600 underline text-sm md:text-3xl">Quest:</span> 
            Develop Innovation
            <span className="w-3 h-8 bg-black animate-pixel-blink inline-block ml-1"></span>
          </h1>
          
          <div className="space-y-6 leading-relaxed relative z-10">
            {/* Intro Text */}
            <div className="text-lg">
              <p className="hover:text-blue-600 transition-colors cursor-default">
                {'>'} Welcome, traveler. I am <span className="font-bold text-blue-700">Giovanni Hanz Guino</span>.
              </p>
              <p className="mt-2 text-gray-700 text-sm md:text-base italic">
                A Full-Stack Developer and BSIT graduate from <span className="font-bold">EVSU - Tacloban City</span>. 
                I turn complex logic into seamless digital experiences.
              </p>
            </div>
            
            {/* Status/Rank Box */}
            <div className="bg-yellow-100 p-4 border-l-8 border-yellow-500 hover:bg-yellow-200 transition-all duration-300">
              <h3 className="font-bold uppercase mb-1 text-yellow-800 text-xs tracking-widest flex items-center gap-2">
                🏆 Current Rank:
              </h3>
              <p className="font-bold text-lg">CUM LAUDE GRADUATE</p>
              <p className="text-[10px] uppercase text-yellow-700">Class of 2025 | Academic Excellence Achievement</p>
            </div>

            {/* NEW: Specializations Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="border-2 border-black p-3 bg-blue-50">
                <p className="text-[10px] font-bold text-blue-600 uppercase">Skill 01</p>
                <p className="font-bold text-xs uppercase">Web App Dev</p>
              </div>
              <div className="border-2 border-black p-3 bg-purple-50">
                <p className="text-[10px] font-bold text-purple-600 uppercase">Skill 02</p>
                <p className="font-bold text-xs uppercase">UI/UX Web Design</p>
              </div>
              <div className="border-2 border-black p-3 bg-green-50">
                <p className="text-[10px] font-bold text-green-600 uppercase">Skill 03</p>
                <p className="font-bold text-xs uppercase">Technical Support</p>
              </div>
            </div>

            {/* Mission Objective */}
            <div className="bg-gray-100 p-4 border-l-8 border-blue-500 hover:bg-blue-50 transition-all duration-300">
              <h3 className="font-bold uppercase mb-2 text-blue-700 text-xs tracking-widest">Mission Objective:</h3>
              <p className="text-sm">Deploy high-quality web apps, maintain robust technical systems, and defeat the "Bugs" world boss.</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-50 border-2 border-black hover:-translate-y-1 transition-transform relative overflow-hidden">
                <h4 className="font-bold text-[10px] uppercase text-gray-500">Main Weapon</h4>
                <p className="font-bold">PHP / Laravel</p>
                <div className="absolute right-[-10px] bottom-[-10px] opacity-10 text-4xl">🐘</div>
              </div>
              <div className="p-4 bg-gray-50 border-2 border-black hover:-translate-y-1 transition-transform relative overflow-hidden">
                <h4 className="font-bold text-[10px] uppercase text-gray-500">Sub Weapon</h4>
                <p className="font-bold">React & Vue</p>
                <div className="absolute right-[-10px] bottom-[-10px] opacity-10 text-4xl">⚛️</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <button className={`bg-green-500 text-white px-6 py-3 uppercase font-bold hover:bg-green-400 transition-all ${pixelBorder} active:translate-x-1 active:translate-y-1 active:shadow-none text-xs md:text-sm`}>
              [ Accept Project ]
            </button>
            <button className={`bg-white text-black px-6 py-3 uppercase font-bold hover:bg-gray-100 transition-all ${pixelBorder} active:translate-x-1 active:translate-y-1 active:shadow-none text-xs md:text-sm`}>
              [ View Inventory ]
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Profile */}
        <div className="flex flex-col gap-6">
          {/* Floating Hero Portrait */}
          <div className={`bg-gray-200 p-2 ${pixelBorder} animate-pixel-float`}>
            <div className="bg-black aspect-square flex items-center justify-center overflow-hidden">
              <img 
                src="/assets/img/profile-pic.png"
                alt="Hero Portrait" 
                className="w-full h-full object-cover rendering-pixelated"
              />
            </div>
            <div className="bg-white text-black p-4 border-t-4 border-black text-center">
              <p className="font-bold text-lg uppercase tracking-tighter">Giovanni Hanz Guino</p>
              <p className="text-[10px] text-gray-500 italic uppercase">Lvl 24 Web Wizard</p>
            </div>
          </div>

          {/* Social & Contact Box */}
          <div className={`bg-[#212121] p-6 ${pixelBorder} border-white`}>
            <h3 className="text-yellow-400 font-bold uppercase mb-4 border-b border-yellow-400 pb-2 flex justify-between items-center">
              Contact 
              <span className="text-[8px] animate-pulse text-green-400">● Online</span>
            </h3>
            
            <div className="space-y-3">
              <a href="mailto:giovannihanzguino@gmail.com" className="group flex items-center gap-3 bg-gray-800 p-2 border-2 border-black hover:bg-white hover:text-black transition-all">
                <span className="text-blue-400 group-hover:text-blue-600">✉</span>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold">Email</span>
                  <span className="text-[10px] opacity-70">Send a Scroll</span>
                </div>
              </a>

              <a href="https://github.com/vannrosales" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-gray-800 p-2 border-2 border-black hover:bg-gray-100 hover:text-black transition-all">
                <span className="text-white group-hover:text-black">🐙</span>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold">GitHub</span>
                  <span className="text-[10px] opacity-70">Code Armory</span>
                </div>
              </a>

              <a href="https://www.facebook.com/nnav.08" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-gray-800 p-2 border-2 border-black hover:bg-blue-600 hover:text-white transition-all">
                <span className="text-blue-500 group-hover:text-white font-bold">f</span>
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase font-bold">Facebook</span>
                  <span className="text-[10px] opacity-70">Social Hub</span>
                </div>
              </a>
            </div>

            <p className="mt-4 text-[8px] text-center text-gray-500 uppercase italic">
              -- Response time: 1-2 Business Days --
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;