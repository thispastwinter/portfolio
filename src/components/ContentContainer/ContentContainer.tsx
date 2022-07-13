import { ContentColumn as ContentColumnType } from "../../types/ContentColumn"
import { ContentColumn } from "../ContentColumn"

interface ContnetContainerProps {
  columns: ContentColumnType[]
}

export function ContentContainer({ columns }: ContnetContainerProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {columns.map(({ content_rows, id }) => (
        <ContentColumn key={id} content_rows={content_rows} />
      ))}
    </div>
  )
}
