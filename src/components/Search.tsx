import { SyntheticEvent, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (searchTerm.length >= 3) {
      router.push(`/busca/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <Grid size={{ xs: 12, md: 4 }}>
      <form onSubmit={handleSubmit}>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInput
            value={searchTerm}
            size="small"
            placeholder="Buscar..."
            startAdornment={
              <InputAdornment position="start" sx={{ color: 'text.primary' }}>
                <SearchRoundedIcon fontSize="small" />
              </InputAdornment>
            }
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </FormControl>
      </form>
    </Grid>
  )
};