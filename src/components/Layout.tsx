import React from "react";
import { Box, Container, useMediaQuery, Fab } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        position: "relative",
        pb: isMobile ? 9 : 0, // space for mobile bottom bar
      }}
    >
      <Navbar />

      <Box component="main" sx={{ pt: { xs: 9, md: 11 }, pb: 6 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>

      <FloatingContactButtons />

      <Footer />
    </Box>
  );
};

/** Floating circular Call + WhatsApp buttons (all screen sizes) */
const FloatingContactButtons: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: 12, md: 24 },
        bottom: { xs: 74, md: 24 }, // above mobile bar on small screens
        display: "flex",
        flexDirection: "column",
        gap: 1.2,
        zIndex: (theme) => theme.zIndex.appBar + 2,
      }}
    >
      {/* Call FAB */}
      <Fab
        size="medium"
        component="a"
        href="tel:+917012761287"
        sx={{
          bgcolor: "rgba(0,0,0,0.9)",
          color: "primary.main",
          border: "1px solid rgba(212,175,55,0.8)",
          boxShadow: "0 0 10px rgba(0,0,0,0.8)",
          transition: "box-shadow 0.25s ease, transform 0.15s ease",
          "&:hover": {
            bgcolor: "rgba(15,15,15,1)",
            boxShadow: "0 0 18px rgba(212,175,55,0.7)",
            transform: "translateY(-1px)",
          },
        }}
      >
        <PhoneIcon />
      </Fab>

      {/* WhatsApp FAB */}
      <Fab
        size="medium"
        component="a"
        href="https://wa.me/917012761287"
        target="_blank"
        sx={{
          bgcolor: "#25D366",
          color: "#000",
          boxShadow: "0 0 12px rgba(0,0,0,0.8)",
          transition: "box-shadow 0.25s ease, transform 0.15s ease",
          "&:hover": {
            bgcolor: "#1EB55A",
            boxShadow: "0 0 20px rgba(37,211,102,0.8)",
            transform: "translateY(-1px)",
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </Box>
  );
};

export default Layout;
