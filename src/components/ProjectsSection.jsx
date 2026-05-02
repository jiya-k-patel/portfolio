import { useState } from 'react'

function ProjectsSection({ projects }) {
  const [openProject, setOpenProject] = useState(null)

  const toggleProject = (title) => {
    setOpenProject((current) => (current === title ? null : title))
  }

  return (
    <section id="projects" className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#000000F]">Projects</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <button
            key={project.title}
            type="button"
            onClick={() => toggleProject(project.title)}
            className="rounded-xl border border-[#3B3561] bg-[#DDDBF1] p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:bg-[#3B3561] hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-[#000000F]">{project.title}</h3>
              <span className="text-xs font-medium text-[#3B3561]">{openProject === project.title ? 'Hide' : 'Open'}</span>
            </div>
            <p className="text-xs uppercase tracking-wide text-[#3B3561]">{project.tech}</p>

            {openProject === project.title && (
              <p className="mt-4 border-t border-[#3B3561] pt-4 text-sm text-[#3B3561]">{project.description}</p>
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
