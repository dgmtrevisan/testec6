import Head from 'next/head';
import PostList from '@components/PostList';
import Header from '@components/Header';
import Post from '@models/Post';
import { getPosts } from '@services/Posts';
import { perPage } from '@constants/constants';

type SearchProps = {
  posts: Post[];
  totalPages: number;
  page: number;
  searchTerm: string;
};

export default function Search({ posts, totalPages, page, searchTerm }: SearchProps) {
  return (
    <div>
      <Head>
        <title>{`Space Flight News - Busca: ${searchTerm} ${page ? `página ${page}` : 'Não encontrado'}`}</title>
        <meta name="description" content="Blog criado para teste do C6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <PostList posts={posts} page={page} totalPages={totalPages} searchTerm={searchTerm} />
      </main>
    </div>
  )
};

export async function getServerSideProps({ params, query }) {
  const { term = '' } = params;
  const { page = 1 } = query;
  const offset = page === 1 ? 0 : (Number(page) * perPage) - perPage; 
  const qs = [
    { key: 'search', value: term  },
    { key: 'offset', value: offset }
  ];
  const response = await getPosts(qs);
  return {
    props: {
      posts: response.posts,
      page: Number(page),
      totalPages: response.totalPages,
      searchTerm: term,
    }
  }
};
