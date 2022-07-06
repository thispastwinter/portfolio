import { Project } from "../../types/Project"

interface ProjectListItemProps {
  className: string
  project: Project
}

export function ProjectListItem({ project, ...rest }: ProjectListItemProps) {
  return (
    <div {...rest}>
      <p className="text-lg font-bold mb-2">{project.name}</p>
      <div className="flex">
        <img
          alt={project.name}
          src={project.image}
          className="rounded-md w-1/4 h-1/4 mr-4"
        />
        <p>{project.description}</p>
      </div>
    </div>
  )
}
