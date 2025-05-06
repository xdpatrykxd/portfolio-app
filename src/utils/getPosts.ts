import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "./types";  // Import the Post type

// Fetch all posts (server-side)
export function getPosts(): Post[] {
    const postsDirectory = path.join(process.cwd(), "posts");
    const filenames = fs.readdirSync(postsDirectory);
  
    const posts: Post[] = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
  
      // Parse front matter and content
      const { data, content } = matter(fileContents);
  
      const post: Post = {
        title: data.title || "Untitled",
        date: data.date || "No date provided",
        excerpt: data.excerpt || "No excerpt provided",
        content,
        slug: filename.replace(/\.md$/, ""),
        image: data.image || "/images/defaultPostImage.png",
        tags: data.tags || [],
      };      
  
      return post;
    });
  
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  