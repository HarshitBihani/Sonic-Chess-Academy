"use client"

import { motion } from "framer-motion"
import { ChessBackground } from "@/components/chess-background"
import { Award, MessageCircle, Star, Users, Languages, Heart } from "lucide-react"
import Link from "next/link"

const coaches = [
  {
    name: "Expert Male Coach",
    specialization: "All Levels",
    languages: ["Hindi", "English"],
    description: "Experienced coach specializing in beginner to intermediate training with a focus on tactical improvement.",
    highlights: ["Patient teaching style", "Tactical training", "Game analysis"]
  },
  {
    name: "Expert Female Coach",
    specialization: "Beginners & Kids",
    languages: ["English", "Tamil"],
    description: "Dedicated to creating a comfortable learning environment for young players and those new to chess.",
    highlights: ["Kid-friendly approach", "Structured basics", "Encouraging atmosphere"]
  }
]

const qualities = [
  {
    icon: Award,
    title: "Experienced Players",
    description: "Our coaches have years of competitive experience and proven track records in developing students."
  },
  {
    icon: Heart,
    title: "Passionate Educators",
    description: "More than just skilled players — they are dedicated educators who love helping students grow."
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description: "Coaching available in Hindi, English, and Tamil to ensure clear communication."
  },
  {
    icon: Star,
    title: "Personalized Attention",
    description: "Every student receives individual guidance tailored to their learning style and goals."
  }
]

export default function CoachesPage() {
  return (
    <>
      <ChessBackground />
      <div className="min-h-screen pt-28 pb-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Meet the Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Coaches
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Learn from passionate educators who combine their love for chess with proven teaching 
              methods to help you reach your potential.
            </p>
          </motion.div>

          {/* Coach Qualities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <quality.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{quality.title}</h3>
                  <p className="text-muted-foreground text-sm">{quality.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Our Coaches */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Coaching Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coaches.map((coach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all"
                >
                  {/* Avatar */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{coach.name}</h3>
                    <p className="text-primary text-sm">{coach.specialization}</p>
                  </div>

                  <p className="text-muted-foreground text-sm text-center mb-6 leading-relaxed">
                    {coach.description}
                  </p>

                  {/* Languages */}
                  <div className="flex items-center justify-center gap-2 mb-6">
                    {coach.languages.map((lang, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 rounded-lg text-primary text-xs font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {coach.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Languages Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-card rounded-3xl p-8 border border-border text-center">
              <Languages className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-4">Coaching Available In</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {["Hindi", "English", "Tamil"].map((lang) => (
                  <div key={lang} className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-xl">
                    <span className="text-foreground font-medium">{lang}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4">
                Language should never be a barrier to learning chess
              </p>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-12 bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-3xl border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us to learn more about our coaching options and find the perfect match for your learning goals.
              </p>
              <Link
                href="https://wa.me/917013204364"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all glow-blue"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us on WhatsApp
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}
