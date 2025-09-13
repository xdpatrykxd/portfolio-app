import MetaHead from "@/components/MetaHead";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/About.module.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { projects } from "../../public/projects";
import ProjectCard from "@/components/ProjectCard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <MetaHead
        title="About – Lagoda Patryk"
        description="Over Lagoda Patryk: web developer met focus op gebruiksvriendelijke, performante webapps. Associate Degree (magna cum laude), nu Professional Bachelor Applied Computer Science."
        image="/images/portfolio-preview.jpg"
      />
      <Header />

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <section className={styles.aboutSection}>
            <h1>About Me</h1>

            <div className={styles.contentWrapper}>
              {/* LEFT COLUMN */}
              <div className={styles.aboutContent}>
                {/* Bio */}
                <section className={styles.bio}>
                  <div className={styles.bioImageContainer}>
                    <img
                      src="/profilePicture.png"
                      alt="Patryk Lagoda"
                      className={styles.bioImage}
                    />
                  </div>

                  <h2>Wie ben ik?</h2>
                  <p>
                    Ik ben Patryk, een web developer die houdt van het bouwen
                    van{" "}
                    <strong>
                      dynamische, responsieve en gebruiksvriendelijke
                    </strong>{" "}
                    webapplicaties. Onlangs behaalde ik mijn{" "}
                    <strong>
                      Associate Degree in Programming (magna cum laude)
                    </strong>{" "}
                    aan AP Hogeschool Antwerpen. Momenteel volg ik de{" "}
                    <strong>
                      Professional Bachelor Applied Computer Science
                    </strong>
                    , waar ik mijn kennis verder verdiep.
                  </p>
                  <p>
                    Ik werk graag <strong>full-stack</strong> met React, Next.js
                    en Node.js. Ik geniet ervan om complexe problemen te
                    vertalen naar intuïtieve interfaces met nette, onderhoudbare
                    code.
                  </p>
                </section>

                {/* Stage (kort) */}
                <section className={styles.stageInfo}>
                  <h2>Stage</h2>
                  <p>
                    Tijdens mijn stage heb ik ervaring opgedaan met
                    testautomatisering en het bouwen van een UI bovenop een
                    testframework. In mijn{" "}
                    <Link href="/blog" className="link2">
                      blog
                    </Link>{" "}
                    deel ik meer details en inzichten.
                  </p>
                </section>

                {/* Projecten */}
                <section className={styles.projects}>
                  <h2>Projecten</h2>
                  <p>Een selectie waar ik trots op ben:</p>

                  <div className={styles.projectDiv}>
                    {projects
                      .filter((project) => project.fav)
                      .map((project) => (
                        <div className={styles.project} key={project.title}>
                          <ProjectCard
                            fav={project.fav}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            onlineLink={project.onlineLink}
                            picture={project.picture}
                          />
                        </div>
                      ))}
                  </div>

                  <div style={{ marginTop: 12 }}>
                    <Link href="/projects" className={styles.readMore}>
                      Bekijk alle projecten →
                    </Link>
                  </div>
                </section>
              </div>

              {/* RIGHT COLUMN */}
              <div className={styles.skillsAndContact}>
                {/* Skills */}
                <section className={styles.skills}>
                  <h2>Skills</h2>
                  <ul className={styles.skillList}>
                    <li>JavaScript / TypeScript</li>
                    <li>React / Next.js</li>
                    <li>Node.js</li>
                    <li>ASP.NET / C#</li>
                    <li>HTML / CSS</li>
                    <li>MySQL</li>
                    <li>Git</li>
                    <li>Adobe Photoshop</li>
                    <li>Microsoft Office</li>
                  </ul>
                </section>

                {/* Contact */}
                <section className={styles.contact}>
                  <h2>📬 Contact</h2>
                  <p>Samenwerken of een vraag? Stuur gerust een bericht.</p>
                  <ul className={styles.contactList}>
                    <li>
                      <Link href="mailto:lagoda.patryk@gmail.com">
                        <p className="link">✉️ lagoda.patryk@gmail.com</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/in/patryk-lagoda-505a54309/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="link">💼 LinkedIn: /patryk-lagoda</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://github.com/xdpatrykxd"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className="link">🐙 GitHub: /xdpatrykxd</p>
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
