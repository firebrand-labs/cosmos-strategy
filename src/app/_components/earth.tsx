"use client"

import {
  useScroll,
  useMotionTemplate,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion"
import { FC, useEffect, useRef } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { motion } from "framer-motion-3d"

interface EarthProps {}

const Earth: FC<EarthProps> = ({}) => {
  const scene = useRef(null)
  const { scrollYProgress, scrollY } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  })

  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  console.log(scrollYProgress)
  useEffect(() => {
    console.log(spring)
  }, [scrollYProgress, scrollY])

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/color.jpg",
    "/normal.png",
    "/occlusion.jpg",
  ])

  return (
    <Canvas ref={scene}>
      <ambientLight />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <motion.mesh scale={2.5} rotation-y={spring}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  )
}

export default Earth
