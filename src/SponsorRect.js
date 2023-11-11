// SponsorRect.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

const SponsorRect = ({ title, time, location, category, date }) => {
  const [count, setCount] = useState(0);

  const handleVote = (increment) => {
    setCount(count + increment);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', margin: '20px', textAlign: 'center',  backgroundColor: (theme) => theme.palette.red.main }}>
      <div>
        <h2>Hello</h2>
        <p>Time: {time}</p>
        <p>Location: {location}</p>
        <p>category: {category}</p>
        <p>Date: {date}</p>
        <p>Vote: {count}</p>
      </div>
      <div>
        <Button variant="contained" color="primary" onClick={() => handleVote(1)}>
          Upvote
        </Button>
        <Button variant="contained" color="secondary" onClick={() => handleVote(-1)}>
          Downvote
        </Button>
      </div>
    </Paper>
  );
};

export default SponsorRect;
