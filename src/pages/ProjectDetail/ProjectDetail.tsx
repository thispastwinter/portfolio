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
          <div className="md:pr-4 max-w-lg w-full md:border-r">
            <img
              className="border rounded-lg mb-4"
              alt={data?.name}
              src={data?.image}
            />
            <a
              className="flex items-center mr-1 mb-4 font-bold"
              target="_blank"
              href={data?.url}
              rel="noreferrer"
            >
              Visit Website
              <Icon size={20} className="ml-1" name="arrowUpRight" />
            </a>
            <p className="mb-4 font-medium">Stack:</p>
            <div className="flex gap-2 mb-4 md:mb-0">
              {data?.categories.map(({ icon_name, name }) => (
                <Icon title={name} size={24} key={icon_name} name={icon_name} />
              ))}
            </div>
          </div>
          <div className="md:pl-4">
            <p className="text-8xl md:text-4xl font-display2 md:my-0 my-6">
              {data?.name}
            </p>
            <ContentBlocks
              contentBlocks={data?.content_blocks || []}
              containerProps={{ className: "pb-4" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
