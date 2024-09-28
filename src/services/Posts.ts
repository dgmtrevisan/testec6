import Post from '@models/Post';
import PostList from '@models/PostList';
import { SearchParam } from '@customTypes/SearchParam';
import { bffURL, perPage } from '@constants/constants';

export async function getPostById(id: string) {
  let response = await fetch(`${bffURL}post?id=${id}`);
  if (response.status === 200) {
    let data = await response.json();
    return Post.fromJson(data);
  }
  return {};
};

export async function getPosts(params: SearchParam[]) {
  const searchParams = new URLSearchParams();
  params.forEach((item) => {
    searchParams.append(item.key, item.value);
  });
  searchParams.append('limit', perPage.toString());
  let response = await fetch(`${bffURL}posts?${searchParams.toString()}`);  
  if (response.status === 200) {
    let data = await response.json();
    return PostList.fromJson(data);
  }
  return {
    posts: [],
    page: 0,
    totalPages: 0,
  }
};