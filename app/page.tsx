import HomeHero from "@/components/home/HomeHero";
import HomeMetrics from "@/components/home/HomeMetrics";
import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";
import HomeCerts from "@/components/home/HomeCerts";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeMetrics />
      <HomeCerts />
      <HomeAbout />
      <HomeProjects />
    </>
  );
}
