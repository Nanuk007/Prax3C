// src/sections/NonAuthHomeView.tsx

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

export const metadata = { title: "Domov | ZoškaSnap"}


export default function NonAuthHomeView() {
  return (

    <Container>
        <Typography>Home page - Neprihlásený</Typography>
    </Container>

  );
}