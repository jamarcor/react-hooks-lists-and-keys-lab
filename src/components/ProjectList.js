import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const renderItem = projects.map(({name, about, id, technologies}) => {
    return <ProjectItem key={id} name={name} about={about} id={id} technologies={technologies}/>
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderItem}</div>
    </div>
  );
}

export default ProjectList;
