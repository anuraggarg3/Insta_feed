import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ReelsIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust breakpoint as needed

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Close drawer on mobile if screen size changes
  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile]); 

  return (
    <div>
      <CssBaseline />

      {/* Responsive Navbar */}
      <AppBar position="fixed" sx={{ width: '100%', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD085I1x7-eyqUBpSuasns5vln5Wq3bPpifRFSeafsdg&s" alt="Instagram Logo" style={{ height: '60px', width: '150px' }} />

          <IconButton onClick={handleDrawerOpen} sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
          {/* Navigation icons displayed only on mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton>
              <HomeIcon />
            </IconButton>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <ExploreIcon />
            </IconButton>
            <IconButton>
              <ReelsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Left Sidebar (visible only on desktop) */}
      <Drawer
        variant="permanent"
        anchor="left"
        open={open && !isMobile}
      >
        {/* Drawer Header */}
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}> 
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>

        {/* Drawer Content (Your Navbar Items) */}
        <List sx={{ marginTop: '25px' }}> 
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          {/* ... other navbar items ... */}
          <ListItem button key="Create">
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;
