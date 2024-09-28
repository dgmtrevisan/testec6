import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Categories() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickCategory = (value: string) => {
    router.push(value);
  }

  const setCurrent = (name: string) => {
    if (name !== pathname) {
      return ({ backgroundColor: 'transparent', border: 'none' });
    }

    return ({});
  }

  return (
    <Grid size={{ xs: 12, md: 8 }}>
      <Chip onClick={() => handleClickCategory('/')} size="medium" label="Todas" sx={setCurrent('/')} />
      <Chip onClick={() => handleClickCategory('/destaques')} size="medium" label="Destaques" sx={setCurrent('/destaques')}/>
      <Chip onClick={() => handleClickCategory('/lancamentos')} size="medium" label="Lançamentos" sx={setCurrent('/lancamentos')} />
      <Chip onClick={() => handleClickCategory('/eventos')} size="medium" label="Eventos" sx={setCurrent('/eventos')} />
    </Grid>
  )
};