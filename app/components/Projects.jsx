import React from 'react';
import Cards from './Cards';


const projectsData = [
  {
    id: 1,
    title: "SuperQuiz",
    description: "Project 1 description",
    image: "/images/superQuiz.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "AudioSpark",
    description: "Project 2 description",
    image: "/images/audioSpark.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Polished Profiles",
    description: "Project 3 description",
    image: "/images/polishedProfile.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Adventure Game",
    description: "Project 4 description",
    image: "/images/superQuiz.png",
    tag: ["All", "Mobile"],
  },

];
function Projects() {
  return (
<>
<h2>Projects</h2>
<div> {projectsData.map((project) => <Cards key={project.id} title={project.title} description={project.description} imgUrl = {project.image} />)}
</div>
</>
   
  )
}

export default Projects
