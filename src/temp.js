import React, { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ReelsIcon from '@mui/icons-material/Reels';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Story from './Story';
import Post from './Post';
import Suggestions from './Suggestions';

function Feed() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* Drawer for Left Sidebar */}
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
      >
        {/* Drawer Header (Optional) */}
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'text.primary' }}>
            Instagram
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {<ChevronLeftIcon />}
          </IconButton>
        </Toolbar>

        {/* Drawer Content (Your Navbar Items) */}
        <List>
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="Search">
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItem>
          <ListItem button key="Explore">
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
          <ListItem button key="Reels">
            <ListItemIcon>
              <ReelsIcon />
            </ListItemIcon>
            <ListItemText primary="Reels" />
          </ListItem>
          <ListItem button key="Messages">
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button key="Notifications">
            <ListItemIcon>
              <NotificationsNoneIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button key="Profile">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button key="Create">
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Feed Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: open ? '300px' : '0' }}>
        {/* Main Feed Header (Optional) */}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'text.primary' }}>
            Feed
          </Typography>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Posts Section */}
        <Box sx={{ padding: '20px' }}>
          <Story />
          <Post />
          {/* ... More Posts ... */}
        </Box>
      </Box>
    </div>
  );
}

export default Feed;
