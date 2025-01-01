'use client'

import { useEffect, useState } from "react";
import { Container, Engine, tsParticles } from "@tsparticles/engine";


interface SparklesCoreProps {
  id: string;
  background: string;
  minSize: number;
  maxSize: number;
  particleDensity: number;
  className: string;
  particleColor: string;
}

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: SparklesCoreProps) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      try {
        await loadFull(tsParticles);

        const particlesContainer = await tsParticles.load(id, {
          fullScreen: { enable: false },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: { enable: false, force: 60, smooth: 10 }
              },
              resize: true
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 }
            }
          },
          particles: {
            color: {
              value: particleColor,
            },
            links: {
              color: particleColor,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: particleDensity
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: minSize, max: maxSize }
            }
          },
          detectRetina: true
        });

        if (particlesContainer) {
          setInitialized(true);
        }
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };

    if (!initialized) {
      initParticles();
    }

    return () => {
      tsParticles.domItem(id)?.destroy();
    };
  }, [id, background, minSize, maxSize, particleColor, particleDensity, initialized]);

  return <div className={className} id={id} />;
};

