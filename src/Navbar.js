import React from 'react';
import { AppBar, Toolbar, InputBase, Typography, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Avatar from '@mui/material/Avatar';

function Navbar() {
  return (
    <AppBar position="static" sx={{ background: '#fff', boxShadow: 'none' }}>
      <Toolbar>
        {/* Instagram Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD085I1x7-eyqUBpSuasns5vln5Wq3bPpifRFSeafsdg&s" alt="Instagram Logo" style={{ height: '60px', width:"150px" }}/>
        </Typography>

        {/* Search Bar */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, border: '1px solid #dbdbdb', borderRadius: 2 }}>
          <SearchIcon sx={{padding: '0 10px', color: 'grey' }} />
          <InputBase placeholder="Search" sx={{ fontSize: '14px' }} />
        </Box>

       {/* Icon Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center' ,paddingRight:'20px',}}>
          <IconButton><HomeIcon /></IconButton>
          <IconButton><AddBoxOutlinedIcon /></IconButton>
          <IconButton><ExploreOutlinedIcon /></IconButton>
          <IconButton><FavoriteBorderOutlinedIcon /></IconButton>
          <Avatar src="https://randomuser.me/api/portraits/women/90.jpg" alt="Profile Picture" sx={{width: 24, height: 24 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
