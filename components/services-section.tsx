"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Bone, Activity, Zap, Brain, Footprints, Dumbbell } from "lucide-react"
import Link from "next/link"
import { fadeUp, staggerContainer } from "@/lib/motion"

const services = [
  {
    icon: Bone,
    title: "Joint Replacement",
    description: "Robotic-assisted hip, knee, and shoulder replacement with rapid recovery protocols and personalized care plans.",
    tag: "Surgical",
  },
  {
    icon: Activity,
    title: "Sports Medicine",
    description: "ACL reconstruction, rotator cuff repair, and return-to-play programs designed for athletes of all levels.",
    tag: "Active",
  },
  {
    icon: Brain,
    title: "Spine Care",
    description: "Minimally invasive spine surgery and comprehensive non-surgical treatments for lasting relief.",
    tag: "Complex",
  },
  {
    icon: Zap,
    title: "Pain Management",
    description: "Advanced injection therapies, nerve blocks, and regenerative medicine to restore comfort and function.",
    tag: "Relief",
  },
  {
    icon: Footprints,
    title: "Foot & Ankle",
    description: "Expert treatment for fractures, bunions, plantar fasciitis, and full ankle reconstruction.",
    tag: "Specialty",
  },
  {
    icon: Dumbbell,
    title: "Physical Therapy",
    description: "Individualized rehab programs to rebuild strength, flexibility, and confidence post-injury or surgery.",
    tag: "Recovery",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Specialties
            </span>
            <h2 className="mt-5 max-w-lg font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
              Comprehensive care for every condition
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} custom={1}>
            <Link
              href="#contact"
              className="magnetic-btn flex items-center gap-2 self-start rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:border-accent/30 hover:shadow-md md:self-auto"
            >
              Book Consultation
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              custom={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/[0.06] md:p-10"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                    <service.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <span className="rounded-full border border-border bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {service.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <Link
                  href="#contact"
                  className="mt-8 flex items-center gap-2 text-sm font-medium text-accent opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
