"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { fadeUp, staggerContainer } from "@/lib/motion"

const links = {
  services: [
    "Joint Replacement",
    "Sports Medicine",
    "Spine Care",
    "Pain Management",
    "Physical Therapy",
  ],
  clinic: ["About Us", "Our Doctors", "Patient Stories", "Contact"],
  resources: ["Patient Portal", "Insurance & Billing", "FAQs", "Blog"],
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <footer className="border-t border-border bg-card/50" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-[1400px] px-5 py-20"
      >
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div variants={fadeUp}>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                <span className="text-sm font-bold text-primary-foreground">SSC</span>
              </div>
              <span className="font-display text-base font-semibold tracking-tight text-foreground">
                Shree Sai Clinic
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Expert orthopedic care for over 25 years. Your mobility is our
              mission.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {links.services.map((label) => (
                <li key={label}>
                  <Link
                    href="#services"
                    className="text-sm text-foreground/60 transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Clinic */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Clinic
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {links.clinic.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-sm text-foreground/60 transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Resources
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {links.resources.map((label) => (
                <li key={label}>
                  <Link
                    href="#"
                    className="text-sm text-foreground/60 transition-colors hover:text-accent"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground/60">
            &copy; 2026 Summit Orthopedics. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Accessibility"].map((label) => (
              <Link
                key={label}
                href="#"
                className="text-xs text-muted-foreground/60 transition-colors hover:text-accent"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
