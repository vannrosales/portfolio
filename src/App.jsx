import { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('projects');
  const handleTabChange = (tab) => {
    if (tab === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {   
      setActiveTab(tab);     
      
      const element = document.getElementById('categories');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 10);
      }
    }
  };

  const projects = [
  { 
    title: "EVSU: iESMS - Integrated Extension Services Management System", 
    fullDescription: "A comprehensive management tool designed for Eastern Visayas State University to digitize and monitor extension services. It features automated tracking of community programs, real-time reporting for university faculty, and advanced data analytics to identify and visualize the specific individuals and stakeholders involved in every extension service conducted.",
    tags: ["PHP (Vanilla)", "MySQL", "WebSockets","ApexCharts.js"], 
    images: [
      "/assets/img/iesms/iesms-1.jpg",
      "/assets/img/iesms/iesms-2.png",
      "/assets/img/iesms/iesms-3.png",
      "/assets/img/iesms/iesms-4.png",
      "/assets/img/iesms/iesms-5.png",
    ],
    // link: "https://github.com"
  },
  {
    title: "EVSU: Dean’s Office System",
    fullDescription: "A web-based system designed to streamline the document processing and scheduling tasks of the Dean’s Office at Eastern Visayas State University. It features a user-friendly interface for managing appointments, tracking document statuses, and facilitating communication between students and faculty.",
    tags: ["CodeIgniter 4", "MySQL", "Tailwind CSS"],
    images: [
      "/assets/img/deans-office-system/deans-office-1.jpg",
      // "src/assets/img/deans-office/deans-office-2.png",
      // "src/assets/img/deans-office/deans-office-3.png",
    ],
    // link: "https://github.com"
  },
  {
    title: "Vann Birthday App",
    fullDescription: "A personalized, interactive web application created as a celebratory digital experience. It integrates Firebase for real-time guest interactions, featuring a dynamic gallery and a message board for high-speed engagement.",
    tags: ['Vue.JS', 'Firebase', 'Netlify Deployment'],
    images: [
      "/assets/img/vann-birthday-app/vann-birthday-1.png",
      // "src/assets/img/vann-birthday-app/vann-birthday-2.png",
      // "src/assets/img/vann-birthday-app/vann-birthday-3.png",
    ],
    link : "https://vann-birthday-app.netlify.app/"
  },
  {
    title: "Sip Mobile Bar",
    fullDescription: "A sleek, mobile-responsive booking and menu showcase for a mobile bar service. Utilizing Vue.js and Supabase, it features real-time availability updates and an inquiry system for event catering.",
    tags: ['Vue.JS', 'Supabase PostgreSQL', 'Netlify Deployment'],
    images: [
      "/assets/img/sip-mobile-bar/sip-mobile-bar-1.png",
      // "src/assets/img/sip-mobile-bar/sip-mobile-bar-2.png",
      // "src/assets/img/sip-mobile-bar/sip-mobile-bar-3.png",
    ],
    link : "https://sip-mobile-bar-app.netlify.app/"
  },
  {
    title: "StoryStream : Anawahay National Highschool",
    fullDescription: "An interactive digital publication platform for Anawahay National Highschool. Built with the Luma Framework, it allows students and teachers to publish news, literary works, and announcements in a modern, streamlined blog-style format.",
    tags: ['Luma Framework', 'MySQL Database','Hostinger Deployment'],
    images: [
      "/assets/img/story-stream/story-stream.jpg",
      // "src/assets/img/sip-mobile-bar/sip-mobile-bar-2.png",
      // "src/assets/img/sip-mobile-bar/sip-mobile-bar-3.png",
    ],
    link : "https://stroystream.online/"
  },
  {
    title: "Amo Na: Grocery Tracker App with Budgeting",
    fullDescription: `Amo Na is a modern, Waraynon-inspired grocery tracker designed for the organized Filipino household. Beyond a simple checklist, it blends a premium Green & White aesthetic with local soul, helping you manage your pantry with speed and style. 
    From planning your Guti nga Pamaliton to checking off your list, it’s 100% offline, privacy-focused, and built to make every market trip feel like a mission accomplished.`,
    tags: ['React Native', 'AsyncStorage', 'Expo Deployment'],
    images: [
      "/assets/img/amo-na-app/front.png",
      "/assets/img/amo-na-app/amo-na-1.jpg",
      "/assets/img/amo-na-app/amo-na-2.jpg",
      "/assets/img/amo-na-app/amo-na-3.jpg",
      "/assets/img/amo-na-app/amo-na-4.jpg",
    ],
    link: "https://github.com/vannrosales/amo-na-app"
  }

];

  return (
  <div className="min-h-screen bg-[#333] font-mono text-white pb-20">
    <Navbar 
      activeTab={activeTab} 
      setActiveTab={handleTabChange} 
    />
    
    <Hero />

    <section id="categories" className="max-w-6xl mx-auto mt-8 px-6">
      {/* Tab Buttons */}
      <div   className="flex flex-wrap gap-4 mb-8">
        {['projects', 'certificates', 'resume', 'skills'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-6 py-2 uppercase font-bold border-4 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
              ${activeTab === tab ? 'bg-yellow-400 text-black -translate-y-1' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Category Container */}
      <div 
        className="scroll-mt-24 border-8 border-black bg-[#1a1a1a] p-1 md:p-6 relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
      >
        {/* Dynamic Category Badge */}
        <div className="absolute -top-6 left-6 bg-blue-600 border-4 border-black px-4 py-1 shadow-[4px_4px_0px_0px_black] z-20">
          <h2 className="text-white font-bold uppercase text-xs md:text-sm tracking-widest flex items-center gap-2">
            <span className="animate-pulse">▶</span> 
            Current Data Category Selection: {activeTab ? activeTab : "None"}
          </h2>
        </div>

        {/* Guide Text / Prompt */}
        <div className="mb-8 border-b-2 border-gray-800 pb-4">
          <p className="text-yellow-400 font-bold text-xs uppercase tracking-tighter mb-1">
            [ System Message ]
          </p>
          <h3 className="text-xl md:text-2xl font-black uppercase text-white leading-none">
            Select a data category to view records:
          </h3>
          <p className="text-gray-500 text-[10px] md:text-xs uppercase mt-2 italic">
            {'>'} Accessing encrypted database... please select an inventory slot.
          </p>
        </div>

        {/* Dynamic Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'projects' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Certificates />
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Resume />
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Skills />
            </div>
          )}

          {/* Fallback state if nothing is selected (unlikely with your default) */}
          {!activeTab || !handleTabChange && (
            <div className="flex flex-col items-center justify-center py-20 opacity-20">
              <div className="text-6xl mb-4">📂</div>
              <p className="uppercase font-bold tracking-widest">No Category Selected</p>
            </div>
          )}
        </div>
      </div>
      
    </section>
    <Footer />
  </div>
    
 );

}

export default App;