"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const items = [
  "Joint Replacement",
  "Sports Medicine",
  "Spine Surgery",
  "Pain Management",
  "Foot & Ankle",
  "Physical Therapy",
  "Fracture Care",
  "Hand & Wrist",
  "Shoulder Reconstruction",
  "Pediatric Orthopedics",
]

export function MarqueeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="overflow-hidden border-y border-border bg-card/50 py-5"
    >
      <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground/50">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-accent/40" aria-hidden="true" />
          </div>
        ))}
      </div>
    </motion.section>
  )
}
