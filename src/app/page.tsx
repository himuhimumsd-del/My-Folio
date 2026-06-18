import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { Services } from "@/components/sections/services"
import { BentoGrid } from "@/components/sections/bento-grid"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <Stats />
      <FeaturedProjects />
      <Services />
      <BentoGrid />
      <Contact />
    </div>
  )
}
