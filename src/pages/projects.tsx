import MetaHead from "@/components/MetaHead";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Projects.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import WeddingCountdown from "@/components/WeddingCountdown";
import { projects } from "../../public/projects"; // optional

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function Projects() {
  return (
    <>
      <MetaHead
        title="Projects – Lagoda Patryk"
        description="Explore a selection of projects by Lagoda Patryk."
        image="/images/portfolio-preview.jpg"
      />
      <Header />
      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          <section className={styles.projectSection}>
            <h1>🚀 My Projects</h1>
            <p className={styles.intro}>
              Here's a selection of personal and professional projects I’ve worked on recently.
            </p>
            <div className={styles.grid}>
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  fav={project.fav}
                  title={project.title}
                  description={project.description}
                  link={project.link} 
                  onlineLink={project.onlineLink}
                  picture={project.picture}                />
              ))}
            </div>
          </section>
          <div className={styles.weddingCard}>
                <h2>💍 Countdown to My Wedding</h2>
                <p className={styles.intro}>
                  A very personal "project"!
                </p><div className={styles.timer}>
                  <WeddingCountdown weddingDate="2026-03-07T12:00:00" />
                </div>
              </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
