import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Sonic Chess Academy"
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Helping young minds learn strategy, build confidence, and grow through chess.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Courses", "Coaches", "Tournaments", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="https://wa.me/917013204364" className="hover:text-primary transition-colors">
                  +91 7013204364
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:teamsonicsanatan@gmail.com" className="hover:text-primary transition-colors">
                  teamsonicsanatan@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Join Our Community</h4>
            <div className="space-y-3">
              <Link
                href="https://chat.whatsapp.com/EEVozZAhYJE6W6jF6rwrr8"
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366]/20 text-[#25D366] rounded-lg text-sm font-medium hover:bg-[#25D366]/30 transition-colors"
              >
                Join Team Sonic WhatsApp
              </Link>
              <Link
                href="https://lichess.org/team/team-sonic_sanatan22"
                target="_blank"
                className="block text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Lichess: Team Sonic_Sanatan22
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sonic Chess Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
