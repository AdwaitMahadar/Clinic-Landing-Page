"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, ArrowDown } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { AnimatedCounter } from "@/components/animated-counter"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden pb-0 pt-32 md:pt-40"
    >
      {/* Warm ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[140px]"
        aria-hidden="true"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-[1400px] px-5"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} custom={0} className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 shadow-sm">
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
        <motion.div variants={fadeUp} custom={1} style={{ y: textY }}>
          <h1 className="mx-auto mt-10 max-w-5xl text-center font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-[5.5rem] text-balance">
            Movement{" "}
            <span className="text-gradient">without</span>
            <br />
            limits
          </h1>
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={2}
          className="mx-auto mt-7 max-w-lg text-center text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Board-certified orthopedic specialists delivering personalized care
          for bones, joints, and spine. Your path to recovery starts here.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
            className="magnetic-btn flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-sm font-medium text-foreground shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
          >
            Explore Services
            <ArrowDown className="h-3.5 w-3.5" />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          custom={4}
          className="mx-auto mt-20 flex max-w-3xl items-center justify-center"
        >
          <div className="flex flex-1 flex-col items-center gap-1 py-4">
            <div className="font-display text-4xl font-semibold text-foreground md:text-5xl">
              <AnimatedCounter target={25} />+
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Years of Practice
            </p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="flex flex-1 flex-col items-center gap-1 py-4">
            <div className="font-display text-4xl font-semibold text-foreground md:text-5xl">
              <AnimatedCounter target={50} />k+
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Patients Treated
            </p>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="flex flex-1 flex-col items-center gap-1 py-4">
            <div className="font-display text-4xl font-semibold text-foreground md:text-5xl">
              <AnimatedCounter target={98} />%
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Satisfaction
            </p>
          </div>
        </motion.div>

        {/* Hero image with parallax */}
        <motion.div
          variants={fadeUp}
          custom={5}
          className="relative mt-16 overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/[0.04]"
        >
          <motion.div style={{ y: imageY, scale: imageScale }}>
            <Image
              src="/images/hero-clinic.jpg"
              alt="Modern orthopedic clinic interior"
              width={1400}
              height={700}
              className="h-[320px] w-full object-cover md:h-[480px] lg:h-[560px]"
              priority
            />
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
