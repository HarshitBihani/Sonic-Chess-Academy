"use client"

import { motion } from "framer-motion"
import { ChessBackground } from "@/components/chess-background"
import { Trophy, Calendar, Clock, Users, ExternalLink, Gift, Star, MessageCircle } from "lucide-react"
import Link from "next/link"

const completedTournaments = [
  {
    title: "Giveaway Tournament Arena",
    date: "17 May 2025",
    format: "3+0 Blitz Arena",
    duration: "1 Hour 30 Minutes",
    participants: "40 Players",
    prizes: [
      { place: "1st", prize: "Rs.150" },
      { place: "2nd", prize: "Rs.100" },
      { place: "3rd", prize: "Rs.75" },
      { place: "Best U1600", prize: "ChessMood Membership" },
      { place: "Best U2000", prize: "ChessMood Membership" }
    ],
    link: "https://lichess.org/tournament/L3ScxhEd"
  },
  {
    title: "ANICHESS TEAM BATTLE I",
    date: "16 May 2025",
    format: "3+1 Blitz Team Battle",
    duration: "2 Hours",
    participants: "1141 Players | 29 Teams",
    prizes: [{ place: "Prize Pool", prize: "$700 USD" }],
    link: "https://lichess.org/tournament/eQiOIvDu"
  },
  {
    title: "Membership Giveaway Tournament",
    date: "Coming Soon",
    format: "3+2 Arena",
    duration: "1 Hour",
    participants: "40 Players",
    prizes: [{ place: "Rewards", prize: "$200 worth Membership Giveaways" }],
    link: "https://lichess.org/tournament/N1x9X2Rx"
  }
]

export default function TournamentsPage() {
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
              Compete & Win
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Tournaments
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Compete in exciting tournaments with cash prizes and membership giveaways. 
              Join Team Sonic for all tournament updates.
            </p>
          </motion.div>

          {/* Team Sonic CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl p-8 sm:p-12 mb-16 text-center border border-border"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Join Team Sonic_Sanatan22</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              The competitive heart of Sonic Chess Academy — a growing chess community where 
              academy students and passionate players come together to compete, learn, and excel 
              through exciting cash prize and membership tournaments. Join for free!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://chat.whatsapp.com/EEVozZAhYJE6W6jF6rwrr8"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#25D366]/90 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp Group
              </Link>
              <Link
                href="https://lichess.org/team/team-sonic_sanatan22"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Join on Lichess
              </Link>
            </div>
          </motion.div>

          {/* Upcoming Tournaments */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Calendar className="text-primary" />
              Upcoming Tournaments
            </h2>
            <div className="bg-card rounded-2xl p-8 text-center border border-border">
              <motion.div 
                className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Trophy className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-4">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                New tournaments will be announced soon. Join our Team Sonic WhatsApp group 
                to be the first to know about upcoming events!
              </p>
              <p className="text-primary font-medium flex items-center justify-center gap-2">
                <Star className="w-4 h-4 fill-primary" />
                Stay tuned for exciting cash prizes and membership giveaways!
              </p>
            </div>
          </motion.section>

          {/* Completed Tournaments */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Trophy className="text-amber-400" />
              Completed Tournaments
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {completedTournaments.map((tournament, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-foreground">{tournament.title}</h3>
                    <Trophy className="text-amber-400 shrink-0" size={24} />
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <Calendar size={16} className="text-primary" />
                      <span>{tournament.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <Clock size={16} className="text-primary" />
                      <span>{tournament.format} | {tournament.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground text-sm">
                      <Users size={16} className="text-primary" />
                      <span>{tournament.participants}</span>
                    </div>
                  </div>

                  {/* Prizes */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-primary mb-3 flex items-center gap-2">
                      <Gift size={14} />
                      Prize Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {tournament.prizes.map((prize, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-lg text-amber-400 text-xs"
                        >
                          {prize.place}: {prize.prize}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <Link
                    href={tournament.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium text-sm"
                  >
                    View Tournament on Lichess
                    <ExternalLink size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  )
}
