import { useCallback } from "react"
import { IconBaseProps } from "react-icons"
import {
  FiArrowUpRight,
  FiChevronLeft,
  FiGlobe,
  FiSmartphone,
} from "react-icons/fi"
import {
  SiGithub,
  SiGraphql,
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
  graphql: <SiGraphql {...props} />,
  react: <SiReact {...props} />,
  github: <SiGithub {...props} />,
})

export type IconName = keyof ReturnType<typeof getIcon>

interface IconProps extends IconBaseProps {
  name: IconName
}

export function Icon(props: IconProps) {
  const Icon = useCallback((props: IconProps) => getIcon(props)[props.name], [])
  return <Icon aria-label={props.name} {...props} />
}
