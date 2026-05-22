import { ChessBackground } from "@/components/chess-background"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CoursesPreview } from "@/components/courses-preview"
import { TeamSonicSection } from "@/components/team-sonic-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <ChessBackground />
      <HeroSection />
      <WhyChooseUs />
      <CoursesPreview />
      <TeamSonicSection />
      <CTASection />
    </>
  )
}
