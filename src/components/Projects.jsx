import React from 'react';
import projectData from '../data/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundColor: 'var(--color-bg-section)',
        color: 'var(--color-text-darkBg)',
      }}
    >
      <div className="max-w-5xl mx-auto py-16">
        <h2
          className="text-3xl md:text-5xl font-bold mb-10 text-center"
          style={{ color: 'var(--color-primary)' }}
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;