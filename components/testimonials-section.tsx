"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/motion"

const testimonials = [
  {
    name: "Margaret C.",
    procedure: "Total Knee Replacement",
    quote:
      "Dr. Caldwell and his team gave me my life back. Six months after surgery I'm hiking again without any pain. The entire experience was seamless.",
    rating: 5,
  },
  {
    name: "David H.",
    procedure: "ACL Reconstruction",
    quote:
      "After tearing my ACL playing soccer, I was devastated. Dr. Park's expertise got me back on the field faster than I ever thought possible.",
    rating: 5,
  },
  {
    name: "Karen N.",
    procedure: "Spinal Fusion",
    quote:
      "I suffered from debilitating back pain for years. Dr. Mitchell's minimally invasive approach meant a shorter hospital stay and incredible recovery.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="testimonials" className="relative py-28 md:py-40">
      {/* Subtle warm background band */}
      <div className="pointer-events-none absolute inset-0 bg-secondary/30" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1400px] px-5" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp} className="text-center">
            <span className="inline-block rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Patient Stories
            </span>
            <h2 className="mx-auto mt-5 max-w-lg font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
              Real results, real people
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i + 1}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-500 hover:border-accent/25 hover:shadow-lg hover:shadow-accent/[0.06] md:p-10"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-border" aria-hidden="true" />

                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                <blockquote className="relative z-10 mt-6 flex-1 text-base leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-display text-sm font-semibold text-accent">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.procedure}</p>
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
