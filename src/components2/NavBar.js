import * as React from 'react';
import styled from "styled-components"
import MenuIcon from "@material-ui/icons/Menu";
import { PersonOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { AppBar,Box,Toolbar,IconButton,Typography,Menu,
Container,Button, MuiThemeProvider,Badge} from '@material-ui/core';
import { Link } from 'react-router-dom';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
color:black;
`;

  return (
    <MuiThemeProvider>
    <AppBar position="static" style={{backgroundColor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{color:"black"}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
              style={{marginTop:"45px"}}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Products</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to="/">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              </Link>
              <Link to="/productlist">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Products
              </Button>
              </Link>
          </Box>
            <MenuItem>
            <Link to="/cart">
            <Badge badgeContent={4} color="primary" style={{marginRight:"20px"}}>
                <ShoppingCartOutlined  style={{fontSize:"25px"}}/>
            </Badge>
            </Link>
            </MenuItem>
          <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonOutlined style={{fontSize:"30px",}}/>
              </IconButton>
            <Menu style={{marginTop:"45px",width:"400px"}}
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >   <Link to="/register">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
                </Link>
                <Link to="/login">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
                </Link>
                <Link to="/">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
                </Link>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </MuiThemeProvider>

  );
};
export default ResponsiveAppBar;
