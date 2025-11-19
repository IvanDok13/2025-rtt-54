import { Link } from 'react-router-dom';
import type { BlogPageProps } from '../types';

export function BlogPostPage({ blogs }: BlogPageProps) {
  return (
    <main>
      <h2>Blog Post Page</h2>

      <ul>
        {blogs &&
          blogs.map(blog => (
            <li key={blog.id}>
              <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
              <p>{blog.content.substring(0, 100) + '...'}</p>
            </li>
          ))}
      </ul>
    </main>
  );
}
