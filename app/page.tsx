import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { ProblemsAlt } from '@/components/ProblemsAlt'
import { BridgeAlt3 } from '@/components/BridgeAlt3'
import { CaseStudies } from '@/components/CaseStudies'
import { SolutionAlt } from '@/components/SolutionAlt'
import { WhatYouGet } from '@/components/WhatYouGet'
import { ProcessAlt } from '@/components/ProcessAlt'
import { ThreePerspectives } from '@/components/ThreePerspectives'
import { TeamAlt } from '@/components/TeamAlt'
import { FAQ } from '@/components/FAQ'
import { CTASection } from '@/components/CTASection'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemsAlt />
        <BridgeAlt3 />
        <CaseStudies />
        <SolutionAlt />
        <WhatYouGet />
        <ProcessAlt />
        <ThreePerspectives />
        <TeamAlt />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
