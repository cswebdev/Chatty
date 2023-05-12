import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
     display="flex" 
     justifyContent="right" p={4}
     
     sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? colors.grey[700]
            : colors.primary[900],
    
        color:
          theme.palette.mode === "dark"
            ? colors.greenAccent[100]
            : colors.grey[100],
      }}
    
    >
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode} >
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon style={{ fontSize: "30px" }} />
          ) : (
            <LightModeOutlinedIcon style={{ fontSize: "30px" }}/>
          )}
        </IconButton>
        <IconButton >
          <NotificationsOutlinedIcon style={{ fontSize: "30px" }}/>
        </IconButton>
        <IconButton >
          <SettingsOutlinedIcon style={{ fontSize: "30px" }}/>
        </IconButton>
        <IconButton onClick={handleClick} >
          <PersonOutlinedIcon style={{ fontSize: "30px" }}/>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Log out</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
