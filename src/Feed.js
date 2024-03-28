import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Story from './Story';
import Post from './Post'; 

function Feed() {
  // Placeholder post data (would typically be fetched from an API)
  const [posts, setPosts] = useState([
    { 
      username: 'coding_cat', 
      profileImage: 'https://randomuser.me/api/portraits/women/90.jpg',
      contentImage: 'https://randomuser.me/api/portraits/women/90.jpg', 
      caption: 'Debugging my human... 😹 #coderlife' 
    },
    { 
        username: 'coding_cat', 
        profileImage: 'https://randomuser.me/api/portraits/women/91.jpg',
        contentImage: 'https://randomuser.me/api/portraits/women/91.jpg', 
        caption: 'Debugging my human... 😹 #coderlife' 
      },
    // ... Add more post objects here
  ]);

  // Placeholder stories data  
  const storiesData = [
  { id: 1, username: 'user1', image: "https://randomuser.me/api/portraits/women/90.jpg" },
    { id: 2, username: 'user2', image: 'https://randomuser.me/api/portraits/women/91.jpg'},
    { id: 4, username: 'user3', image: 'https://randomuser.me/api/portraits/women/93.jpg'},
    { id: 5, username: 'user3', image: 'https://randomuser.me/api/portraits/women/94.jpg'},
    { id: 6, username: 'user3', image: 'https://randomuser.me/api/portraits/women/95.jpg'},
    { id: 6, username: 'user3', image: 'https://randomuser.me/api/portraits/women/96.jpg'},
];

  return (
    <div>
      <Navbar />

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
        {/* Stories */}
        <Box sx={{ display: 'flex', overflowX: 'auto', width: '600px' }}> 
          {storiesData.map((story) => (
            <Story key={story.username} image={story.image} username={story.username} />
          ))}
        </Box> 
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
        {/* Posts */}
        <Box sx={{ width: '600px' }}>
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
      </Box>
    </div>
  );
}

export default Feed;
