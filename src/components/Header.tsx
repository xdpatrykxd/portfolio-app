// components/Header.tsx
import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Lagoda Patryk
        </Link>
        <nav className={styles.nav}>
          <Link href="/about" className={styles.link}>About Me</Link>

          <Link href="/blog" className={styles.link}>Blog</Link>
          <Link href="/projects" className={styles.link}>My Projects</Link>
          
          <Link href="/resume" className={styles.link}>My Resume</Link>
        </nav>
      </div>
    </header>
  );
}
