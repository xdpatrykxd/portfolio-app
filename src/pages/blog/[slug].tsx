// src/pages/blog/[slug].tsx
import { getPosts } from "../../utils/getPosts";  // Import getPosts correctly
import styles from "@/styles/blogPost.module.css"; // Use the updated styles
import { Post } from "../../utils/types"; // Import the Post type
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths } from "next"; // Importing the required types
import { marked } from "marked"; // Optional: Use a Markdown parser like 'marked'

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts(); // Get all posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false }; // Set fallback to false for static generation
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPosts().find((post) => post.slug === params?.slug);
  
  // If the post doesn't exist, handle this case
  if (!post) {
    return { notFound: true };
  }

  // If you are using markdown, convert it to HTML using `marked`
  const contentHtml = marked(post.content);

  return {
    props: { post: { ...post, content: contentHtml } },
  };
};

const PostPage = ({ post }: { post: Post }) => {
  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <>
      <Header />

      <div className={styles.postContainer}>
        <Link href="/blog" className={styles.backButton}>
          ← Terug naar blog
        </Link>

        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postDate}>{post.date}</p>

        {post.image && (
          <img
            src={post.image}
            alt={`Image for ${post.title}`}
            className={styles.postImage}
          />
        )}

        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

{post.tags?.map((tag) => (
  <Link
    key={tag}
    href={`/blog?tag=${encodeURIComponent(tag.replace(/^#/, ""))}`}
    passHref
  >
    <button className={styles.tag}>
      #{tag.replace(/^#/, "")}
    </button>
  </Link>
))}
      </div>

      <Footer />
    </>
  );
};

export default PostPage;








