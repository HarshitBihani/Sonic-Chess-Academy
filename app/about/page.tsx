"use client"

import { motion } from "framer-motion"
import { ChessBackground } from "@/components/chess-background"
import { Target, Heart, Award, Globe, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make quality chess education accessible to every child, helping them develop critical thinking skills through the game they love."
  },
  {
    icon: Globe,
    title: "Our Vision",
    description: "To build a supportive community where young chess players can learn, grow, and compete at their own pace."
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Patience, encouragement, and a genuine love for teaching drive everything we do. Every child learns differently."
  },
  {
    icon: Award,
    title: "Our Promise",
    description: "Personalized attention, affordable programs, and a nurturing environment for every student."
  }
]

const features = [
  {
    title: "Experienced Coaches",
    description: "Our coaches are passionate educators with experience in competitive chess and a track record of developing successful students."
  },
  {
    title: "Multilingual Support",
    description: "We offer coaching in Hindi, English, and Tamil, ensuring language is never a barrier to learning chess."
  },
  {
    title: "Flexible Learning",
    description: "From group courses to personalized 1-on-1 sessions, we offer flexible learning options to suit your schedule."
  },
  {
    title: "Active Community",
    description: "Join Team Sonic — our vibrant WhatsApp community where players discuss strategies and stay updated on tournaments."
  },
  {
    title: "Regular Tournaments",
    description: "Put your skills to the test in our regular cash prize and membership giveaway tournaments on Lichess."
  },
  {
    title: "Welcoming Environment",
    description: "We have both male and female coaches available, creating a comfortable environment for all chess enthusiasts."
  }
]

export default function AboutPage() {
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
            <div className="flex justify-center mb-6">
              <Image
                src="/logo.png"
                alt="Sonic Chess Academy"
                width={120}
                height={120}
                className="w-28 h-28 object-contain"
              />
            </div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Helping Young Minds Grow Through Chess
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Sonic Chess Academy is dedicated to nurturing chess talent in children through 
              patient guidance, structured learning, and a supportive community.
            </p>
          </motion.div>

          {/* Who We Are */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Sonic Chess Academy is an online chess training platform built for young learners. 
                  Founded by passionate chess players and educators, we believe chess is more than 
                  just a game  it&apos;s a powerful tool for developing critical thinking, strategic 
                  planning, and mental discipline in children.
                </p>
                <p>
                  Our academy brings together experienced coaches, children friendly teaching methods, 
                  and a supportive community to create an environment where young players can thrive. 
                  Whether your child is taking their first steps in chess or preparing for competitive 
                  play, Sonic Chess Academy is here to guide them.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Mission, Vision, Values */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* What Sets Us Apart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-card rounded-3xl p-8 sm:p-12 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">What Sets Us Apart</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Join Us CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="p-12 bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-3xl border border-primary/20">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Join the Sonic Family</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether your child is a complete beginner or looking to sharpen their skills, 
                Sonic Chess Academy has the right program for them. Take the first step towards 
                chess mastery today.
              </p>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all glow-blue"
              >
                Explore Our Courses
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}
