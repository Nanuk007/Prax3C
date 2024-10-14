// src/components/NavBar.tsx

'use client';  // Mark this component as a Client Component

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from '@mui/icons-material/Search';
import AddBoxIcon from '@mui/icons-material/AddBox';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { usePathname, useRouter } from 'next/navigation';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import Login from '@/app/auth/prihlasenie/page';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const NavBar = () => {
  const [value, setValue] = React.useState(0);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    switch (pathname) {
      case '/':
        setValue(0);
        break;
      case '/vyhladavanie':
        setValue(1);
        break;
      case '/pridat':
        setValue(2);
        break;
      case '/notifikacie':
        setValue(3);
        break;
      case '/profile':
        setValue(4);
        break;
      default:
        setValue(0);
        break;
    }
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/prispevky');
        break;
      case 2:
        router.push('/profil');
        break;
      case 3:
        router.push('/auth/prihlasenie');
        break;
      case 4:
        router.push('/auth/odhlasenie');
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Prispevky" icon={<AddBoxIcon />} />
        <BottomNavigationAction label="Profili" icon={<AccountCircleIcon/>} />
        <BottomNavigationAction label="Sign In" icon={<LoginIcon />} />
        <BottomNavigationAction label="Sign Out" icon={<LogoutIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default NavBar;