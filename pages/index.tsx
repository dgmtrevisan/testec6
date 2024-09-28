import Head from 'next/head';
import PostList from '@components/PostList';
import Header from '@components/Header';
import { getPosts } from '@services/Posts';
import Post from '@models/Post';
import { perPage } from '@constants/constants';

type HomeProps = {
  posts: Post[];
  totalPages: number;
  page: number;
};

export default function Home({ posts, totalPages, page }: HomeProps) {
  return (
    <div>
      <Head>
        <title>{`Space Flight News - Todas página ${page}`}</title>
        <meta name="description" content="Blog criado para teste do C6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <PostList posts={posts} page={page} totalPages={totalPages} searchTerm="" />
      </main>
    </div>
  )
};

export async function getServerSideProps({ query }) {
  const { page = 1 } = query;
  const offset = page === 1 ? 0 : (Number(page) * perPage) - perPage; 
  const qs = [
    { key: 'offset', value: offset.toString() }
  ];
  const response = await getPosts(qs);
  return {
    props: {
      posts: response.posts,
      page: Number(page),
      totalPages: response.totalPages,
    }
  }
};
