import { useParams } from "react-router-dom"
import { ContentContainer } from "../../components/ContentContainer"
import { Spinner } from "../../components/Spinner"
import { useGetArticleByName } from "../../hooks/useGetArticleByName"

interface ArticleProps {
  articleName?: string
}

export function Article({ articleName }: ArticleProps) {
  const { name } = useParams<{ name: string }>()
  const { data, isLoading } = useGetArticleByName(articleName ?? name ?? "")

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] md:h-auto">
        <Spinner />
      </div>
    )
  }

  return (
    <article className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-4">
        <ContentContainer columns={data?.content_columns || []} />
      </div>
    </article>
  )
}
