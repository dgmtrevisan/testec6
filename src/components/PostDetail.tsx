import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Post from '@models/Post';

type PostDetailProps = {
  post: Post;
};

export default function PostDetail({ post }: PostDetailProps) {
  const { title, summary, news_site, image_url, published_at, url } = post;
  const router = useRouter(); 

  const handleGoTo = () => {
    window.open(url, '_blank');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            variant="outlined"
          >
            <CardMedia
              component="img"
              alt={title}
              image={image_url}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            variant="outlined"
            style={ { height: '100%' } }
          >
            <CardContent>
              <Typography gutterBottom variant="caption" component="div">{news_site}</Typography>
              <Typography gutterBottom variant="h6" component="div">{title}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>{summary}</Typography>
              <Typography variant="caption">{published_at}</Typography>
              <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <Button onClick={handleGoTo} variant="contained">Visitar site</Button>
                <Button onClick={handleGoBack} variant="outlined">Voltar</Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
};