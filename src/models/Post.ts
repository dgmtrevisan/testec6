export class Post {
  id: string;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;

  static fromJson(data: any): Post {
    const post = new Post();
    post.id = data.id;
    post.title = data.title;
    post.url = data.url;
    post.image_url = data.image_url;
    post.news_site = data.news_site;
    post.summary = data.summary;
    post.published_at = new Date(data.published_at).toLocaleDateString("pt-BR");
    return JSON.parse(JSON.stringify(post));
  }
};

export default Post;