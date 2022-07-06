import { useCallback } from "react"
import { IconBaseProps } from "react-icons"
import { FiGlobe, FiSmartphone } from "react-icons/fi"
import { SiMapbox, SiTypescript } from "react-icons/si"

export const getIcon = (props: IconBaseProps) => ({
  smartphone: <FiSmartphone {...props} />,
  globe: <FiGlobe {...props} />,
  typescript: <SiTypescript {...props} />,
  mapbox: <SiMapbox {...props} />,
})

export type IconName = keyof ReturnType<typeof getIcon>

interface IconProps extends IconBaseProps {
  name: IconName
}

export function Icon(props: IconProps) {
  const Icon = useCallback((props: IconProps) => getIcon(props)[props.name], [])
  return <Icon {...props} />
}
