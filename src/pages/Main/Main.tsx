import { Article } from "../Article"
import { Projects } from "../Projects"

export function Main() {
  return (
    <>
      <div className="md:hidden">
        <div className="flex flex-col gap-y-4 my-10">
          <p className="text-2xl font-medium mb-2">A little about me...</p>
          <Article nameOverride="about" />
        </div>
      </div>
      <Projects />
    </>
  )
}
