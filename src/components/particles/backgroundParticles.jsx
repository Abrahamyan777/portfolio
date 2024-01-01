import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesConfig from "./particles-config";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = () => {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => (particlesConfig),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}

export default BackgroundParticles;