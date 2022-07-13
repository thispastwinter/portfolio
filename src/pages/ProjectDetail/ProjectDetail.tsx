import { useNavigate, useParams } from "react-router-dom"
import { ContentBlocks } from "../../components/ContentBlocks"
import { Icon } from "../../components/Icon"
import { Spinner } from "../../components/Spinner"
import { useGetProjectById } from "../../hooks/useGetProjectById"

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetProjectById(id ?? "")
  const navigate = useNavigate()

  const goBack = () => {
    navigate("../")
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] md:h-auto">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <button className="flex pb-4 items-center md:hidden" onClick={goBack}>
        <Icon name="chevronLeft" size={32} />
        <p className="text-xl">Projects</p>
      </button>
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col md:pr-4 max-w-lg w-full md:border-r">
            <img
              className="border rounded-lg"
              alt={data?.name}
              src={data?.image}
            />
            <div className="flex justify-between md:justify-start md:flex-col gap-y-4 my-4">
              <a
                className="flex items-center font-medium"
                target="_blank"
                href={data?.url}
                rel="noreferrer"
              >
                Website
                <Icon size={20} className="ml-1" name="arrowUpRight" />
              </a>
              <div className="flex gap-x-2">
                {data?.categories.map(({ icon_name, name }) => (
                  <Icon
                    title={name}
                    size={24}
                    key={icon_name}
                    name={icon_name}
                  />
                ))}
              </div>
            </div>
          </div>
          <article className="flex flex-col md:pl-4">
            <div className="mb-12">
              <p className="text-8xl md:text-4xl font-display2">{data?.name}</p>
            </div>
            <div className="flex flex-col">
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
          </article>
        </div>
      </div>
    </div>
  )
}
