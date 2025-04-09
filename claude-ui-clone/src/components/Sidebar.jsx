import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Avatar,
  Typography,
  Collapse,
} from "@mui/material";
import { LuPanelLeft } from "react-icons/lu";
import { FaPlusCircle } from "react-icons/fa";
import { PiChatsCircleBold } from "react-icons/pi";
import {
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

const drawerWidth = 240;
const collapsedWidth = 60;

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [recentsOpen, setRecentsOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleRecentsToggle = () => {
    setRecentsOpen(!recentsOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        PaperProps={{
          sx: {
            width: open ? drawerWidth : collapsedWidth,
            backgroundColor: open ? "#201e1c" : "#262624",
            transition: "width 0.3s, background-color 0.3s",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100vh",
          },
        }}
      >
        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}>
          <List>
            <ListItem button onClick={handleToggle}>
              <ListItemIcon sx={{ color: "#7d7c78", minWidth: "28px" }}>
                <LuPanelLeft size={20} />
              </ListItemIcon>
              {open && (
                <ListItemText
                  primary="Claude"
                  primaryTypographyProps={{ fontSize: "16px" }}
                  sx={{ color: "white", fontWeight: "bold" }}
                />
              )}
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon sx={{ color: "#d97757", minWidth: "28px" }}>
                <FaPlusCircle size={20} />
              </ListItemIcon>
              {open && (
                <ListItemText
                  primary="New Chat"
                  primaryTypographyProps={{ fontSize: "15px" }}
                  sx={{ color: "#d97757", fontWeight: "bold" }}
                />
              )}
            </ListItem>
            <ListItem button>
              <ListItemIcon sx={{ color: "gray", minWidth: "28px" }}>
                <PiChatsCircleBold size={20} />
              </ListItemIcon>
              {open && (
                <ListItemText
                  primary="Chats"
                  primaryTypographyProps={{ fontSize: "15px" }}
                  sx={{ color: "#faf9f5", fontWeight: "bold" }}
                />
              )}
            </ListItem>
            <ListItem sx={{ pt: 4 }}>
              <ListItemIcon
                sx={{ color: "#faf9f5", minWidth: "1px" }}
              ></ListItemIcon>
            </ListItem>
            {open && (
              <>
                <ListItem>
                  <ListItemIcon
                    sx={{ color: "#faf9f5", minWidth: "1px" }}
                  ></ListItemIcon>
                  <ListItemText
                    primary="Recents"
                    primaryTypographyProps={{ fontSize: "12px" }}
                    sx={{ color: "#faf9f5", fontWeight: "bold" }}
                  />
                </ListItem>
                <List component="div" disablePadding>
                  {/* Example Recent Items */}
                  <ListItem button sx={{ paddingTop: "2px" }}>
                    <ListItemText
                      primary="UI Clone of Claude"
                      primaryTypographyProps={{ fontSize: "14px" }}
                      sx={{ color: "#faf9f5" }}
                    />
                  </ListItem>
                  <ListItem button sx={{ paddingTop: "3px" }}>
                    <ListItemText
                      primary="Made by Nimish Kumar"
                      primaryTypographyProps={{ fontSize: "14px" }}
                      sx={{ color: "#7d7c78" }}
                    />
                  </ListItem>
                </List>
              </>
            )}
          </List>
        </Box>
        {/* Bottom Section */}
        <Box>
          <ListItem>
            <ListItemIcon sx={{ color: "#7d7c78", minWidth: "40px" }}>
              <Avatar sx={{ bgcolor: "black", width: 30, height: 30 }}>
                N
              </Avatar>
            </ListItemIcon>
            {open && (
              <ListItemText
                primary="Nimish"
                secondary="Free Plan"
                primaryTypographyProps={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "white",
                }}
                secondaryTypographyProps={{
                  fontSize: "13px",
                  color: "#7d7c78",
                }}
              />
            )}
          </ListItem>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
