'use client';

import { useEffect, useState } from "react";
import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

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
        await loadSlim(tsParticles);
        
        const options: ISourceOptions = {
          fullScreen: { enable: false },
          background: {
            color: background,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
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
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: particleDensity,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: minSize, max: maxSize },
            },
          },
          detectRetina: true,
        };

        await tsParticles.load(options);
        setInitialized(true);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };

    initParticles();

    return () => {
      const container = tsParticles.domItem(id);
      if (container) {
        container.destroy();
      }
    };
  }, [id, background, minSize, maxSize, particleDensity, particleColor]);

  return (
    <div id={id} className={className} />
  );
};