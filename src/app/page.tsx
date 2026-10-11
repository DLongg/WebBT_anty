import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { StatsSection } from "@/sections/StatsSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { AboutSection } from "@/sections/AboutSection";
import { PartnerSection } from "@/sections/PartnerSection";
import { NewsSection } from "@/sections/NewsSection";
import { CTASection } from "@/sections/CTASection";
import { getAllProjects } from "@/lib/projects";
import { selectFeaturedProjects } from "@/data/homepage";

export default function Home() {
  const projects = getAllProjects();
  const featured = selectFeaturedProjects(projects);
  return (
    <>
      <Header />
      <HeroSection projects={projects.slice(0, 5)} />
      <StatsSection projectCount={projects.length} />
      <ServicesSection />
      <ProjectsSection projects={featured} />
      <AboutSection />
      <NewsSection />
      <PartnerSection />
      <CTASection />
      <Footer />
    </>
  );
}
