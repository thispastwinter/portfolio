import { Button } from "../../components/Button"
import { Icon } from "../../components/Icon"
import { Project } from "../../types/Project"

interface PageButtonProps {
  project: Project
  onProjectClick: (id: Project["id"]) => void
  variant?: "next" | "previous"
}

const getRightIcon = (variant: PageButtonProps["variant"]) =>
  variant === "next" ? <Icon className="ml-2" name="arrowRight" /> : null

const getLeftIcon = (variant: PageButtonProps["variant"]) =>
  variant === "previous" ? <Icon className="mr-2" name="arrowLeft" /> : null

export function PageButton({
  project,
  onProjectClick,
  variant = "next",
}: PageButtonProps) {
  return (
    <Button
      onClick={() => onProjectClick(project.id)}
      text={project.name}
      rightAdornment={getRightIcon(variant)}
      leftAdornment={getLeftIcon(variant)}
    />
  )
}