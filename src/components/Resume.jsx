const Resume = () => {
  return (
    <div className="bg-white text-black p-6 md:p-10 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-200">
      
      {/* Header Section */}
      <div className="border-b-8 border-double border-black pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-bold uppercase tracking-tighter underline decoration-blue-500 decoration-4">
            Character Scroll
          </h2>
          <p className="text-xs text-gray-500 mt-1 uppercase font-bold italic">
            Class: Full-Stack Developer | LVL: 2026
          </p>
        </div>
        <a 
          href="/Guino - Resume.pdf" 
          download="GiovanniHanzGuino-Resume.pdf"
          className="inline-block bg-blue-600 text-white px-6 py-2 text-xs font-bold uppercase border-4 border-black shadow-[4px_4px_0px_0px_black] hover:bg-blue-500 hover:translate-y-1 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all no-underline"
        >
          Export Save (.PDF)
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: EDUCATION (The Academy) */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold uppercase bg-black text-white px-3 py-1 inline-block mb-4">
            The Academy (Education)
          </h3>
          
          <div className="relative border-l-4 border-black pl-6 space-y-8">
            {/* BSIT */}
            <div className="relative">
              <div className="absolute -left-[30px] top-1 w-4 h-4 bg-yellow-400 border-2 border-black rotate-45"></div>
              <h4 className="font-bold text-lg leading-none uppercase">BS Information Technology</h4>
              <p className="text-[10px] font-bold text-blue-600 mb-2">Eastern Visayas State University | 2024 — 2025</p>
              <div className="bg-yellow-50 border-2 border-black p-2 inline-block">
                <p className="text-[10px] font-bold uppercase text-yellow-700">🏆 Achievement: Graduated Cum Laude</p>
              </div>
            </div>

            {/* Senior High */}
            <div className="relative">
              <div className="absolute -left-[30px] top-1 w-4 h-4 bg-gray-300 border-2 border-black rotate-45"></div>
              <h4 className="font-bold text-lg leading-none uppercase">Senior High School</h4>
              <p className="text-[10px] font-bold text-blue-600 mb-1">ACLC College of Tacloban | 2020 — 2021</p>
              <p className="text-xs text-gray-600">TVL Programming Strand (Java & Software Fundamentals)</p>
              <div className="bg-yellow-50 border-2 border-black p-2 inline-block">
                <p className="text-[10px] font-bold uppercase text-yellow-700">🏆 Achievement: with Honors</p>
              </div>
            </div>
          </div>
        </section>

        {/* RIGHT COLUMN: EXPERIENCE (Legendary Raids) */}
        <section className="space-y-6">
          <h3 className="text-xl font-bold uppercase bg-yellow-400 text-black px-3 py-1 inline-block mb-4">
            Academic Projects
          </h3>

          <div className="space-y-6">
            {/* EVSU IESMS */}
            <div className="border-4 border-black p-4 bg-gray-50 hover:bg-blue-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-sm">EVSU iESMS</h4>
                <span className="text-[9px] bg-black text-white px-2 py-0.5 font-bold">2023-24</span>
              </div>
              <p className="text-[10px] leading-relaxed text-gray-700">
                Integrated workflows for 6 campuses. Built a unified database architecture to synchronize scheduling and reporting, creating a single-point-of-truth dashboard.
              </p>
            </div>

            {/* Dean's Office */}
            <div className="border-4 border-black p-4 bg-gray-50 hover:bg-green-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold uppercase text-sm">Dean’s Office System</h4>
                <span className="text-[9px] bg-black text-white px-2 py-0.5 font-bold">2023-24</span>
              </div>
              <p className="text-[10px] leading-relaxed text-gray-700">
                Streamlined document processing and scheduling. Enhanced data tracking for office communication.
              </p>
            </div>

            {/* Library System */}
            <div className="border-4 border-black p-4 bg-gray-50 hover:bg-purple-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold uppercase text-sm">COE Library System</h4>
                <span className="text-[9px] bg-black text-white px-2 py-0.5 font-bold">2023-24</span>
              </div>
              <p className="text-[10px] leading-relaxed text-gray-700">
                Automated cataloging and borrowing for the College of Engineering library.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-xl font-bold uppercase bg-yellow-400 text-black px-3 py-1 inline-block mb-4">
            Freelance Projects
          </h3>

          <div className="space-y-6">
            {/* Sip Mobile Bar */}
            <div className="border-4 border-black p-4 bg-gray-50 hover:bg-blue-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold uppercase text-sm">Sip Mobile Bar</h4>
                <span className="text-[9px] bg-black text-white px-2 py-0.5 font-bold">2024-25</span>
                
              </div>
              <p className="text-[10px] leading-relaxed text-gray-700">
                Integrated workflows for 6 campuses. Built a unified database architecture to synchronize scheduling and reporting, creating a single-point-of-truth dashboard.
              </p>
            </div>

            <div className="border-4 border-black p-4 bg-gray-50 hover:bg-blue-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold uppercase text-xs">StoryStream : ANHS</h4>
                <span className="text-[9px] bg-black text-white px-2 py-0.5 font-bold">2024-25</span>
              </div>
              <p className="text-[10px] leading-relaxed text-gray-700">
                An interactive digital publication platform for Anawahay National Highschool. Built with the Luma Framework, it allows students and teachers to publish news, literary works, and announcements in a modern, streamlined blog-style format.
              </p>
            </div>


            
          </div>
        </section>

      </div>

      {/* Footer Stat Block */}
      <div className="mt-12 pt-6 border-t-4 border-black grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Commits', val: '1.2k' },
          { label: 'Bugs Slayed', val: '404' },
          { label: 'Coffee/hr', val: '2.5' },
          { label: 'Persistence', val: '99' }
        ].map(stat => (
          <div key={stat.label} className="text-center">
            <p className="text-[9px] uppercase text-gray-400">{stat.label}</p>
            <p className="font-bold text-lg">{stat.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;