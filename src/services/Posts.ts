import Post from '@models/Post';
import PostList from '@models/PostList';
import { SearchParam } from '@customTypes/SearchParam';
import { bffURL, perPage } from '@constants/constants';
import axios from 'axios';

export async function getPostById(id: string) {
  const response = await axios.get(`${bffURL}post?id=${id}`);
  if (response.status === 200) {
    return Post.fromJson(response.data);
  }
  return {};
};

export async function getPosts(params: SearchParam[]) {
  const searchParams = new URLSearchParams();
  params.forEach((item) => {
    searchParams.append(item.key, item.value);
  });
  searchParams.append('limit', perPage.toString());
  const response = await axios.get(`${bffURL}posts?${searchParams.toString()}`);
  if (response.status === 200) {
    return PostList.fromJson(response.data);
  }
  return {
    posts: [],
    page: 0,
    totalPages: 0,
  }
};