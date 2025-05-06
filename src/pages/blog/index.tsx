import MetaHead from "@/components/MetaHead";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Blog.module.css"; // Import the updated styles
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { getPosts } from "@/utils/getPosts"; // Import the function to fetch posts
import { Post } from "@/utils/types"; // Import the Post type

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define the props for the Blog component
interface BlogProps {
  posts: Post[]; // The 'posts' prop should always be an array
}

// The Blog component that will render the list of posts
import { useState } from "react";

export default function Blog({ posts }: BlogProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags || [])));

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags?.includes(selectedTag))
    : posts;

  if (!posts || posts.length === 0) {
    return (
      <div>
        <p>No posts available yet. Please check back later!</p>
      </div>
    );
  }

  return (
    <>
      <MetaHead
        title="Blog – Lagoda Patryk"
        description="Read the latest posts about web development, technology, and my journey."
        image="/images/portfolio-preview.jpg"
      />
      <Header />
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <section className={styles.blogSection}>
            <h1 className={styles.blogTitle}>Welkom bij mijn blog</h1>

            <p className={styles.intro}>
              Als student programmeren ben ik altijd geboeid geweest door
              technologie, innovatie en hoe bedrijven in de praktijk werken.
              Toen ik de kans kreeg om stage te lopen bij
              <strong> Brightest</strong>, wist ik meteen dat dit een
              waardevolle ervaring zou worden. In deze blog neem ik je mee op
              mijn reis, deel ik inzichten, lessen en persoonlijke groei terwijl
              ik me verdiep in de wereld van software testing.
            </p>

            <blockquote className={styles.quote}>
              "Learning by doing, growing by sharing." – Mijn motto tijdens deze
              stage bij Brightest
            </blockquote>

            <h2>Over Brightest</h2>
            <p>
              <strong>Brightest</strong> is een Belgisch consultancybedrijf
              gespecialiseerd in softwarekwaliteit en testing. Ze ondersteunen
              bedrijven bij het realiseren van betrouwbare software door
              kwaliteitsbewaking, testautomatisatie en procesoptimalisatie. Met
              een hecht team van consultants en een focus op samenwerking en
              persoonlijke groei, maken ze écht het verschil.
            </p>

            <div className={styles.logoContainer}>
              <img
                src="/brightestLogo.png"
                alt="Brightest Logo"
                className={styles.brightestLogo}
              />
              <address className={styles.address}>
                <strong>Brightest HQ</strong>
                <br />
                Satenrozen 10
                <br />
                2550 Kontich, Belgium
              </address>
            </div>

            <p>
              In deze blog deel ik mijn reflecties over het werken bij
              Brightest, de projecten waaraan ik meewerk, de vaardigheden die ik
              ontwikkel en de uitdagingen die ik onderweg tegenkom. Het doel?
              Transparantie bieden in hoe het is om als student de stap te
              zetten naar de professionele wereld.
            </p>

            <p>
              Bedankt dat je meeverloopt op deze reis. Ik kijk ernaar uit om
              mijn ervaringen te blijven delen en hopelijk ook jou te inspireren
              in je eigen groeipad binnen tech!
            </p>
            <h2 className={styles.sectionTitle}>Filter op categorie</h2>
            <div className={styles.tagFilter}>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`${styles.tagButton} ${
                    selectedTag === tag ? styles.activeTag : ""
                  }`}
                  onClick={() =>
                    setSelectedTag(tag === selectedTag ? null : tag)
                  }
                >
                  #{tag}
                </button>
              ))}
            </div>

            <h2 className={styles.sectionTitle}>Blogposts</h2>

            <div className={styles.posts}>
              {filteredPosts.map((post) => (
                <div key={post.slug} className={styles.post}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className={styles.flex}>
                      <img
                        src={post.image}
                        alt={`Image for ${post.title}`}
                        className={styles.postImage}
                      />
                      <section>
                        <h3 className={styles.postTitle}>{post.title}</h3>
                        <p className={styles.postExcerpt}>{post.excerpt}</p>
                        <div className={styles.tagList}>
                          {post.tags?.map((tag) => (
                            <span key={tag} className={styles.tag}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </section>
                    </div>
                    <p className={styles.readMore}>Lees verder →</p>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}

// Fetch posts during build time (Static Site Generation)
export async function getStaticProps() {
  const posts = getPosts();

  console.log("Fetched Posts: ", posts); // Log posts to check if it's being fetched correctly

  return {
    props: {
      posts: posts || [], // Ensure posts is always an array
    },
  };
}
