import Wave from "react-wavify"

const WaveBackground = () => {
  return (
    <>
      <Wave
        fill="#ffffff14"
        className="absolute bottom-0"
        paused={false}
        options={{
          height: 60,
          amplitude: 80,
          speed: 0.1,
          points: 5
        }}
      />
      <Wave
        fill="#ffffff10"
        className="absolute bottom-0"
        paused={false}
        options={{
          height: 40,
          amplitude: 80,
          speed: 0.12,
          points: 5
        }}
      />
    </>
  )
}
export default WaveBackground
