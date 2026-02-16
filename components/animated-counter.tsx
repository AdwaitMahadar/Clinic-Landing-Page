"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, target])

  return <span ref={ref}>{count}</span>
}
