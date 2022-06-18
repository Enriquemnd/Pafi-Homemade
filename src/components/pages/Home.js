import { ContactUs } from "../sections/ContactUs/ContactUs"
import { FeaturedProducts } from "../sections/FeaturedProducts/FeaturedProducts"
import { Hero } from "../sections/Hero/Hero"

export const Home = () => {
  return (
    <div>
        <Hero/>
        <FeaturedProducts/>
        <ContactUs/>
    </div>
  )
}