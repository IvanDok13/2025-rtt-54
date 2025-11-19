import { Link, useParams } from 'react-router-dom';
import type { BlogPageProps } from '../types';

export function BlogIndexPage({ blogs }: BlogPageProps) {
  const { slug } = useParams();

  const blog = blogs.find(blog => blog.slug === slug);
  console.log(blog);

  if (!blog) {
    return <p>Blog not found: {slug}</p>;
  }

  return (
    <main>
      <Link to='/blog'>Back to Blog Posts</Link>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </main>
  );
}
