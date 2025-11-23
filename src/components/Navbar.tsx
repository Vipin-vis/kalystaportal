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

// TODO: replace this with your actual logo path / name
import kalystaMark from "../assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  // no direct "Contact" item – CTA button handles that
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
                borderRadius: "50%",
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

          {/* Desktop navigation */}
          {!isMobile && (
            <Box
              sx={{
                ml: "auto",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
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
                    textTransform: "uppercase",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}

              {/* MAIN CTA: BOOK US NOW */}
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                size="small"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 999,
                  px: 2.8,
                  fontSize: 12,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  borderColor: "primary.main",
                  color: "primary.main",
                  transition:
                    "background 0.3s ease, box-shadow 0.3s ease, transform 0.15s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(120deg, rgba(212,175,55,0.15), rgba(212,175,55,0.6), rgba(212,175,55,0.15))",
                    opacity: 0,
                    transform: "translateX(-40%)",
                    transition: "opacity 0.3s ease, transform 0.4s ease",
                  },
                  "&:hover::before": {
                    opacity: 1,
                    transform: "translateX(0%)",
                  },
                  "&:hover": {
                    color: "#050507",
                    boxShadow: "0 0 18px rgba(212,175,55,0.65)",
                    borderColor: "transparent",
                    background:
                      "linear-gradient(120deg, #f6e27a, #d4af37, #f6e27a)",
                    transform: "translateY(-1px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                    boxShadow: "0 0 10px rgba(212,175,55,0.45)",
                  },
                }}
              >
                BOOK US NOW
              </Button>
            </Box>
          )}

          {/* Mobile menu icon */}
          {isMobile && (
            <IconButton
              edge="end"
              onClick={toggleDrawer}
              sx={{ color: "primary.main" }}
            >
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
                      textTransform: "uppercase",
                    },
                  }}
                />
              </ListItemButton>
            ))}

            {/* Mobile drawer CTA as well */}
            <ListItemButton
              component={RouterLink}
              to="/contact"
              onClick={toggleDrawer}
            >
              <ListItemText
                primary="BOOK US NOW"
                primaryTypographyProps={{
                  sx: {
                    fontSize: 13,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "primary.main",
                  },
                }}
              />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
