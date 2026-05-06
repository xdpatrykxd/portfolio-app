import Head from "next/head";

type MetaHeadProps = {
  title?: string;
  description?: string;
};

export default function MetaHead({
  title = "Patryk Lagoda - Web Developer",
  description = "Portfolio of Patryk Lagoda, web developer.",
}: MetaHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Patryk Lagoda" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
