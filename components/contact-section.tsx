"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Phone, Clock, Mail, ArrowUpRight } from "lucide-react"
import { fadeUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion"

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Morewadi, Pimpri, Pune",
    secondary: "Maharashtra, 411018",
    href: "https://maps.app.goo.gl/B4SKwGjRCvKvypvk6?g_st=i&utm_campaign=ac-im",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "(955) 252-6803",
    secondary: "Mon - Fri, 8 AM - 5 PM",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Friday: 8 AM - 5 PM",
    secondary: "Saturday: 9 AM - 12 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@shreesaiortho.com",
    secondary: "Response within 24 hours",
  },
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)

    const formData = new FormData(form)

    // Using URLSearchParams for x-www-form-urlencoded content type
    const submitData = new URLSearchParams()
    submitData.append("entry.2007812013", formData.get("firstName") as string)
    submitData.append("entry.148981122", formData.get("lastName") as string)
    submitData.append("entry.127582099", formData.get("email") as string)
    submitData.append("entry.2107407762", formData.get("phone") as string)
    submitData.append("entry.194329477", formData.get("concern") as string)
    submitData.append("entry.377689764", formData.get("reason") as string)

    // Hidden fields required by Google Forms
    submitData.append("fvv", "1")
    submitData.append("pageHistory", "0")

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSco4K2kCkoGo4VeV-ZfpFXf6hcwgdzmP-cQNRKKKIJM1D_IxA/formResponse",
        {
          method: "POST",
          body: submitData,
          mode: "no-cors",
        }
      )

      // Since we can't verify, wait a moment then show success
      await new Promise((resolve) => setTimeout(resolve, 500))

      setIsSuccess(true)
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert(
        "Something went wrong. Please try calling us directly at (955) 252-6803"
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5" ref={ref}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-12 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left column */}
          <motion.div variants={slideInLeft}>
            <span className="inline-block rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              Get Started
            </span>
            <h2 className="mt-5 max-w-md font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
              Schedule your consultation
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Take the first step toward pain-free living. Fill out the form and
              our coordinator will contact you within one business day.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {contactDetails.map((item) => {
                const Component = item.href ? "a" : "div"
                const props = item.href
                  ? {
                      href: item.href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {}

                return (
                  <Component
                    key={item.label}
                    className={`flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/20 hover:shadow-md ${
                      item.href ? "cursor-pointer hover:bg-accent/[0.02]" : ""
                    }`}
                    {...props}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <item.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {item.value}
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        {item.secondary}
                      </p>
                    </div>
                  </Component>
                )
              })}
            </div>
          </motion.div>

          {/* Right column - form */}
          <motion.div
            variants={slideInRight}
            className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10"
          >
            <h3 className="font-display text-xl font-semibold text-foreground">
              Request an Appointment
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We&apos;ll reach out to confirm your visit.
            </p>

            {isSuccess ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-accent/10 p-8 text-center text-accent">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-semibold">Message Sent!</h4>
                <p className="text-sm text-muted-foreground/80">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 text-xs font-semibold underline hover:no-underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="John"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="lastName"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Doe"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(955) 252-6803"
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="concern"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Area of Concern
                  </label>
                  <select
                    id="concern"
                    name="concern"
                    required
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Select a specialty...</option>
                    <option value="joint">Joint Replacement</option>
                    <option value="sports">Sports Medicine</option>
                    <option value="spine">Spine Care</option>
                    <option value="pain">Pain Management</option>
                    <option value="foot">Foot & Ankle</option>
                    <option value="pt">Physical Therapy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="reason"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Tell Us More
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    placeholder="Describe your symptoms or the care you're seeking..."
                    rows={4}
                    className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="magnetic-btn glow-accent mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-all hover:shadow-xl hover:shadow-accent/20 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                  {isSubmitting ? null : <ArrowUpRight className="h-4 w-4" />}
                </button>
                <p className="text-center text-xs text-muted-foreground/60">
                  Your information is protected under HIPAA and never shared.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
