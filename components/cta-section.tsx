"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-background to-background" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 p-12 bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-3xl border border-primary/20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Start Your Child&apos;s Chess Journey Today
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Give your child an opportunity to learn, think strategically, and grow through chess. 
            Book a free demo session to see how we can help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="https://wa.me/917013204364"
              target="_blank"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all glow-blue"
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 border border-border transition-all"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>WhatsApp: +91 7013204364</span>
            <span className="hidden sm:inline">|</span>
            <span>teamsonicsanatan@gmail.com</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
