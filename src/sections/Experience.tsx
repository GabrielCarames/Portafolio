import Timeline from "../components/Timeline"
import Title from "../components/Title"

const Experience = () => {
  return (
    <section className="w-full h-screen flex justify-center bg-white-2 text-black relative z-10 px-8">
      <div className="w-full max-w-7xl h-max flex flex-col gap-10 mt-10">
        <Title text="Experience" />
        <Timeline />
      </div>
    </section>
  )
}
export default Experience
