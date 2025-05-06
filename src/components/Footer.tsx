// components/Footer.tsx
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Built by Lagoda Patryk.</p>
      <p>© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}
