"use client"

import { motion } from "framer-motion"
import { ChessBackground } from "@/components/chess-background"
import { BookOpen, User, Clock, Zap, Check, MessageCircle, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    title: "Beginner Course",
    rating: "Rating: 0 - 800",
    description: "Perfect for children just starting their chess journey. Learn the fundamentals of chess including piece movements, basic tactics, and essential opening principles.",
    features: [
      "Chess basics & rules",
      "Piece movements & values",
      "Basic checkmate patterns",
      "Opening principles",
      "Simple tactics training",
      "Practice games with feedback"
    ],
    icon: BookOpen,
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400"
  },
  {
    title: "Intermediate Course",
    rating: "Rating: 800 - 1400",
    description: "Take your game to the next level with advanced strategies, complex tactics, and deeper understanding of positional play.",
    features: [
      "Advanced tactical patterns",
      "Positional understanding",
      "Opening repertoire building",
      "Endgame techniques",
      "Game analysis & review",
      "Tournament preparation"
    ],
    icon: TrendingUp,
    color: "from-cyan-500/20 to-teal-500/10",
    iconColor: "text-cyan-400"
  },
  {
    title: "Crash Course",
    rating: "Rating: 0 - 800 to Intermediate",
    description: "An intensive, fast-paced course designed to quickly build a strong foundation. Ideal for quick improvement.",
    features: [
      "Accelerated learning path",
      "Core concepts mastery",
      "Essential tactics training",
      "Focused opening study",
      "Quick improvement strategies",
      "Intensive practice sessions"
    ],
    icon: Zap,
    color: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-400"
  },
  {
    title: "1-to-1 Personal Coaching",
    rating: "All Levels",
    description: "Personalized coaching sessions tailored to your specific needs, goals, and playing style. Maximum attention and customized training.",
    features: [
      "Personalized curriculum",
      "Flexible scheduling",
      "Individual attention",
      "Custom game analysis",
      "Targeted improvement plan",
      "Direct coach communication"
    ],
    icon: User,
    color: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400",
    featured: true
  }
]

export default function CoursesPage() {
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
              Our Programs
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Courses for Every Level
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Structured courses designed for every skill level. Learn at your own pace with 
              expert guidance from our experienced coaches.
            </p>
          </motion.div>

          {/* Languages & Coaches Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-6 border border-border mb-12"
          >
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <div>
                <span className="text-muted-foreground text-sm">Available in:</span>
                <div className="flex gap-2 mt-2">
                  {["Hindi", "English", "Tamil"].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-primary/10 rounded-lg text-primary text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div>
                <span className="text-muted-foreground text-sm">Coaches:</span>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 bg-secondary rounded-lg text-secondary-foreground text-sm font-medium">Male</span>
                  <span className="px-3 py-1 bg-secondary rounded-lg text-secondary-foreground text-sm font-medium">Female</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-gradient-to-br ${course.color} rounded-2xl p-8 border border-border hover:border-primary/30 transition-all ${
                  course.featured ? "ring-2 ring-purple-500/30" : ""
                }`}
              >
                {course.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 text-xs font-medium">
                    POPULAR
                  </span>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-background/80 rounded-xl flex items-center justify-center shrink-0">
                    <course.icon className={`w-6 h-6 ${course.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{course.title}</h3>
                    <span className="text-sm text-muted-foreground">{course.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{course.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {course.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="https://wa.me/917013204364"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire Now
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Why Our Courses Work */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 sm:p-12 border border-border mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Why Our Courses Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Structured Learning",
                  description: "Well-organized curriculum that builds skills progressively, ensuring a solid foundation at every level."
                },
                {
                  title: "Practical Approach",
                  description: "Focus on real game situations, practical tactics, and applicable strategies you can use immediately."
                },
                {
                  title: "Continuous Support",
                  description: "Ongoing guidance from coaches, homework reviews, and access to our community for questions."
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Team Sonic CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-8 bg-[#25D366]/10 rounded-2xl border border-[#25D366]/20">
              <Users className="w-10 h-10 text-[#25D366] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Ready to Start?</h3>
              <p className="text-muted-foreground mb-4">Contact us on WhatsApp to learn more about enrollment</p>
              <Link
                href="https://wa.me/917013204364"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#25D366]/90 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with Us
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}
