import React, { useState, useEffect } from 'react';
import {useMediaQuery , Box ,Stack} from '@mui/material';
import Navbar from './Navbar';
import Story from './Story';
import Post from './Post'; 
import Suggestions from './Suggestions';

function Feed() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const [posts, setPosts] = useState([
    { 
        username: 'user1', 
        profileImage: 'https://randomuser.me/api/portraits/women/95.jpg',
        contentImage: 'https://randomuser.me/api/portraits/women/95.jpg', 
        caption: 'This is a caption' 
      },
    { 
      username: 'user1', 
      profileImage: 'https://randomuser.me/api/portraits/women/90.jpg',
      contentImage: 'https://randomuser.me/api/portraits/women/90.jpg', 
      caption: 'This is a caption' 
    },
    { 
        username: 'user1', 
        profileImage: 'https://randomuser.me/api/portraits/women/91.jpg',
        contentImage: 'https://randomuser.me/api/portraits/women/91.jpg', 
        caption: 'This is a caption' 
      },
  ]);
  const storiesData = [
  { id: 1, username: 'user1', image: "https://randomuser.me/api/portraits/women/90.jpg" },
    { id: 2, username: 'user2', image: 'https://randomuser.me/api/portraits/women/91.jpg'},
    { id: 4, username: 'user3', image: 'https://randomuser.me/api/portraits/women/93.jpg'},
    { id: 5, username: 'user3', image: 'https://randomuser.me/api/portraits/women/94.jpg'},
    // { id: 6, username: 'user3', image: 'https://randomuser.me/api/portraits/women/95.jpg'},
    // { id: 6, username: 'user3', image: 'https://randomuser.me/api/portraits/women/96.jpg'},
];

  return (
    <div>
        <Stack direction="row">
      <Navbar />
      <Stack direction="row">
      <Stack sx={{ display: 'flex', marginTop: 5, marginLeft: isMobile ? 2 : 5 }}>
        {/* Stories */}
        <Box sx={{ display: 'flex',  marginRight: 0 ,width: isMobile ? '350px' : '600px',}}> 
          {storiesData.map((story) => (
            <Story key={story.username} image={story.image} username={story.username} />
          ))}
        </Box> 
        <Box sx={{ width: isMobile ? '350px' : '600px',
                 marginRight: 2 }}> 
          {posts.map((post) => (
            <Post 
              key={post.username + post.caption}
              username={post.username}
              profileImage={post.profileImage}
              contentImage={post.contentImage}
              caption={post.caption}
            />
          ))}
        </Box> 
      </Stack>
        </Stack>
<Suggestions/> 
     </Stack>
    </div>
  );
}

export default Feed;
