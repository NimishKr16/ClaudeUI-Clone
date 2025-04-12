import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import logo from "../assets/image.png";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";
function ChatInput() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: "User" }];
      setMessages(newMessages);
      setInput("");

      // Add dummy Claude reply after slight delay
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "This is a dummy API Call from Claude's Clone made by Nimish Kumar. I Hope you like it.",
            sender: "Claude",
          },
        ]);
      }, 500); // 0.5 second delay for realism
    }
  };

  return (
    <div
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      marginLeft: "200px",
      flexDirection: "column", // Stack items on smaller screens
      px: 2, // Add padding on small screens to avoid content sticking to the edge
    }}
  >
    {messages.length > 0 && (
      <Paper
        elevation={3}
        sx={{
          flex: 1,
          overflowY: "auto",
          mb: 2,
          p: 2,
          backgroundColor: "#262624",
          maxWidth: "100%", // Ensure paper doesn't overflow
          width: "100%", // Take full width
          maxHeight: "70vh", // Restrict max height on mobile screens
          borderRadius: 2, // Slight border radius for Paper
        }}
      >
        <List>
          {messages.map((msg, index) => (
            <ListItem
              key={index}
              sx={{
                display: "flex",
                justifyContent: "flex-start", // ALWAYS left align
                alignItems: "center",
                mb: 1, // margin between messages
              }}
            >
              <Avatar
                alt={msg.sender}
                src={msg.sender === "Claude" ? logo : undefined}
                sx={{ width: 30, height: 30, mr: 1 }}
              />
              <ListItemText
                primary={msg.text}
                primaryTypographyProps={{
                  fontSize: "14px",
                  color: "white",
                  backgroundColor:
                    msg.sender === "User" ? "#3a3a3a" : "transparent",
                  p: 1.5,
                  borderRadius: 2,
                  maxWidth: "70%", // Always max 70% (both User and Claude)
                  display: "inline-block", // This makes the bubble wrap nicely
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    )}
  
    <TextField
      fullWidth
      color="info"
      variant="outlined"
      placeholder="How can I help you today?"
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter") handleSend();
      }}
      value={input}
      InputProps={{
        style: {
          backgroundColor: "#30302e", // Dark gray background
          borderRadius: "20px", // Rounded corners
          width: "650px", // Ensure full width on smaller screens
          height: "120px", // Increased height
          color: "#faf9f5", // White text color
          paddingBottom: "65px", // Add padding to accommodate the button
          paddingLeft: "5px", // Add padding-left for alignment
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleSend}
              sx={{
                backgroundColor: "#d97757", // Orange background
                color: "white", // White icon color
                "&:hover": {
                  backgroundColor: "darkorange", // Darker shade on hover
                },
                position: "absolute",
                right: "8px",
                bottom: "8px",
                borderRadius: "10px", // Square shape
                width: "35px", // Set width
                height: "35px", // Set height
              }}
            >
              <ArrowUpwardIcon style={{ fontSize: "20px" }} />
            </IconButton>
          </InputAdornment>
        ),
        startAdornment: (
          <InputAdornment position="start" sx={{ ml: 1 }}>
            <IconButton
              sx={{
                backgroundColor: "#30302e",
                borderRadius: "8px", // Slightly rounded
                color: "#faf9f5",
                width: "36px",
                height: "36px",
                mr: 1, // Margin right to separate icons
                border: "1px solid #555", // Optional subtle border
                position: "absolute",
                left: "8px",
                bottom: "8px",
                borderRadius: "10px", // Square shape
                width: "35px", // Set width
                height: "35px", // Set height
              }}
            >
              <AddIcon />
            </IconButton>
            <IconButton
              sx={{
                backgroundColor: "#30302e",
                borderRadius: "8px",
                color: "#faf9f5",
                width: "36px",
                height: "36px",
                border: "1px solid #555",
                position: "absolute",
                left: "50px",
                bottom: "8px",
                borderRadius: "10px", // Square shape
                width: "35px", // Set width
                height: "35px", // Set height
              }}
            >
              <EditIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  </div>
  );
}

export default ChatInput;
