// pages/index.tsx
import MetaHead from "@/components/MetaHead";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getPosts } from "@/utils/getPosts";
import { Post } from "@/utils/types";

// 👉 Zelfde data + kaartcomponent als op /about
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

export async function getStaticProps() {
  const posts = getPosts();
  const latestPost = posts[0]; // Assuming sorted by date

  // Selecteer favoriete projecten (zoals op About), toon er bv. 3
  const featuredProjects = projects.filter((p) => p.fav).slice(0, 3);

  return {
    props: {
      latestPost,
      featuredProjects,
    },
  };
}

export default function Home({
  latestPost,
  featuredProjects,
}: {
  latestPost: Post;
  featuredProjects: typeof projects;
}) {
  return (
    <>
      <MetaHead
        title="Portfolio – Lagoda Patryk"
        description="Ik ben Lagoda Patryk, web developer. Bekijk mijn projecten, skills en lees mijn blog (o.a. over mijn stage bij Brightest)."
        image="/images/portfolio-preview.jpg"
      />

      <Header />

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          {/* Hero */}
          <section className={styles.hero}>
            <Image
              src="/profilePicture.png"
              alt="Lagoda Patryk"
              width={140}
              height={140}
              className={styles.avatar}
            />
            <h1>
              Lagoda Patryk –{" "}
              <span className={styles.highlight}>Web Developer</span>
            </h1>
            <p className={styles.subtitle}>
              Welkom op mijn portfolio.
            </p>
          </section>

          {/* Snel overzicht */}
          <section className={styles.quickIntro}>
            <h2>Wat vind je hier?</h2>
            <p>
              Een selectie van projecten (school, eigen werk en stage), mijn
              vaardigheden & aanpak, en artikelen over mijn leerproces.
            </p>
          </section>

          {/* ✅ Uitgelichte projecten met dezelfde bron/kaart als op About */}
          {featuredProjects?.length > 0 && (
            <section aria-labelledby="featured-projects">
              <h2 id="featured-projects">Uitgelichte projecten</h2>

              {/* Inline grid zodat je geen nieuwe CSS hoeft aan te maken */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "16px",
                  marginTop: "12px",
                }}
              >
                {featuredProjects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    fav={project.fav}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    onlineLink={project.onlineLink}
                    picture={project.picture}
                  />
                ))}
              </div>

              <div style={{ marginTop: 12 }}>
                <Link href="/projects" className={styles.readMore}>
                  Bekijk alle projecten →
                </Link>
              </div>
            </section>
          )}

          {/* Laatste blogpost (incl. stageposts) */}
          {latestPost && (
            <section className={styles.latestPost}>
              <h2>Laatste blogpost</h2>
              <div className={styles.postPreview}>
                <Image
                  src={latestPost.image}
                  alt={`Image for ${latestPost.title}`}
                  width={200}
                  height={120}
                  className={styles.postImage}
                />
                <div>
                  <h3>{latestPost.title}</h3>
                  <p>{latestPost.excerpt}</p>
                  <Link
                    href={`/blog/${latestPost.slug}`}
                    className={styles.readMore}
                  >
                    Lees verder →
                  </Link>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>

      <Footer />
    </>
  );
}
