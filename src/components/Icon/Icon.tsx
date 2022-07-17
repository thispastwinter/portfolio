import { useCallback } from "react"
import { IconBaseProps } from "react-icons"
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiChevronLeft,
  FiGlobe,
  FiSmartphone,
} from "react-icons/fi"
import {
  SiGithub,
  SiGraphql,
  SiLinkedin,
  SiMapbox,
  SiReact,
  SiTypescript,
} from "react-icons/si"

export const getIcon = (props: IconBaseProps) => ({
  smartphone: <FiSmartphone {...props} />,
  globe: <FiGlobe {...props} />,
  typescript: <SiTypescript {...props} />,
  mapbox: <SiMapbox {...props} />,
  chevronLeft: <FiChevronLeft {...props} />,
  arrowUpRight: <FiArrowUpRight {...props} />,
  arrowRight: <FiArrowRight {...props} />,
  arrowLeft: <FiArrowLeft {...props} />,
  graphql: <SiGraphql {...props} />,
  react: <SiReact {...props} />,
  github: <SiGithub {...props} />,
  linkedin: <SiLinkedin {...props} />,
})

export type IconName = keyof ReturnType<typeof getIcon>

interface IconProps extends IconBaseProps {
  name: IconName
}

export function Icon(props: IconProps) {
  const Icon = useCallback((props: IconProps) => getIcon(props)[props.name], [])
  return <Icon data-testid={`icon_${props.name}`} {...props} />
}
