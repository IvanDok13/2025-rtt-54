export interface Blog {
  id: number;
  slug: string;
  title: string;
  content: string;
}

export interface BlogPageProps {
  blogs: Blog[];
}

export interface AuthContextType {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}
