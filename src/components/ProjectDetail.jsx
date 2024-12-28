import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import projectData from '../data/projects.json';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [markdown, setMarkdown] = useState('');

  // Find the project by ID
  const project = projectData.find((p) => p.id === projectId);

  useEffect(() => {
    if (project && project.detailsMarkdown) {
      // Fetch the markdown file from your public folder
      fetch(project.detailsMarkdown)
        .then((res) => res.text())
        .then((text) => setMarkdown(text))
        .catch((err) => console.error('Error loading markdown:', err));
    }
  }, [project]);

  if (!project) {
    return (
      <div
        className="w-full py-16 px-6 text-center"
        style={{
          backgroundColor: 'var(--color-bg-section)',
          color: 'var(--color-text-darkBg)',
          minHeight: '100vh'
        }}
      >
        <h2 className="text-xl">Project not found.</h2>
        <Link
          to="/projects"
          className="underline mt-4 inline-block"
          style={{ color: 'var(--color-primary)' }}
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section
      className="w-full py-16 px-6"
      style={{
        backgroundColor: 'var(--color-bg-section)',
        color: 'var(--color-text-darkBg)',
        minHeight: '100vh'
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ color: 'var(--color-primary)' }}
        >
          {project.title}
        </h2>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full mb-6 rounded"
          />
        )}

        {/* Render the Markdown content */}
        <article className="prose max-w-none">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>

        <div className="mt-8 flex gap-4">
          {/* Live Demo Button */}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                px-4 py-2
                rounded
                text-sm font-bold
                hover:opacity-80
              "
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-bg-section)'
              }}
            >
              Live Demo
            </a>
          )}

          {/* Repo Link Button */}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                px-4 py-2
                rounded
                text-sm font-bold
                bg-accent
                text-primaryBg
                hover:opacity-80
              "
            >
              View Code
            </a>
          )}
        </div>

        {/* Back to Projects Link */}
        <div className="mt-8">
          <Link
            to="/projects"
            className="underline"
            style={{ color: 'var(--color-primary)' }}
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
