import { Hero } from '../components/Hero';
import { Products } from '../components/Products';
import { About } from '../components/About';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
