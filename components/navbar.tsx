"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight, Phone } from "lucide-react"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#doctors" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.4, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-[1400px] px-5 pt-4">
        <nav
          className={`flex items-center justify-between rounded-2xl border px-6 py-3.5 transition-all duration-500 ${
            scrolled
              ? "border-border bg-card/90 shadow-sm backdrop-blur-2xl"
              : "border-transparent bg-transparent"
          }`}
          aria-label="Main navigation"
        >
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <span className="text-sm font-bold text-primary-foreground">SSC</span>
            </div>
            <span className="font-display text-base font-semibold tracking-tight text-foreground">
              Shree Sai Clinic
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="tel:+919552526803"
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              (955) 252-6803
            </Link>
            <Link
              href="#contact"
              className="magnetic-btn flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-[13px] font-semibold text-accent-foreground transition-all hover:shadow-lg hover:shadow-accent/15"
            >
              Book a Visit
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0, 1] }}
            className="mx-5 mt-2 overflow-hidden rounded-2xl border border-border bg-card shadow-lg lg:hidden"
          >
            <div className="flex flex-col p-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-3 border-t border-border pt-3">
                <Link
                  href="#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Visit
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
