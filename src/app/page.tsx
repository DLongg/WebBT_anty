import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { CoreValuesSection } from "@/sections/CoreValuesSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { WhyChooseSection } from "@/sections/WhyChooseSection";
import { StatsSection } from "@/sections/StatsSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TestimonialSection } from "@/sections/TestimonialSection";
import { NewsSection } from "@/sections/NewsSection";
import { PartnerSection } from "@/sections/PartnerSection";
import { CTASection } from "@/sections/CTASection";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  const allProjects = getAllProjects();
  const featuredProjects = allProjects.slice(0, 5);
  return (
    <>
      <Header />
      <HeroSection projects={featuredProjects} />
      {/* White → dark → white flow for visual rhythm */}
      <AboutSection />
      <CoreValuesSection />
      <ServicesSection />
      <WhyChooseSection />
      <StatsSection />
      <ProcessSection />
      <ProjectsSection />
      <NewsSection />
      <TestimonialSection />
      <PartnerSection />
      <CTASection />
      <Footer />
    </>
  );
}
