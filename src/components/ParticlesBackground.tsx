import { FC, useCallback } from "react"
import Particles from "react-tsparticles"
import type { Engine, Options } from "tsparticles-engine"
import { loadFull } from "tsparticles"
import particlesOptions from "../../src/utils/particles_options.json"

const ParticlesBackground: FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => await loadFull(engine), [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="z-0 absolute"
      options={particlesOptions as unknown as Options}
    />
  )
}

export default ParticlesBackground
