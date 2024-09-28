import Head from 'next/head';
import PostDetail from '@components/PostDetail';
import Header from '@components/Header';
import { getPostById } from '@services/Posts';
import { Post as PostModel } from '@models/Post';
import AlertError from '@components/AlertError';

type PostProps = {
  post: PostModel;
};

export default function Post({ post }: PostProps) {
  return (
    <div>
      <Head>
        <title>{`Space Flight News - ${post ? post.title : 'Não encontrado'}`}</title>
        <meta name="description" content={post ? post.summary : 'Não encontrado'} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {post.id ? (
          <PostDetail post={post} />
        ) : (
          <AlertError title='Post não encontrado' subtitle='Tente buscar por algum termo ou acessar umas das categorias.' />
        )}
      </main>
    </div>
  )
};

export async function getServerSideProps({ params }) {
  const response = await getPostById(params.id);
  return {
    props: {
      post: response,
    }
  }
};
