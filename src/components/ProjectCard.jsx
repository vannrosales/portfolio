import { useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectCard = (project) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false); 
  
  const pixelBorder = "border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";

  const handleOpenQuest = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsModalOpen(true);
      setIsClicked(false); 
    }, 150); 
  };

  return (
    <>
      <div 
        onClick={handleOpenQuest}
        className={`group bg-white p-4 ${pixelBorder} 
          hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
          transition-all cursor-pointer flex flex-col h-full text-black
          ${isClicked ? 'scale-110 shadow-none border-blue-500' : ''} /* Click animation styles */
        `}
      >
        <div className="bg-gray-200 border-4 border-black aspect-video mb-4 overflow-hidden">
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover rendering-pixelated group-hover:scale-105 transition-transform" />
        </div>
        <h3 className="font-bold uppercase text-lg mb-2 truncate">
          {'>'} {project.title}
        </h3>
        <p className="text-gray-600 text-[10px] line-clamp-2 italic">
          Click to view quest details...
        </p>
      </div>

      {isModalOpen && <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default ProjectCard;