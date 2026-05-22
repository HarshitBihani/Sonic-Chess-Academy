"use client"

import { motion } from "framer-motion"
import { Target, Brain, Users, Trophy, Heart, Sparkles } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Structured Learning",
    description: "Progressive curriculum from beginner to advanced levels, designed for systematic skill development"
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description: "Develops concentration, decision-making, and strategic thinking abilities in young minds"
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Personalized coaching options including 1-to-1 sessions tailored to each student"
  },
  {
    icon: Trophy,
    title: "Competitive Edge",
    description: "Regular tournaments with cash prizes and membership rewards for competitive players"
  },
  {
    icon: Heart,
    title: "Supportive Environment",
    description: "Nurturing atmosphere focused on building confidence alongside chess skills"
  },
  {
    icon: Sparkles,
    title: "Flexible & Affordable",
    description: "Programs designed to fit your schedule and budget, helping students improve step by step"
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            Why Parents Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            More Than Just Chess Lessons
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            We believe chess is more than just a game — it&apos;s a journey of learning, 
            confidence, strategy, and growth.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Languages & Coaches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-background rounded-2xl border border-primary/20 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div>
              <span className="text-sm text-muted-foreground">Available in</span>
              <div className="flex gap-2 mt-2">
                {["Hindi", "English", "Tamil"].map((lang) => (
                  <span key={lang} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div>
              <span className="text-sm text-muted-foreground">Coaching Options</span>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                  Male Coaches
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                  Female Coaches
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
