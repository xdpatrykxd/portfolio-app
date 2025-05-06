// components/MetaHead.tsx
import Head from "next/head";

interface MetaHeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const MetaHead: React.FC<MetaHeadProps> = ({ title, description, image }) => {
  const defaultTitle = "My Web Developer Portfolio";
  const defaultDescription = "A portfolio to showcase my web development skills.";
  const defaultImage = "/default-image.jpg"; // Provide a default image for sharing

  return (
    <Head>
      <title>{title ? `${title} | Lagoda Patryk` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Lagoda Patryk" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph (OG) Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ''} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Head>
  );
};

export default MetaHead;
