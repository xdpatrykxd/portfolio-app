import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Projects.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  fav: boolean;
  onlineLink?: string;
  picture: string;
}

export default function ProjectCard({
  title,
  description,
  onlineLink,
  fav,
  link,
  picture,
}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={picture}
        alt={title}
        width={400}
        height={200}
        className={styles.cardImage}
      />
      <div className={styles.cardInfo}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.viewBtnContainer}>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            <p className="link">View on GitHub</p>
          </Link>
          {onlineLink && (
            <Link
              href={onlineLink}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <p className="link">View Online</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
