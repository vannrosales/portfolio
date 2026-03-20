import { useState } from 'react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % project.images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal Box */}
      <div className="relative bg-white border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200 text-black p-6 md:p-10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white border-4 border-black px-3 py-1 font-bold hover:bg-red-400 active:translate-y-1"
        >
          X
        </button>

        <h2 className="text-3xl font-bold uppercase underline decoration-blue-500 decoration-4 underline-offset-8 mb-8">
          Quest: {project.title}
        </h2>

        {/* Image Slider Section */}
        <div className="relative border-4 border-black bg-gray-900 aspect-video mb-8 group">
          <img 
            src={project.images[currentImg]} 
            className="w-full h-full object-contain rendering-pixelated"
            alt="Project Slide"
          />
          
          {/* Slider Controls */}
          {project.images.length > 1 && (
            <>
              <button onClick={prevImg} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-4 border-black p-2 font-bold hover:bg-yellow-400">{'<'}</button>
              <button onClick={nextImg} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-4 border-black p-2 font-bold hover:bg-yellow-400">{'>'}</button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, i) => (
                  <div key={i} className={`w-3 h-3 border-2 border-black ${i === currentImg ? 'bg-yellow-400' : 'bg-white'}`}></div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Detailed Description */}
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-8 border-blue-600 p-4 font-bold text-sm leading-relaxed">
            <span className="text-blue-600">[LOG]:</span> {project.fullDescription}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-4 border-black p-4 bg-gray-50">
              <h4 className="font-bold uppercase text-xs text-gray-400 mb-2">Loot (Stack)</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="border-2 border-black bg-white px-2 py-1 text-[10px] font-bold">+{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="border-4 border-black p-4 bg-gray-50 flex items-center justify-center">
              <a href={project.link} target="_blank" className="bg-green-500 text-white border-4 border-black px-6 py-3 font-bold uppercase hover:bg-green-400 shadow-[4px_4px_0px_0px_black] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                Open World Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;