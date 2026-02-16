"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { AnimatedCounter } from "@/components/animated-counter"

const marqueeItems = [
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

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen min-h-[600px] w-full items-center overflow-hidden pt-20"
    >
      {/* Background Image with Fade */}
      <div className="absolute inset-0 z-0 flex justify-center">
        <div className="flex h-full w-full max-w-[1400px] justify-end px-5">
          <div className="relative h-full w-full overflow-hidden rounded-l-none rounded-r-[3rem] lg:w-[80%]">
            <Image
              src="/images/hero-clinic.jpg"
              alt="Clinic Background"
              fill
              className="object-cover object-right"
              priority
            />
          {/* Gradient Mask for fading to the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
          {/* Gradient Mask for fading to the top */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
          {/* Gradient Mask for fading to the right */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background/60 to-transparent" />
          {/* Gradient Mask for top-right corner */}
          <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-bl from-background via-background/40 to-transparent" />
        </div>
      </div>
    </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container relative z-10 mx-auto px-5"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0} className="flex justify-start">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-background/80 px-5 py-2.5 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                Now accepting new patients
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp} custom={1} style={{ y: contentY }} className="mt-8">
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-[5rem] text-balance">
              Movement{" "}
              <span className="text-gradient">without</span>
              <br />
              limits
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Board-certified orthopedic specialists delivering personalized care
            for bones, joints, and spine. Your path to recovery starts here.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contact"
              className="magnetic-btn glow-accent flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all hover:shadow-xl hover:shadow-accent/20"
            >
              Request Appointment
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="magnetic-btn flex items-center gap-2 rounded-xl border border-border bg-background/80 px-8 py-4 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-md"
            >
              Explore Services
              <ArrowDown className="h-3.5 w-3.5" />
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-20 flex max-w-lg items-center gap-8"
          >
            <div className="flex flex-col items-start gap-1">
              <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                <AnimatedCounter target={25} />+
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Years
              </p>
            </div>
            <div className="h-10 w-px bg-border sm:h-12" />
            <div className="flex flex-col items-start gap-1">
              <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                <AnimatedCounter target={50} />k+
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Patients
              </p>
            </div>
            <div className="h-10 w-px bg-border sm:h-12" />
            <div className="flex flex-col items-start gap-1">
              <div className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                <AnimatedCounter target={98} />%
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Satisfaction
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-y border-border bg-background/50 backdrop-blur-sm py-4">
        <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/40" aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
