export interface Blog {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export interface BlogPageProps {
  blogs: Blog[];
}
