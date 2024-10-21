// src/sections/AuthHomeView.tsx

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
// import Box from "@mui/material/Box";
import { Session } from "next-auth";

export const metadata = { title: "Domov | ZoškaSnap"}


export default function AuthHomeView({ session }: { session: Session }) {
  return (

    <Container>
      <Typography> Domovská stránka - prihlásený user</Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Vitajte, {session?.user?.name || "užívateľ"}!
      </Typography>
    </Container>

  );
}