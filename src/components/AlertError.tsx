import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

type AlertErrorProps = {
  title: string;
  subtitle: string;
};

export default function AlertError({ title, subtitle }: AlertErrorProps) {
  return (
    <Container maxWidth="md">
      <Alert severity="error" variant="outlined">
        <AlertTitle>{title}</AlertTitle>
        {subtitle}
      </Alert>
    </Container>
  )
};