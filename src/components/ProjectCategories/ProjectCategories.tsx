import { useMemo } from "react"
import { Project } from "../../types/Project"
import { Icon } from "../Icon"
import { Tooltip } from "../Tooltip"

interface ProjectCategoriesProps {
  categories: Project["categories"]
  size?: "lg" | "sm"
}

export function ProjectCategories({
  categories,
  size = "sm",
}: ProjectCategoriesProps) {
  const { iconSize, fontSize } = useMemo(
    () => ({
      iconSize: size === "lg" ? 24 : 20,
      fontSize: size === "lg" ? 14 : 12,
    }),
    [size],
  )

  return (
    <div className="flex gap-x-2">
      {categories.map(({ icon_name, name }) => (
        <Tooltip
          aria-describedby={`image of ${name}`}
          fontSize={fontSize}
          showArrow
          key={name}
          label={name}
          placement="bottom"
        >
          <Icon
            data-testid={`category_${name}`}
            size={iconSize}
            key={icon_name}
            name={icon_name}
          />
        </Tooltip>
      ))}
    </div>
  )
}
