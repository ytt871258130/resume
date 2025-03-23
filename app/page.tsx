import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons"
import { Feature } from "@/components/ui/feature-section-with-bento-grid"

export default function Home() {
  return (
    <>
      <div className="block">
        <Hero />
      </div>
      <Feature />
    </>
  )
}
