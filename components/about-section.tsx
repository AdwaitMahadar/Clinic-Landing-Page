"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, Shield, Bot, Heart } from "lucide-react"
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion"
import { AnimatedCounter } from "@/components/animated-counter"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="about" className="relative py-28 md:py-40">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-secondary/30" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <span className="inline-block rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Why Shree Sai Ortho Clinic
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
              A new standard in orthopedic care
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              For over 20 years, Shree Sai Ortho Clinic has combined cutting-edge
              technology with a patient-first philosophy to deliver outcomes that
              exceed expectations.
            </p>
          </motion.div>

          {/* Bento grid */}
          <div className="mt-16 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Large image card */}
            <motion.div
              variants={scaleIn}
              custom={1}
              className="relative overflow-hidden rounded-3xl border border-border shadow-sm md:col-span-2 md:row-span-2"
            >
              <Image
                src="/images/treatment.jpg"
                alt="Physical therapist examining patient"
                width={900}
                height={700}
                className="relative z-0 h-72 w-full object-cover md:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 z-10 p-8 md:p-10">
                <h3 className="max-w-sm font-display text-2xl font-semibold text-primary-foreground md:text-3xl">
                  Patient-centered, outcome-driven
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
                  Every treatment plan is built around you -- combining the latest
                  evidence-based medicine with genuine compassion.
                </p>
              </div>
            </motion.div>

            {/* Stat card */}
            <motion.div
              variants={fadeUp}
              custom={2}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-accent/25 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <div className="mt-8">
                <p className="font-display text-5xl font-semibold text-foreground md:text-6xl">
                  <AnimatedCounter target={12} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Board-certified orthopedic surgeons on staff
                </p>
              </div>
            </motion.div>

            {/* Features card */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              {[
                { icon: Bot, label: "Robotic-assisted surgical technology" },
                { icon: Heart, label: "Same-week urgent care appointments" },
                { icon: Shield, label: "On-site imaging, labs, and rehab" },
                { icon: CheckCircle2, label: "Fellowship-trained surgeons" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <item.icon className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
