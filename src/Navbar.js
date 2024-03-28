  import React from 'react';
  import { Toolbar, Box } from '@mui/material';
  import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
  } from '@mui/material';
  import HomeIcon from '@mui/icons-material/Home';
  import SearchIcon from '@mui/icons-material/Search';
  import ExploreIcon from '@mui/icons-material/Explore';
  import ReelsIcon from '@mui/icons-material/Search';
  import MailIcon from '@mui/icons-material/Mail';
  import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
  function Navbar() {
    return (
      <Box>
      <Box sx={{  display:{xs:"none",sm:"block"}}}>
        <Toolbar>
          <List sx={{marginTop:'15px', }}>
              <ListItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD085I1x7-eyqUBpSuasns5vln5Wq3bPpifRFSeafsdg&s" alt="Instagram Logo" style={{ height: '60px', width:"150px" }}/></ListItem>
            <ListItem button key="Home" sx={{marginTop:'25px', }}>
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
          </Toolbar>
      </Box>
      <Box sx={{ 
      position: 'fixed',
      bottom: 0, 
      width: '100%',
      bgcolor: 'background.paper',
      p: 1, 
      display:{xs:"block",sm:"none"}
    }}>
      <Box sx={{display: 'flex', justifyContent: 'space-around' }}>
        <IconButton>
          <HomeIcon />
        </IconButton>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <ExploreIcon />
        </IconButton>
      </Box>
  </Box>
      </Box>
    );
  }

  export default Navbar;
