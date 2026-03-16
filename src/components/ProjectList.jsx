import React from 'react';

function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <img src={project.img} alt={`Project ${project.id}`} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
