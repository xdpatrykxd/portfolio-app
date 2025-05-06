// pages/index.tsx
import MetaHead from "@/components/MetaHead";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { getPosts } from "@/utils/getPosts"; // Zorg dat je dit hebt
import { Post } from "@/utils/types";

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

  return {
    props: {
      latestPost,
    },
  };
}

export default function Home({ latestPost }: { latestPost: Post }) {
  return (
    <>
      <MetaHead
        title="Stage bij Brightest – Lagoda Patryk"
        description="Welkom op mijn blog over mijn stage bij Brightest! Volg mijn ervaringen, projecten en lessen die ik heb geleerd."
        image="/images/portfolio-preview.jpg"
      />

      <Header />

      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <Image
              src="/profilePicture.png"
              alt="Lagoda Patryk"
              width={140}
              height={140}
              className={styles.avatar}
            />
            <h1>
              Mijn <span className={styles.highlight}>Stage bij Brightest</span>
            </h1>
            <p className={styles.subtitle}>
              Welkom! Ik ben Patryk, een gepassioneerde web developer. Op deze website deel ik mijn ervaringen, projecten en lessen tijdens mijn stage bij Brightest.
            </p>
            <Link href="/blog" className={styles.ctaButton}>
              Lees mijn blogposts →
            </Link>
          </section>

          {/* Over de stage */}
          <section className={styles.quickIntro}>
            <h2>Wat kan je hier vinden?</h2>
            <p>
              Deze site is bedoeld voor mentoren, begeleiders en iedereen die benieuwd is naar mijn groei en ervaring. Je vindt hier blogposts over mijn projecten, uitdagingen en persoonlijke groei tijdens de stage.
            </p>
          </section>

          {/* Laatste blogpost teaser */}
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
                  <Link href={`/blog/${latestPost.slug}`} className={styles.readMore}>
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
