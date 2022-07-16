import { ReactNode } from "react"
import { Card } from "../Card"
import { Icon } from "../Icon"

const ICON_SIZE = 24

interface FooterProps {
  children?: ReactNode
}

export function Footer({ children }: FooterProps) {
  return (
    <Card className="mt-28 px-10 md:px-20 bg-transparent border border-[#222222] py-10 mb-10 text-[#222222]">
      <div className="flex items-center justify-between border-b-2 pb-10 mb-10">
        <p className="text-2xl font-medium">Get to know me</p>
        <div className="flex gap-x-4">
          <Icon name="github" size={ICON_SIZE} />
          <Icon name="linkedin" size={ICON_SIZE} />
        </div>
      </div>
      <div className="flex flex-col max-w-6xl">{children}</div>
    </Card>
  )
}
