"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Users, ExternalLink, MessageCircle } from "lucide-react"

export function TeamSonicSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Competitive Community</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Team Sonic_Sanatan22
          </h2>
          
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            The competitive heart of Sonic Chess Academy — a growing chess community where academy 
            students and passionate players come together to compete, learn, and excel through 
            exciting cash prize and membership tournaments. Stay updated with upcoming chess 
            tournament details, join for free, engage with the community, and play with chess 
            enthusiasts from across the globe.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-background rounded-2xl border border-border hover:border-[#25D366]/50 transition-all group"
          >
            <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Join Team Sonic WhatsApp</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get instant updates about tournaments, prizes, and community events. Free to join!
            </p>
            <Link
              href="https://chat.whatsapp.com/EEVozZAhYJE6W6jF6rwrr8"
              target="_blank"
              className="inline-flex items-center gap-2 text-[#25D366] font-medium text-sm hover:underline"
            >
              Join WhatsApp Group
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all group"
          >
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Join on Lichess</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Become a member of our official Lichess team and participate in exclusive tournaments.
            </p>
            <Link
              href="https://lichess.org/team/team-sonic_sanatan22"
              target="_blank"
              className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline"
            >
              Join Team on Lichess
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
