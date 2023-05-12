import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    if (event.target.innerText === "Log In") {
      navigate("/login");
    }
  };

  return (

    <Box
     display="flex" 
        justifyContent="space-between"
     
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
        {/* NAV LINKS */}
        <Box display="flex" justifyContent="left" p={2}>
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
        <IconButton >
            <HomeOutlinedIcon style={{ fontSize: "30px" }}/>
        </IconButton>
        </NavLink>
</Box>
      {/* ICONS */}
      <Box display="flex"
      
       justifyContent="" p={2}>
        
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
          <MenuItem onClick={handleClose}>Log In</MenuItem>
          <MenuItem onClick={handleClose}>Log out</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
