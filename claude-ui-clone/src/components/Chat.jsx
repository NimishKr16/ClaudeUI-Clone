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
import SendIcon from "@mui/icons-material/Send";
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
      const newMessages = [...messages, { text: input, sender: "User" }];
      setMessages(newMessages);
      setInput("");

      // Simulate Claude's response
      setTimeout(() => {
        setMessages([
          ...newMessages,
          {
            text: "This is a simulated response from Claude.",
            sender: "Claude",
          },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
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
