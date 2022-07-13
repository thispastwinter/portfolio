import { useParams } from "react-router-dom"
import { ContentBlocks } from "../../components/ContentBlocks"
import { Spinner } from "../../components/Spinner"
import { useGetArticleByName } from "../../hooks/useGetArticleByName"

export function Article() {
  const { name } = useParams<{ name: string }>()
  const { data, isLoading } = useGetArticleByName(name ?? "")

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] md:h-auto">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-x-4">
        {data?.columns.map(({ rows, id }) => (
          <div key={id} className="flex flex-col gap-y-4">
            {rows.map(({ id, content_blocks }) => (
              <div key={id} className="flex flex-col lg:flex-row">
                <ContentBlocks contentBlocks={content_blocks || []} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
