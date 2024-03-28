import React, { useState, useEffect } from 'react';
import { Avatar, Box, Button, Typography } from '@mui/material';

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  // Fetch suggested users (In a real app, you would fetch this from your backend)
  useEffect(() => {
    const fetchSuggestions = async () => {
      // Replace with your actual API endpoint or data source
      const sampleSuggestions = [
        { username: 'User1', name: 'User1', profileImage: 'https://randomuser.me/api/portraits/women/10.jpg' },
        { username: 'User1', name: 'User1', profileImage: 'https://randomuser.me/api/portraits/women/11.jpg' },
        { username: 'User1', name: 'User1', profileImage: 'https://randomuser.me/api/portraits/women/12.jpg' },
        { username: 'User1', name: 'User1', profileImage: 'https://randomuser.me/api/portraits/women/13.jpg' },
        // ...more suggestions 
      ];

      setSuggestions(sampleSuggestions);
    };

    fetchSuggestions();
  }, []);

  return (
    <Box sx={{ width: 300, padding: 2, display:{xs:"none",sm:"block"} }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="body1" fontWeight="bold" color="text.secondary">
          Suggestions for you
        </Typography>
        <Button variant="text" size="small">See All</Button>
      </Box>

      {/* Suggestion List */}
      {suggestions.map((user) => (
        <Box key={user.username} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <Avatar src={user.profileImage} alt={user.name} sx={{ width: 40, height: 40, marginRight: 2 }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" fontWeight="bold">{user.username}</Typography>
            <Typography variant="caption" color="text.secondary">{user.name}</Typography>
          </Box> 
          <Button variant="text" color="primary" size="small">Follow</Button>
        </Box>
      ))}
    </Box>
  );
}

export default Suggestions;
