import { ContentRow } from "../../types/ContentRow"
import { ContentBlocks } from "../ContentBlocks"

interface ContentColumnProps {
  content_rows: ContentRow[]
}

export function ContentColumn({ content_rows }: ContentColumnProps) {
  return (
    <div className="flex flex-col gap-y-4">
      {content_rows.map(({ id, content_blocks }) => (
        <div key={id} className="flex flex-col lg:flex-row">
          <ContentBlocks contentBlocks={content_blocks || []} />
        </div>
      ))}
    </div>
  )
}
