import MetaHead from "@/components/MetaHead";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Projects.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import WeddingCountdown from "@/components/WeddingCountdown";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function Projects() {
  return (
    <>
      <MetaHead
        title="Projects – Lagoda Patryk"
        description="Explore a selection of projects by Lagoda Patryk."
        image="/images/portfolio-preview.jpg"
      />
      <Header />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <section className={styles.projectSection}>
            <h1>🚀 My Projects</h1>
            <p className={styles.intro}>
              Here's a selection of personal and professional projects I’ve
              worked on recently.
            </p>
            <div className={styles.grid}>
              <div className={styles.card}>
                <h2>Portfolio Website</h2>
                <p>
                  Built using Next.js and a VPS, this site showcases my skills
                  and projects with a sleek UI and responsive design.
                </p>
                <Link
                  href="https://github.com/xdpatrykxd/portfolio-app.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="link">View on GitHub</p>
                </Link>
              </div>

              <div className={styles.card}>
                <h2>MyFirstAPI </h2>
                <p>
                  Small RESTful API built using ASP.NET Core (C#). This project
                  demonstrates the use of Models, Controllers, Services, Data
                  Layer, and Migrations in a structured API project.
                </p>
                <Link
                  href="https://github.com/xdpatrykxd/MyFirstAPI.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="link">View on GitHub</p>
                </Link>
              </div>
              <div className={styles.card}>
                <h2>ZSocialMedia </h2>
                <p>
                  A lightweight and minimal example of a social media site,
                  built using TypeScript, EJS, and CSS. This project
                  demonstrates basic user interfaces, chat-style messaging, and
                  dynamic content rendering — ideal as a learning tool or
                  boilerplate for more advanced apps.
                </p>
                <Link
                  href="git@github.com:xdpatrykxd/ZSocialMedia.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="link">View on GitHub</p>
                </Link>
              </div>
              <div className={styles.card}>
                <h2>💍 Countdown to My Wedding</h2>
                <p className={styles.intro}>
                  A very personal "project" — the most exciting launch of my
                  life!
                </p>
                <div className="p-4 rounded-xl shadow-lg bg-white text-center">
                  <WeddingCountdown weddingDate="2026-03-07T12:00:00" />
                </div>
              </div>
              {/* Add more project cards as needed  */}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
