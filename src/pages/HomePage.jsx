import AboutSection from "../Components/sections/AboutSection";
import FeatureSection from "../Components/sections/FeatureSection";
import FrequentQuestions from "../Components/sections/FrequentQuestions";
import HeroSection from "../Components/sections/HeroSection";
import HowItWorksSection from "../Components/sections/HowItWorksSection";
import OurDoctorsSection from "../Components/sections/OurDoctorsSection";
import ServicesSection from "../Components/sections/ServicesSection";
import TestimonialsSection from "../Components/sections/TestimonialsSection";

// LANDING/HOME  PAGE
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <AboutSection />
      <ServicesSection />
      <FeatureSection />
      <OurDoctorsSection />
      <FrequentQuestions />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
