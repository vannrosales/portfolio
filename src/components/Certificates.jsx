const Certificates = () => {
  const certData = [
    {
      title: "Research Published Certificate",
      issuer: "IJRISS",
      year: "2025",
      image: "/assets/img/research-published.png",  
    },
    {
      title: "Python Essential Certification",
      issuer: "Cisco Networking Academy",
      year: "2022",
      image: "/assets/img/python-essential.png",
      verified: true,
    },
    {
      title: "Best In Thesis Certificate",
      issuer: "EVSU College of Engineering",
      year: "2025",
      image: "/assets/img/best-in-thesis.png",
      verified: true,
    },
    {
      title: "Cum Laude Certificate",
      issuer: "Eastern Visayas State University",
      year: "2025",
      image: "/assets/img/cumlaude-cert.png",
      verified: true,
    },
    {
      title: "Dabest Certificate",
      issuer: "National DABEST",
      year: "2024",
      image: "/assets/img/dabest-cert.png",
      verified: true,
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in zoom-in-95 duration-300">
      {certData.map((cert, index) => (
        <div key={index} className="flex flex-col group">
          {/* Certificate Image Container */}
          <div className="relative border-4 border-black bg-gray-800 aspect-[4/3] overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all group-hover:-translate-y-1">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-full h-full object-cover rendering-pixelated group-hover:scale-105 transition-transform duration-500"
            />
            {/* Glossy Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
          </div>

          {/* Certificate Info */}
          <div className="mt-4 space-y-2">
            <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-tight">
              {cert.title}
            </h3>
            <p className="text-gray-400 text-xs uppercase tracking-widest">
              Certificates
            </p>

            {/* Badges - Styled like your reference image */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="flex items-center gap-1 bg-[#222] border border-gray-600 text-[10px] px-2 py-0.5 rounded-sm text-yellow-400 font-bold">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                OFFICIAL PDF
              </span>
              
              {cert.verified && (
                <span className="flex items-center gap-1 bg-[#222] border border-gray-600 text-[10px] px-2 py-0.5 rounded-sm text-gray-300 font-bold">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  VERIFIED
                </span>
              )}

              <span className="flex items-center gap-1 bg-[#222] border border-gray-600 text-[10px] px-2 py-0.5 rounded-sm text-gray-300 font-bold">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                {cert.year}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;