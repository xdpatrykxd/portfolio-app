// components/Header.tsx
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Lagoda Patryk
        </Link>

        <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? "✕" : "☰"}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
          <Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>About Me</Link>
          <Link href="/blog" className={styles.link} onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="/projects" className={styles.link} onClick={() => setIsOpen(false)}>My Projects</Link>
          <Link href="/resume" className={styles.link} onClick={() => setIsOpen(false)}>My Resume</Link>
        </nav>
      </div>
    </header>
  );
}
