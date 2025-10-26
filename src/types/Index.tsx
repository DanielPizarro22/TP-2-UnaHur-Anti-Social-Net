export interface User {
  id: number;
  nickName: string;
}

export interface Post {
  id: number;
  userId: number;
  description: string;
  tags: string[];
  images?: string[];
}

export interface Comment {
  id: number;
  postId: number;
  userId: number;
  content: string;
}

export interface Tag {
  id: number;
  name: string;
}