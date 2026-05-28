import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import LogoCloud from '../components/LogoCloud.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import WhyVolumetree from '../components/WhyVolumetree.jsx'
import Methodology from '../components/Methodology.jsx'
import Ideology from '../components/Ideology.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import CTA from '../components/CTA.jsx'

const faqs = [
  {
    q: 'What does Volumetree actually do?',
    a: 'We are an end-to-end product engineering company. We design, build and operate digital products — from strategy and discovery through engineering, AI, launch and post-launch operations. Founders hire us to ship v1. Enterprises hire us to modernize and accelerate.',
  },
  {
    q: 'How is Volumetree different from a traditional agency or SI?',
    a: 'Agencies hand off prototypes and bill by the hour. SIs bring 40-person teams that move quarterly. We bring a small senior squad with one accountability line, ship in weeks instead of quarters, and own outcomes end-to-end. Same scope, very different operating model.',
  },
  {
    q: 'What kind of clients do you typically work with?',
    a: 'A roughly even split between funded startups going from idea to in-market product, and enterprise teams launching new platforms or modernizing legacy ones. Across 11 years we have shipped in 17+ industries — fintech, logistics, healthcare, retail, edtech and more.',
  },
  {
    q: 'How long do engagements usually run?',
    a: 'Anything from a 4-week consultation to multi-quarter embedded squads. Most product builds land between 8 and 16 weeks for v1, with optional long-running scale-and-operate teams afterward.',
  },
  {
    q: "What does it actually cost?",
    a: 'Discovery sprints start at $15k. Full v1 product builds typically land between $60k and $120k. Enterprise engagements are scoped after a paid discovery. We are not the cheapest — we are the team that ships what others quote 4-6 months for.',
  },
  {
    q: 'Where is Volumetree based?',
    a: 'Headquartered in Mohali, India, with squads operating across Dubai and Toronto. We work remotely with clients globally and travel for kickoff and major milestones when it matters.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Services />
      <CaseStudies />
      <WhyVolumetree />
      <Methodology />
      <Ideology />
      <Testimonials />
      <FAQ items={faqs} />
      <CTA
        eyebrow="Let’s build something"
        title="Tell us what you want to build."
        body="If it’s a real problem, we will tell you what it takes to build it and how fast we can ship. If it isn’t, we will tell you that too."
      />
    </>
  )
}
