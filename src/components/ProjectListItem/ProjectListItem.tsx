import { Project } from "../../types/Project"
import { Card } from "../Card"
import { Icon } from "../Icon"

interface ProjectListItemProps {
  className?: string
  project: Project
}

export function ProjectListItem({ project, className }: ProjectListItemProps) {
  return (
    <Card className={className}>
      <p className="text-2xl font-medium mb-6">{project.name}</p>
      <div className="flex flex-wrap md:flex-nowrap">
        <img
          alt={project.name}
          src={project.image}
          className="rounded-lg md:w-1/4 h-1/4 mr-4 border"
        />
        <div className="flex flex-col mt-4 md:mt-0">
          <p>{project.short_description}</p>
          {project.categories.length ? (
            <div>
              <p className="my-2 font-medium">Stack:</p>
              <div className="flex gap-2">
                {project.categories.map(({ icon_name, name }) => (
                  <Icon
                    title={name}
                    size={20}
                    key={icon_name}
                    name={icon_name}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  )
}
