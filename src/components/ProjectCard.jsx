import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
        p-6
        rounded-lg
        flex
        flex-col
        shadow-lg
        hover:shadow-xl
        transition-shadow
      "
      style={{
        backgroundColor: 'var(--color-bg-section)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="
            rounded
            mb-4
            object-cover
            w-full
            h-48
          "
        />
      )}

      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>

      <p className="flex-1 leading-relaxed text-base my-2">
        {project.description}
      </p>

      <div className="flex gap-3 mt-4">
        <Link
          to={`/projects/${project.id}`}
          className="
            inline-block
            px-4 py-2
            rounded
            text-sm
            font-bold
            transition-colors
            hover:opacity-80
          "
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-bg-section)',
          }}
        >
          View Project
        </Link>
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              px-4 py-2
              rounded
              text-sm
              font-bold
              transition-colors
              bg-accent
              text-primaryBg
              hover:opacity-80
            "
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
