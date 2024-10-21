// src/app/(home)/page.tsx

import AuthHomeView from '@/sections/AuthHomeView'; // Authenticated home view
import NonAuthHomeView from '@/sections/NonAuthHomeView'; // Non-authenticated home view
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';

export const metadata = {  title: "Domov | ZoškaSnap"};

export default async function Home() {
  // Fetch sesion on the server
  const session = await getServerSession(authOptions);

  // Conditionally render auth or nonauth home page
  return session ? <AuthHomeView session = {session}/> : <NonAuthHomeView />;
}