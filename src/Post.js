import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  InputBase,Button ,
} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Post({ username, profileImage, contentImage, caption }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLiked, setIsLiked] = useState(false); 
    const [likeCount, setLikeCount] = useState(0); 
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);
    const handleLike = () => {
      setIsLiked(!isLiked);
      setLikeCount(isLiked ? likeCount - 1 : likeCount + 1); // Increment/decrement like count
    };
    const handleCommentClick = () => {
        setShowComments(!showComments);
      };
    
      const handleCommentChange = (event) => {
        setNewComment(event.target.value);
      };
    
      const addComment = () => {
        if (newComment.trim()) { // Check for non-empty comment
          setComments([...comments, { username: 'anuraggarg', text: newComment }]); 
          setNewComment(''); // Clear input
        }
      };
      const handleFollow = () => {
        setIsFollowing(!isFollowing);
      };
    
  return (
    <Box sx={{ flexDirection: 'column', marginRight: 2 }}>
      {/* Header */}
      <CardHeader
        avatar={<Avatar src={profileImage} alt={username} />}
        title={username}
        action={ // Add action prop for the follow button
            <Button 
              variant={isFollowing ? 'contained' : 'outlined'}
              color={isFollowing ? 'secondary' : 'primary'} 
              size="small"
              onClick={handleFollow}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </Button>
          }
        />

      {/* Image */}
      <CardMedia
        component="img"
        image={contentImage}
        alt="Post Image"
      />

      {/* Actions (Likes, Comments, etc.) */}
      <Box sx={{ padding: '16px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
          <IconButton onClick={handleLike}>
            {isLiked ? (
              <FavoriteIcon sx={{ color: 'red' }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>
          <Typography variant="body2" sx={{ marginLeft: '4px' }}> 
            {likeCount} 
          </Typography> 

          <IconButton onClick={handleCommentClick}><ChatBubbleOutlineOutlinedIcon /></IconButton>
          <Box sx={{ flexGrow: 1 }} /> {/* Pushes icons to the left */}
          <IconButton><BookmarkBorderOutlinedIcon /></IconButton>
        </Box>
          {/* Comments Section */}
          {showComments && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {comments.map((comment) => (
              <Box key={comment.text} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 'bold', marginRight: 1 }}>
                  {comment.username}: 
                </Typography>
                <Typography variant="body2">
                  {comment.text}
                </Typography>
              </Box>
            ))}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <InputBase
                placeholder="Add a comment..."
                fullWidth
                value={newComment}
                onChange={handleCommentChange}
              />
              <IconButton onClick={addComment}>
                <SendOutlinedIcon />
              </IconButton>
            </Box>
          </Box>  )}
        {/* Caption */}
        <Typography variant="body2">
          {caption}
        </Typography>
      </Box>
    </Box>
  );
}

export default Post;
