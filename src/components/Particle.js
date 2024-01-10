import React from "react";
import Particles from "react-tsparticles";

export const Particle = () => {
  return (
    <Particles
      id="tsparticles"
      params={{
        background: {
            color: "#000000",
        },
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 1500,
                },
            },
            color: {
                value: "#ffffff",
            },
            shape: {
                type: "circle",
                stroke: {
                width: 0.75,
                color: "#ffffff",
                },
                polygon: {
                nb_sides: 5,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#D3D3D3",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                direction: "up",
                speed: 0.6,
                random: false,
                straight: false,
                out_mode: "out",
                bounce: true,
            },
            size: {
                value: 1,
            },
            opacity: {
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05,
                },
            },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}