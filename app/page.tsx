import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { ProblemsAlt } from '@/components/ProblemsAlt'
import { BridgeAlt3 } from '@/components/BridgeAlt3'
import { CaseStudies } from '@/components/CaseStudies'
import { SolutionAlt } from '@/components/SolutionAlt'
import { WhatYouGet } from '@/components/WhatYouGet'
import { ProcessAlt } from '@/components/ProcessAlt'
import { ThreePerspectivesV2 } from '@/components/ThreePerspectivesV2'
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
        <ThreePerspectivesV2 />
        <TeamAlt />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
