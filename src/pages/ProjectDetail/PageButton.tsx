import { Button } from "../../components/Button"
import { Icon } from "../../components/Icon"
import { Project } from "../../types/Project"

interface PageButtonProps {
  project: Project
  onProjectClick: (id: Project["id"]) => void
  variant?: "Next" | "Previous"
}

const getRightIcon = (variant: PageButtonProps["variant"]) =>
  variant === "Next" ? <Icon className="ml-2" name="arrowRight" /> : null

const getLeftIcon = (variant: PageButtonProps["variant"]) =>
  variant === "Previous" ? <Icon className="mr-2" name="arrowLeft" /> : null

export function PageButton({
  project,
  onProjectClick,
  variant = "Next",
}: PageButtonProps) {
  return (
    <Button
      onClick={() => onProjectClick(project.id)}
      text={`${variant} Project`}
      rightAdornment={getRightIcon(variant)}
      leftAdornment={getLeftIcon(variant)}
    />
  )
}
