import HeroSection from "@/components/Homepage/HeroSection";
import HowItWorks from "@/components/Homepage/How-it-works";
import Whychooseus from "@/components/Homepage/Why-choose-us";
import Testimonials from "@/components/Homepage/Testimonials";  
import CTAsection from "@/components/Homepage/CTAsection";

const Home = () => {
  return (
   <main>
     <HeroSection/>
     <HowItWorks/>
     <Whychooseus/>
     <Testimonials/>
      <CTAsection/>
   </main>
  )
}

export default Home 