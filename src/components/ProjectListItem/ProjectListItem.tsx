import classNames from "classnames"
import { Project } from "../../types/Project"
import { Card } from "../Card"
import { Icon } from "../Icon"
import "./index.css"

interface ProjectListItemProps {
  className?: string
  project: Project
}

export function ProjectListItem({ project, className }: ProjectListItemProps) {
  return (
    <Card className={classNames("project-list-item", className)}>
      <p className="text-2xl font-medium mb-6">{project.name}</p>
      <div className="flex flex-wrap md:flex-nowrap justify-center">
        <img
          alt={project.name}
          src={project.image}
          className="rounded-lg md:w-1/4 h-1/4 md:mr-4 border"
        />
        <div className="flex flex-col mt-4 md:mt-0">
          <p>{project.short_description}</p>
          <div className="flex items-end justify-between mt-auto mb-2">
            {project.categories.length ? (
              <div className="flex gap-x-2">
                {project.categories.map(({ icon_name, name }) => (
                  <Icon
                    data-testid={`category_${name}`}
                    title={name}
                    size={20}
                    key={icon_name}
                    name={icon_name}
                  />
                ))}
              </div>
            ) : null}
            <div className="project-list-item-arrow">
              <Icon name="arrowRight" size={24} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
