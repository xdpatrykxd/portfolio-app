import MetaHead from "@/components/MetaHead";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/404.module.css";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { link } from "fs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <MetaHead
        title="Lagoda Patryk – Web Developer Portfolio"
        description="Welcome to the personal portfolio of Lagoda Patryk. Explore projects, skills, and experience as a passionate web developer."
        image="/images/portfolio-preview.jpg"
      />
<Header/>
<div className={styles.page}>
      <h1 className={styles.heading}>Oops! Page not found.</h1>
      <p className={styles.message}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <p className="link">Go back to Home</p>
      </Link>
    </div>
<Footer/>
    </>
  );
}
