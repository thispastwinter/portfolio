import { Spinner } from "../Spinner"

export function Loader() {
  return (
    <div className="flex justify-center items-center h-[100vh] md:h-auto">
      <Spinner />
    </div>
  )
}
