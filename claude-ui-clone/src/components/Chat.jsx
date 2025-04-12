import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ChatInput from "./ChatInput";
import logo from "../assets/image.png";
const Chat = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm Claude. How can I assist you today?",
      sender: "Claude",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = {
        text: input,
        sender: "User",
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");

      // Dummy Claude reply after user sends a message
      setTimeout(() => {
        const claudeReply = {
          text: "This is a dummy API Call from Claude's Clone made by Nimish Kumar. I Hope you like it.",
          sender: "Claude",
        };
        setMessages((prevMessages) => [...prevMessages, claudeReply]);
      }, 1000); // 1 second delay to simulate API call
    }
  };

  return (
    <>
      <Box
        sx={{
          paddingBottom: "50px",
          mt: -16,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#262624"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          />
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "24px", sm: "32px", md: "40px" },
              color: "#faf9f5",
            }}
          >
           Good Evening, Nimish
          </Typography>
        </Box>
      </Box>
      <ChatInput></ChatInput>
    </>
  );
};

export default Chat;
