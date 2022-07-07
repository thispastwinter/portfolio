import { useNavigate, useParams } from "react-router-dom"
import { Icon } from "../../components/Icon"
import { useGetProjectById } from "../../hooks/useGetProjectById"

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetProjectById(id ?? "")
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col">
      <button className="flex pb-4 items-center md:hidden" onClick={goBack}>
        <Icon name="chevronLeft" size={32} />
        <p className="text-xl">Projects</p>
      </button>
      <div className="flex flex-wrap md:flex-nowrap">
        <img
          className="border rounded-lg max-w-xs mr-4"
          alt={data?.name}
          src={data?.image}
        />
        <div className="flex flex-col">
          <p className="text-8xl md:text-4xl font-display2 my-4 md:my-0 md:mb-4">
            {data?.name}
          </p>
          <div className="flex gap-2">
            {data?.categories.map(({ icon_name }) => (
              <Icon size={24} key={icon_name} name={icon_name} />
            ))}
          </div>
          <p className="mt-6">{data?.description}</p>
        </div>
      </div>
    </div>
  )
}
