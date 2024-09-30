import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import styled from '@emotion/styled'
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const StylizedChip = styled(Chip)`
  background: ${props => (props.variant === 'filled' ? '#CCC' : '')};
  margin-right: 10px;
  margin-bottom: 10px;
  
  &:last-child {
    margin-right: 0;
  }
`;

export default function Categories() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickCategory = (value: string) => {
    router.push(value);
  }

  const setCurrent = (name: string) => {
    if (name !== pathname) {
      return 'outlined';
    }

    return 'filled';
  }

  return (
    <Grid size={{ xs: 12, md: 8 }}>
      <StylizedChip onClick={() => handleClickCategory('/')} size="medium" label="Todas" variant={setCurrent('/')} />
      <StylizedChip onClick={() => handleClickCategory('/destaques')} size="medium" label="Destaques" variant={setCurrent('/destaques')} />
      <StylizedChip onClick={() => handleClickCategory('/lancamentos')} size="medium" label="Lançamentos" variant={setCurrent('/lancamentos')} />
      <StylizedChip onClick={() => handleClickCategory('/eventos')} size="medium" label="Eventos" variant={setCurrent('/eventos')} />
    </Grid>
  )
};