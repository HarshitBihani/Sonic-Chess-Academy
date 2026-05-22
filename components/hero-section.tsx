"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, BookOpen, Play } from "lucide-react"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Animated chess board pattern behind hero */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, oklch(0.55 0.25 230 / 0.3) 48%, oklch(0.55 0.25 230 / 0.3) 52%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, oklch(0.55 0.25 230 / 0.3) 48%, oklch(0.55 0.25 230 / 0.3) 52%, transparent 52%)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Sonic Chess Academy"
                width={180}
                height={180}
                className="w-40 h-40 sm:w-48 sm:h-48 object-contain drop-shadow-[0_0_30px_oklch(0.55_0.25_230_/_0.5)]"
                priority
              />
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-4 h-4 text-primary fill-primary" />
            </motion.div>
            <span className="text-sm text-primary font-medium">Where Champions Begin Their Journey</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance"
          >
            Every Great Journey{" "}
            <br className="hidden sm:block" />
            <span className="relative">
              <span className="text-primary glow-text">Begins with One Move</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty"
          >
            Helping young minds learn strategy, build confidence, and grow through chess. 
            Expert coaching available in <span className="text-primary font-medium">Hindi</span>, <span className="text-primary font-medium">English</span>,<span className="text-primary font-medium">Marathi</span> & <span className="text-primary font-medium">Tamil</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="https://wa.me/917013204364"
              target="_blank"
              className="group relative flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold overflow-hidden transition-all glow-blue hover:shadow-[0_0_30px_oklch(0.55_0.25_230_/_0.6)]"
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative">Start Free Demo</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/courses"
              className="group flex items-center gap-2 px-8 py-4 bg-secondary/50 text-secondary-foreground rounded-xl font-semibold border border-border hover:border-primary/50 hover:bg-secondary transition-all backdrop-blur-sm"
            >
              <Play className="w-5 h-5 text-primary" />
              Explore Courses
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 pt-16 max-w-lg mx-auto"
          >
            {[
              { icon: BookOpen, label: "Course Levels", value: "4", color: "text-cyan-400" },
              { icon: Star, label: "Languages", value: "3", color: "text-purple-400" },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="group relative text-center space-y-2 p-4 sm:p-6 bg-card/50 rounded-2xl border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all cursor-default"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className={`w-6 h-6 ${stat.color} mx-auto relative`} />
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold text-foreground relative"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-muted-foreground relative">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  )
}
