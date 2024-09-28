import Head from 'next/head';
import Header from '@components/Header';
import AlertError from '@components/AlertError';
import Container from '@mui/material/Container';

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>Space Flight News - Página não encontrada</title>
        <meta name="description" content="Blog criado para teste do C6" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <AlertError title="Página não encontrada" subtitle="Tente buscar por um termo ou ou acessar umas das categorias." />
      </main>
    </div>
  )
};