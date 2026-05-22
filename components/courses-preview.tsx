"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, TrendingUp, Zap, User } from "lucide-react"

const courses = [
  {
    icon: TrendingUp,
    title: "Beginner Course",
    rating: "0 - 800",
    description: "Perfect for students beginning their chess journey. Learn the fundamentals, piece movements, basic tactics, and essential opening principles.",
    features: ["Piece movements & rules", "Basic tactics & patterns", "Opening principles", "Endgame basics"],
    color: "from-blue-500/20 to-cyan-500/10"
  },
  {
    icon: Zap,
    title: "Intermediate Course",
    rating: "800 - 1400",
    description: "For students looking to improve their understanding and gameplay. Dive deeper into strategy, advanced tactics, and positional play.",
    features: ["Advanced tactics", "Positional understanding", "Opening theory", "Middle game strategy"],
    color: "from-cyan-500/20 to-teal-500/10"
  },
  {
    icon: Clock,
    title: "Crash Course",
    rating: "0 - 800 to Intermediate",
    description: "Fast-track learning program for quick improvement. Intensive training to rapidly boost your rating and understanding.",
    features: ["Accelerated learning", "Intensive practice", "Quick rating boost", "Targeted improvement"],
    color: "from-amber-500/20 to-orange-500/10"
  },
  {
    icon: User,
    title: "1-to-1 Personal Coaching",
    rating: "All Levels",
    description: "Personalized coaching designed around each student. Get individual attention and a customized training plan.",
    features: ["Personalized curriculum", "Flexible scheduling", "Game analysis", "Targeted weaknesses"],
    color: "from-purple-500/20 to-pink-500/10"
  }
]

export function CoursesPreview() {
  return (
    <section className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
            Our Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Courses for Every Level
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Structured learning paths designed to take you from your first move to mastery
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative p-6 bg-gradient-to-br ${course.color} rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <course.icon className="w-full h-full text-foreground" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-background/80 rounded-xl flex items-center justify-center">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 bg-background/80 rounded-full text-xs font-medium text-muted-foreground">
                    {course.rating}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{course.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all glow-blue"
          >
            View All Courses
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
