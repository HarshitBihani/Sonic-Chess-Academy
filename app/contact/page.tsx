"use client"

import { motion } from "framer-motion"
import { ChessBackground } from "@/components/chess-background"
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  ExternalLink,
  Instagram,
  Linkedin,
} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              Get in Touch
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Contact Us
            </h1>

            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Have questions about our courses or want to join Team Sonic? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-4">

                  {/* WhatsApp */}
                  <Link
                    href="https://wa.me/917013204364"
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>

                    <div>
                      <p className="text-foreground font-semibold">
                        WhatsApp (Recommended)
                      </p>
                      <p className="text-[#25D366]">
                        +91 7013204364
                      </p>
                    </div>
                  </Link>

                  {/* Phone */}
                  <Link
                    href="tel:+917013204364"
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <p className="text-foreground font-semibold">
                        Phone
                      </p>
                      <p className="text-muted-foreground">
                        +91 7013204364
                      </p>
                    </div>
                  </Link>

                  {/* Email */}
                  <Link
                    href="mailto:teamsonicsanatan@gmail.com"
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <p className="text-foreground font-semibold">
                        Email
                      </p>
                      <p className="text-muted-foreground">
                        teamsonicsanatan@gmail.com
                      </p>
                    </div>
                  </Link>

                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/sonic_chess_academy/"
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <p className="text-foreground font-semibold">
                        Instagram
                      </p>
                      <p className="text-muted-foreground">
                        @sonic_chess_academy
                      </p>
                    </div>
                  </Link>

                  {/* LinkedIn */}
                  <Link
                    href="https://www.linkedin.com/company/sonic-chess-academy/"
                    target="_blank"
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>

                    <div>
                      <p className="text-foreground font-semibold">
                        LinkedIn
                      </p>
                      <p className="text-muted-foreground">
                        Sonic Chess Academy
                      </p>
                    </div>
                  </Link>

                </div>
              </div>

              {/* Response Time */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <p className="text-foreground font-semibold">
                      Quick Response
                    </p>

                    <p className="text-muted-foreground text-sm">
                      We typically respond within 2–4 hours on WhatsApp
                    </p>
                  </div>

                </div>
              </div>

            </motion.div>

            {/* Right Side remains same */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Keep your existing Team Sonic and FAQ section unchanged */}
            </motion.div>

          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 flex items-center gap-4 border border-border"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>

            <div>
              <p className="text-foreground font-semibold">
                Online Academy
              </p>

              <p className="text-muted-foreground text-sm">
                All our classes are conducted online, making quality chess
                education accessible from anywhere in the world.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </>
  )
}
