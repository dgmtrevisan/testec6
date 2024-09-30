import Post from '@models/Post';
import PostList from '@models/PostList';
import { SearchParam } from '@customTypes/SearchParam';
import { bffURL, perPage } from '@constants/constants';
import axios from 'axios';

export async function getPostById(id: string) {
  try {
    const response = await axios.get(`${bffURL}post?id=${id}`);
    return Post.fromJson(response.data);
  } catch (error) {
    return {};
  }
};

export async function getPosts(params: SearchParam[]) {
  const searchParams = new URLSearchParams();
  params.forEach((item) => {
    searchParams.append(item.key, item.value);
  });
  searchParams.append('limit', perPage.toString());
  
  try {
    const response = await axios.get(`${bffURL}posts?${searchParams.toString()}`);
    return PostList.fromJson(response.data);
  } catch (error) {
    return {
      posts: [],
      page: 0,
      totalPages: 0,
    }
  }
};