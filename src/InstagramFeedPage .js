import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, IconButton, TextField ,Avatar} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import ChatIcon from '@mui/icons-material/Chat';
import StoryComponent from './StoryComponent';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';

const stories = [
  { id: 1, username: 'user1', imageUrl: "https://randomuser.me/api/portraits/women/90.jpg" },
    { id: 2, username: 'user2', imageUrl: 'https://randomuser.me/api/portraits/women/91.jpg'},
    { id: 3, username: 'user3', imageUrl: 'https://randomuser.me/api/portraits/women/92.jpg'},
    { id: 4, username: 'user3', imageUrl: 'https://randomuser.me/api/portraits/women/93.jpg'},
    { id: 5, username: 'user3', imageUrl: 'https://randomuser.me/api/portraits/women/94.jpg'},
    { id: 6, username: 'user3', imageUrl: 'https://randomuser.me/api/portraits/women/95.jpg'},
    { id: 6, username: 'user3', imageUrl: 'https://randomuser.me/api/portraits/women/96.jpg'},
    { id: 6, username: 'user3', imageUrl: 'https://randomuser.me/api/portraits/women/97.jpg'},
    { id: 6, username: 'user3', imageUrl: 'https://randomuser.me/api/portraits/women/98.jpg'},
];

function InstagramFeedPage() {
  const [comments, setComments] = useState({});
  const [likes, setLikes] = useState({});
  const [followStatus, setFollowStatus] = useState({});;
  const [showCommentInput, setShowCommentInput] = useState({});

  const posts = [
    { id: 1, username: 'user1', imageUrl: "https://randomuser.me/api/portraits/women/90.jpg", caption: 'Caption 1' },
    { id: 2, username: 'user2', imageUrl: 'https://randomuser.me/api/portraits/women/91.jpg', caption: 'Caption 2' },
    { id: 3, username: 'user3', imageUrl: 'https://randomuser.me/api/portraits/women/92.jpg', caption: 'Caption 3' },
    { id: 4, username: 'user3', imageUrl: 'https://randomuser.me/api/portraits/women/93.jpg', caption: 'Caption 3' },
  ];

  const handleCommentChange = (postId, event) => {
    const { value } = event.target;
    setComments(prevComments => ({ ...prevComments, [postId]: value }));
  };
  const handleFollowToggle = (userId) => {
    setFollowStatus(prevStatus => ({
      ...prevStatus,
      [userId]: !prevStatus[userId]
    }));
  };

  const isFollowing = (userId) => {
    return followStatus[userId];
  };

  const handleLike = (postId) => {
    setLikes(prevLikes => ({ ...prevLikes, [postId]: !prevLikes[postId] }));
  };
  const toggleCommentInput = (postId) => {
    setShowCommentInput(prevState => ({ ...prevState, [postId]: !prevState[postId] }));
  };

  const getLikeCount = (postId) => {
    return likes[postId] ? 1 : 0;
  };

  return (
    <Container>
       <div style={{ display: 'flex', overflowX: 'auto', marginBottom: '30px',marginTop:"20px" }}>
         {stories.map(story => (
           <StoryComponent key={story.id} story={story} />
         ))}
      </div>
      <Grid container spacing={3}>
        {posts.map(post => (
          <Grid item key={post.id} xs={7}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {post.username}
                  <IconButton
                    aria-label="follow"
                    onClick={() => handleFollowToggle(post.id)}
                    style={{ marginLeft: '10px', color: isFollowing(post.id) ? '#2196f3' : '#757575' }}
                  >
                    {isFollowing(post.id) ? <PersonIcon /> : <PersonAddIcon />}
                  </IconButton>
                  </Typography>
                <img src={post.imageUrl} style={{height:"500px"}} alt="post" />
                <Typography variant="body2" color="text.secondary">
                  {post.caption}
                </Typography>
                <div>
                  <IconButton aria-label="like" onClick={() => handleLike(post.id)} color={likes[post.id] ? "primary" : "default"}>
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="comment" onClick={() => toggleCommentInput(post.id)}>
                    <ChatIcon />
                  </IconButton>
                  <Typography variant="body2" color="text.secondary">
                    {getLikeCount(post.id)} Likes
                  </Typography>
                </div>
                {showCommentInput[post.id] && (
                  <TextField
                    id={`comment-${post.id}`}
                    label="Add a comment"
                    variant="outlined"
                    fullWidth
                    value={comments[post.id] || ''}
                    onChange={(event) => handleCommentChange(post.id, event)}
                    InputProps={{
                      endAdornment: (
                        <IconButton aria-label="send" onClick={() => console.log('Comment sent')}>
                          <SendIcon />
                        </IconButton>
                      ),
                    }}
                  />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default InstagramFeedPage;
