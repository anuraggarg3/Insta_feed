import React, { useState } from 'react';
import {Box, Avatar, Typography, Modal, Backdrop, Fade } from '@mui/material';
function Story({ image, username }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginRight: 2 }}>
      <Avatar 
        src={image} 
        alt={username}
        sx={{width: '70px', height: '70px', backgroundColor: '#fff', border: '3px solid #C13584', cursor: 'pointer' }}
        onClick={handleOpen}
      />
      <Typography variant="caption" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '60px' }}>
        {username}
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="enlarged-image"
        aria-describedby="enlarged-image-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', outline: 'none' }}>
            <img src={image} alt={username} style={{marginTop:'120px', maxWidth: '90vw',height:'400px' }} />
          </div>
        </Fade>
      </Modal>
    </Box>
  );
}

export default Story;
