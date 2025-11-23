import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

// TODO: replace with your actual logo path
import kalystaMark from "../assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => setOpen((o) => !o);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(0,0,0,0.9)",
          borderBottom: "1px solid rgba(212,175,55,0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar sx={{ px: { xs: 2, md: 6 } }}>
          {/* Logo + name */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <Box
              component="img"
              src={kalystaMark}
              alt="Kalysta Logo"
              sx={{
                width: 32,
                height: 32,
                mr: 1.5,
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  letterSpacing: "0.18em",
                  fontSize: { xs: 16, md: 18 },
                }}
              >
                KALYSTA
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "primary.main",
                  letterSpacing: "0.16em",
                }}
              >
                WEDDING HUB
              </Typography>
            </Box>
          </Box>

          {/* Desktop nav */}
          {!isMobile && (
            <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}>
              {links.map((link) => (
                <Button
                  key={link.to}
                  component={RouterLink}
                  to={link.to}
                  size="small"
                  sx={{
                    color: "text.secondary",
                    fontSize: 12,
                    letterSpacing: "0.14em",
                    "&.active, &:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                size="small"
                sx={{
                  borderColor: "primary.main",
                  color: "primary.main",
                  borderRadius: 999,
                  px: 2.5,
                }}
              >
                Book Consultation
              </Button>
            </Box>
          )}

          {/* Mobile menu */}
          {isMobile && (
            <IconButton edge="end" onClick={toggleDrawer} sx={{ color: "primary.main" }}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 240,
            bgcolor: "background.default",
            height: "100%",
            color: "text.primary",
          }}
        >
          <List sx={{ mt: 8 }}>
            {links.map((link) => (
              <ListItemButton
                key={link.to}
                component={RouterLink}
                to={link.to}
                onClick={toggleDrawer}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    sx: {
                      fontSize: 13,
                      letterSpacing: "0.18em",
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
