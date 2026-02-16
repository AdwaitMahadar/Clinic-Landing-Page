"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/motion"

const doctors = [
  {
    name: "Dr. Abhijeet Mahadar",
    specialty: "Joint Replacement",
    image: "/images/doctor-portrait.jpg",
    bio: "Fellowship-trained at the Hospital for Special Surgery. 20+ years in robotic-assisted joint replacement.",
    experience: "20+ yrs",
  },
  {
    name: "Dr. Madhuri Mahadar",
    specialty: "Spine Surgery",
    image: "/images/doctor-2.jpg",
    bio: "Double board-certified in orthopedic surgery and pain medicine. Pioneer in minimally invasive spine techniques.",
    experience: "20+ yrs",
  },
  {
    name: "Dr. James Park",
    specialty: "Sports Medicine",
    image: "/images/doctor-3.jpg",
    bio: "Former collegiate athletics team physician. Specializes in ACL reconstruction and shoulder stabilization.",
    experience: "10+ yrs",
  },
]

export function DoctorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="doctors" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="inline-block rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                Our Team
              </span>
              <h2 className="mt-5 max-w-md font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
                Meet your specialists
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
              Leaders in their fields who combine advanced training with genuine
              compassion for every patient.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {doctors.map((doctor, i) => (
              <motion.div
                key={doctor.name}
                variants={fadeUp}
                custom={i + 1}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl border border-border shadow-sm transition-shadow duration-500 group-hover:shadow-lg group-hover:shadow-accent/[0.06]">
                  <Image
                    src={doctor.image}
                    alt={`Portrait of ${doctor.name}`}
                    width={480}
                    height={600}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/85 via-primary/25 to-transparent p-6 md:p-8">
                    <div className="mb-auto self-end">
                      <span className="rounded-full bg-card/70 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur-md">
                        {doctor.experience}
                      </span>
                    </div>

                    <span className="mb-2 inline-block w-fit rounded-full bg-accent/30 px-3 py-1 text-xs font-semibold text-accent-foreground backdrop-blur-sm">
                      {doctor.specialty}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-primary-foreground">
                      {doctor.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                      {doctor.bio}
                    </p>

                    <button className="mt-4 flex items-center gap-2 text-sm font-medium text-accent-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      View profile
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
