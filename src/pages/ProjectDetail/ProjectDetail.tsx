import { useParams } from "react-router-dom"
import { Icon } from "../../components/Icon"
import { useGetProjectById } from "../../hooks/useGetProjectById"

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetProjectById(id ?? "")

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-6">
        <p className="text-4xl font-display2 mb-4">{data?.name}</p>
        <div className="flex gap-2">
          {data?.categories.map(({ icon_name }) => (
            <Icon size={24} key={icon_name} name={icon_name} />
          ))}
        </div>
      </div>
      <img
        className="border rounded-lg max-w-xs"
        alt={data?.name}
        src={data?.image}
      />
      <p className="mt-6">{data?.description}</p>
    </div>
  )
}
