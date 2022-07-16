import classNames from "classnames"
import { ContentRow } from "../../types/ContentRow"
import { ContentBlocks } from "../ContentBlocks"

interface ContentColumnProps {
  content_rows: ContentRow[]
  className?: string
}

export function ContentColumn({ content_rows, className }: ContentColumnProps) {
  return (
    <div className={classNames("flex flex-col gap-y-4", className)}>
      {content_rows.map(({ id, content_blocks }) => (
        <div key={id} className="flex flex-col lg:flex-row">
          <ContentBlocks contentBlocks={content_blocks || []} />
        </div>
      ))}
    </div>
  )
}
