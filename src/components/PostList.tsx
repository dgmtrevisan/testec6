import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardActionArea from '@mui/material/CardActionArea';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Post from '@models/Post';
import AlertError from '@components/AlertError';

type PostListProps = {
  posts: Post[];
  totalPages: number;
  page: number;
  searchTerm: string;
};

export default function PostList({ posts, page, totalPages, searchTerm }: PostListProps) {
  const router = useRouter();
  const pathname = usePathname();

  const renderPost = (post: Post) => {
    const { title, news_site, image_url, id } = post;  

    return (
      <Grid size={{ xs: 12, md: 6 }} key={id}>
        <Card
          variant="outlined"
          style={ { height: '100%' } }
        >
          <CardActionArea href={`post/${id}`} style={ { height: '100%' } }>
            <CardMedia
              component="img"
              alt={title}
              image={image_url}
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="caption" component="div">{news_site}</Typography>
              <Typography gutterBottom variant="h6" component="div">{title}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )
  };

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
    router.push(`${pathname}?page=${page}`)
  };

  const renderPosts = () => (
    <Container maxWidth="md">
      <Grid container spacing={2} columns={12}>
        {posts.map((post) => renderPost(post))}
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Pagination count={totalPages} page={page} onChange={handleChangePage} />
      </div>      
    </Container>
  );

  const renderEmpty = () => (
    <>
      {searchTerm !== '' ? (
        <AlertError title={`Sem resultados para a busca: ${searchTerm}`} subtitle="Tente buscar por outro termo ou acessar umas das categorias." />
      ) : (
        <AlertError title="Sem resultados para a categoria" subtitle="Tente buscar por um termo ou acessar outra categoria." />
      )}
    </>
  )

  return (
    <>
      {posts.length > 0 ? renderPosts() : renderEmpty()} 
    </>
  )
};