// pages/resume.tsx
import MetaHead from "@/components/MetaHead";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Resume.module.css";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Resume() {
  return (
    <>
      <MetaHead
        title="Lagoda Patryk – Resume"
        description="View and download the resume of Lagoda Patryk, web developer skilled in React, Next.js, and TypeScript."
        image="/images/portfolio-preview.jpg"
      />
      <Header />
      <div className={styles.page}>
        <h1>My Resume</h1>
        <p className={styles.message}>
          View the embedded resume below or download it as a PDF.
        </p>
        <div>
          <iframe
            src="/2425_CV_patryklagoda_1-1.pdf"
            className={styles.resumeViewer}
          />
        </div>
        <div>
          <Link href="/">
            <p className="link">← Back to Home</p>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
