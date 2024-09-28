import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Categories from './Categories';
import Search from './Search';

export default function Header() {
  return (
    <Container maxWidth="md" style={{ marginBottom: '20px' }}>
      <Typography variant="h2" align="center">Space Flight News</Typography>
      <Typography variant="subtitle1" align="center" style={{ marginBottom: '40px' }}>Sua dose diária de notícias sobre o voos espaciais</Typography>
      <Grid container spacing={2} columns={12}>
        <Categories />
        <Search />
      </Grid>
    </Container>
  )
};