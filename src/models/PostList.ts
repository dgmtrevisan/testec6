import Post from '@models/Post';

export class PostList {
  posts: Post[];
  totalPages: number;

  static fromJson(data: any): PostList {
    const postList = new PostList();
    postList.posts = data.results.map((post: Post) => Post.fromJson(post));
    postList.totalPages = Math.round(data.count / 10);
    return JSON.parse(JSON.stringify(postList));
  }
};

export default PostList;