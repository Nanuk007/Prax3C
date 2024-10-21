// src/app/(home)/page.tsx

import { useSession } from 'next-auth/react';
import AuthHomeView from '@/sections/AuthHomeView'; // Authenticated home view
import NonAuthHomeView from '@/sections/NonAuthHomeView'; // Non-authenticated home view
import { CircularProgress } from '@mui/material';

export const metadata = {
  title: "Domov | ZoškaSnap"
};

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <CircularProgress />; // Simple loading spinner
  }

  return session ? <AuthHomeView /> : <NonAuthHomeView />;
}