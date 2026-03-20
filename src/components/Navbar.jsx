import { useState } from 'react';

const Navbar = ({ activeTab, setActiveTab, onDownload }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'START', id: 'hero' },
    { name: 'CATEGORIES', id: 'categories' }
  ];

  const pixelBorder = "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";

  const handleNavClick = (id) => {
    if (id === 'save') {
      onDownload();
    } else {
      setActiveTab(id); 
    }
    setIsOpen(false); 
  };

  return (
    <nav className="bg-[#212121] border-b-4 border-black font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          
          {/* Pixel Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div 
              onClick={() => setActiveTab('hero')}
              className="bg-yellow-400 border-4 border-black p-2 shadow-[4px_4px_0px_0px_#ca8a04] hover:translate-y-1 transition-all cursor-pointer"
            >
              <span className="text-xl font-bold text-black uppercase tracking-widest">
                VNN
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all uppercase tracking-tighter text-sm font-bold
                  ${activeTab === link.id 
                    ? 'text-yellow-400 -translate-y-1' 
                    : 'text-white hover:text-yellow-400 hover:translate-y-1'}`}
              >
                {activeTab === link.id ? `[ ${link.name} ]` : link.name}
              </button>
            ))}
            
            {/* Hire Hero Button - Can link to email */}
            <a 
              href="mailto:giovannihanzguino@gmail.com"
              className={`bg-blue-500 text-white px-4 py-2 uppercase font-bold hover:translate-y-1 active:shadow-none active:translate-x-1 transition-all ${pixelBorder}`}
            >
              Hire Hero
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`bg-white p-1 ${pixelBorder} active:shadow-none`}
            >
              <div className="w-6 h-1 bg-black mb-1"></div>
              <div className="w-6 h-1 bg-black mb-1"></div>
              <div className="w-6 h-1 bg-black"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#333] border-b-4 border-black p-4 animate-in slide-in-from-top-4">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left text-lg uppercase font-bold
                  ${activeTab === link.id ? 'text-yellow-400' : 'text-white'}`}
              >
                {activeTab === link.id ? `▶ ${link.name}` : `> ${link.name}`}
              </button>
            ))}
            <a 
              href="mailto:giovannihanzguino@gmail.com"
              className={`block w-full text-center bg-blue-500 text-white py-3 uppercase font-bold ${pixelBorder}`}
            >
              Hire Hero
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;