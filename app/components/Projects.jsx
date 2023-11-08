import React from 'react';
import Cards from './Cards';


const projectsData = [
  {
    title: "SuperQuiz",
    description: "AI Generated Custom Multiplayer Quizzes",
    id: 1,
    image: "/images/superQuiz.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "AudioSpark",
    description: "Transcribe audio files and create PowerPoint presentations with ease.",
    image: "/images/audioSpark.png",
    tag: ["All", "Web"],
    gitUrl:"/"
  },
  {
    id: 3,
    title: "Polished Profiles",
    description: "Creates a tailored resume and cover letter that specifically highlights your relevant experience and qualifications for that job.",
    image: "/images/polishedProfile.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Adventure Game",
    description: "Play an Adventure Game",
    image: "/images/superQuiz.png",
    tag: ["All", "Mobile"],
  },

];
function Projects() {
  return (
<>
<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
<div> {projectsData.map((project) => <Cards key={project.id} title={project.title} description={project.description} imgUrl = {project.image} />)}
</div>
</>
   
  )
}

export default Projects
