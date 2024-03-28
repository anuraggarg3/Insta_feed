import React, { useState } from 'react';
import { Avatar, Typography, Modal, Backdrop, Fade } from '@mui/material';
function StoryComponent({ story }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{  marginRight: '30px', textAlign: 'center' }}>
      <Avatar
        alt={story.username}
        src={story.imageUrl}
        sx={{width: '90px', height: '90px', backgroundColor: '#fff', border: '3px solid #e91e63', cursor: 'pointer' }}
        onClick={handleOpen}
      />
      <Typography variant="subtitle1">{story.username}</Typography>
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
            <img src={story.imageUrl} alt={story.username} style={{marginTop:'120px', maxWidth: '90vw',height:'400px' }} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default StoryComponent;
