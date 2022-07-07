import classNames from "classnames"
import { Project } from "../../types/Project"
import { Icon } from "../Icon"

interface ProjectListItemProps {
  className?: string
  project: Project
}

export function ProjectListItem({ project, className }: ProjectListItemProps) {
  return (
    <div
      className={classNames(
        "p-4 rounded-lg drop-shadow-sm border bg-slate-50 w-full h-full",
        className,
      )}
    >
      <p className="text-2xl font-medium mb-6">{project.name}</p>
      <div className="mb-8 border-b -mx-4" />
      <div className="flex flex-wrap md:flex-nowrap">
        <img
          alt={project.name}
          src={project.image}
          className="rounded-lg md:w-1/4 h-1/4 mr-4 border"
        />
        <div className="flex flex-col mt-4 md:mt-0">
          <p>{project.description}</p>
          {project.categories.length ? (
            <div>
              <p className="my-2 font-medium">Categories:</p>
              <div className="flex gap-2">
                {project.categories.map(({ icon_name }) => (
                  <Icon size={20} key={icon_name} name={icon_name} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}