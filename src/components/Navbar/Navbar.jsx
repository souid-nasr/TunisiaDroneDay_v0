import React, { useState } from "react";
import logo from '../../assets/images/TunisiaDroneDayLogo.png'
import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Menu as MenuIcon,
  Twitter,
} from "@mui/icons-material/";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const LogoBox = styled(Box)({
    display: "flex",
    gap: 10,
  });
  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
  });
  const SearchBox = styled(Box)({
    display: "flex",
    gap: 5,
  });
  const MenuItems = [
    { Name: "Home", To: "/" },
    { Name: "About", To: "/about" },
    { Name: "Schedule", To: "/schedule" },
    { Name: "Blog", To: "/blogs" },
    { Name: "Contact Us", To: "/contact" },
  ];
  const [open, SetOpen] = useState(false);
  return (
  <div>
    <AppBar position={"static"} color={"transparent"} sx={{background:"black"}}>
      <StyledToolbar>
        <LogoBox>
<Link to='/'>
<img src={logo} alt="logo" />
</Link>
        </LogoBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item,index) => (
            <Typography key={index} 
            sx={{
              cursor: "pointer",
              fontSize: "14px",
            }}
            >
            <Link to={item.To}
            style={{"color":"#fff","textDecoration": "none"}}
            >
              {item.Name}
            </Link >
            </Typography>
          ))}
        </MenuBox>

        <SearchBox>
        <button type = "button" className='btn-item bg-brown fw-4 ls-2'><Link to='/schedule' style={{"color":"#fff","textDecoration": "none"}}>See Schedule</Link></button>
                  <button type = "button" className='btn-item bg-dark fw-4 ls-2'><Link to='/register' style={{"color":"#fff","textDecoration": "none"}}>Register Now</Link></button>
          <MenuIcon
            sx={{
              color: "white",
              display: { xs: "block", sm: "block", md: "none" },
            }}
            onClick={() => SetOpen(!open)}
          />
        </SearchBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => SetOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem
              sx={{
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
    </div>
  );
};

export default Navbar;