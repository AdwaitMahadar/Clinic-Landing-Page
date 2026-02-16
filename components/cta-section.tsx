"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Phone } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-5" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-primary shadow-xl shadow-primary/10"
        >
          {/* Warm accent glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]"
            aria-hidden="true"
          />

          {/* Subtle vertical lines */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-1/4 top-0 h-full w-px bg-primary-foreground/[0.06]" />
            <div className="absolute left-2/4 top-0 h-full w-px bg-primary-foreground/[0.06]" />
            <div className="absolute left-3/4 top-0 h-full w-px bg-primary-foreground/[0.06]" />
          </div>

          <div className="relative z-10 px-8 py-20 text-center md:px-16 md:py-28">
            <motion.span
              variants={fadeUp}
              className="inline-block rounded-full border border-accent/30 bg-accent/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground"
            >
              Ready to Move Again?
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold tracking-tight text-primary-foreground md:text-5xl text-balance"
            >
              Your journey to recovery starts with a single step
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/65"
            >
              Book your consultation today and discover how our board-certified
              specialists can help you get back to doing what you love.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="#contact"
                className="magnetic-btn flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all hover:shadow-xl hover:shadow-accent/25"
              >
                Request Appointment
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="tel:+919552526803"
                className="magnetic-btn flex items-center gap-2 rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 px-8 py-4 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
              >
                <Phone className="h-3.5 w-3.5" />
                Call (955) 252-6803
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
