import { ReactNode } from "react"
import { URL } from "../../constants/URL"
import { Clickable } from "../Clickable"
import { Card } from "../Card"
import { Icon } from "../Icon"

const ICON_SIZE = 24

interface FooterProps {
  children?: ReactNode
}

export function Footer({ children }: FooterProps) {
  return (
    <footer>
      <Card className="mt-10 md:mt-16 px-10 md:px-20 bg-transparent border border-charcoal py-10 mb-10 text-charcoal">
        <div className="flex items-center justify-between border-b-2 pb-10 mb-10">
          <p className="text-2xl font-medium">Get to know me</p>
          <div className="flex gap-x-4">
            <Clickable
              variant="link"
              to={URL.github}
              startIcon={
                <Icon aria-label="Github logo" name="github" size={ICON_SIZE} />
              }
            />
            <Clickable
              variant="link"
              to={URL.linkedIn}
              startIcon={
                <Icon
                  aria-label="LinkedIn logo"
                  name="linkedin"
                  size={ICON_SIZE}
                />
              }
            />
          </div>
        </div>
        <div className="flex flex-col max-w-6xl">{children}</div>
      </Card>
    </footer>
  )
}
