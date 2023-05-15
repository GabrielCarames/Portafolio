import { useCallback } from "react"
import Particles from "react-tsparticles"
import type { Container, Engine, Options } from "tsparticles-engine"
import { loadFull } from "tsparticles"
import particlesOptions from "../../src/utils/particles_options.json"

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => await loadFull(engine), [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="z-0 absolute"
      options={particlesOptions as unknown as Options}
    />
  )
}
export default ParticlesBackground
