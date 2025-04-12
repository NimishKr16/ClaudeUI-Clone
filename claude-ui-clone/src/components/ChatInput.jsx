import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
function ChatInput() {
  return (
    <div
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        marginLeft: '200px',
      }}
    >
    <TextField
      fullWidth
      color="info"
      variant="outlined"
      placeholder="How can I help you today?"
      InputProps={{
        style: {
          backgroundColor: '#30302e', // Dark gray background
          borderRadius: '20px',       // Rounded corners
          width: '700px',              // Full width
          height: '120px',             // Increased height
          color: '#faf9f5',             // White text color
          paddingBottom: '65px',  // <<< add padding-top
          paddingLeft: '5px',   // <<< add padding-left
        },
        endAdornment: (
          <InputAdornment position="end" >
            <IconButton
              sx={{
                backgroundColor: '#d97757', // Orange background
                color: 'white',            // White icon color
                '&:hover': {
                  backgroundColor: 'darkorange', // Darker shade on hover
                },
                position: 'absolute',
                right: '8px',
                bottom: '8px',
                borderRadius: '10px',          // Square shape
                width: '35px',              // Set width
                height: '35px',             // Set height
                
              }}
            >
              <ArrowUpwardIcon style={{ fontSize: '20px' }} />
            </IconButton>
          </InputAdornment>
        ),
        startAdornment: (
            <InputAdornment position="start" sx={{ ml: 1 }}>
              <IconButton
                sx={{
                  backgroundColor: '#30302e',
                  borderRadius: '8px',   // Slightly rounded
                  color: '#faf9f5',
                  width: '36px',
                  height: '36px',
                  mr: 1, // Margin right to separate icons
                  border: '1px solid #555', // Optional subtle border
                  position: 'absolute',
                  left: '8px',
                  bottom: '8px',
                  borderRadius: '10px',          // Square shape
                  width: '35px',              // Set width
                  height: '35px',             // Set height
                  
                }}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: '#30302e',
                  borderRadius: '8px',
                  color: '#faf9f5',
                  width: '36px',
                  height: '36px',
                  border: '1px solid #555',
                  position: 'absolute',
                  left: '50px',
                  bottom: '8px',
                  borderRadius: '10px',          // Square shape
                  width: '35px',              // Set width
                  height: '35px',             // Set height
                }}
              >
                <EditIcon />
              </IconButton>
            </InputAdornment>
          )
      }}
    />
    </div>
  );
}

export default ChatInput;