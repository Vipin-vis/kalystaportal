import React from "react";
import { Box, Container, Typography, Link as MuiLink, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(212,175,55,0.25)",
        bgcolor: "#050507",
        py: 4,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: '"Playfair Display", serif',
                letterSpacing: "0.18em",
              }}
            >
              KALYSTA
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
              Turning moments into memories with curated weddings and luxury events across Kerala.
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="caption"
              sx={{ color: "primary.main", letterSpacing: "0.18em" }}
            >
              CONTACT
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              +91 70127 61287
              <br />
              +91 85905 25127
            </Typography>
            <Typography variant="body2" sx={{ mt: 0.5, color: "text.secondary" }}>
              kalystaweddinghub@gmail.com
            </Typography>
          </Grid>

          {/* Social Icons */}
          <Grid size={{ xs: 6, md: 4 }}>
            <Typography
              variant="caption"
              sx={{ color: "primary.main", letterSpacing: "0.18em" }}
            >
              SOCIAL
            </Typography>

            <Box sx={{ mt: 1, display: "flex", flexDirection: "row", gap: 1 }}>
              {/* Instagram */}
              <IconButton
                component="a"
                href="https://www.instagram.com/kalystaweddinghub?igsh=MXV5eTU0ZnJyMnB6aA%3D%3D&utm_source=qr"
                target="_blank"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                <InstagramIcon fontSize="medium" />
              </IconButton>

              {/* Facebook */}
              <IconButton
                component="a"
                href="https://www.facebook.com/share/1GT8DSAXds/?mibextid=wwXIfr"
                target="_blank"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                <FacebookIcon fontSize="medium" />
              </IconButton>

              {/* WhatsApp */}
              <IconButton
                component="a"
                href="https://wa.me/917012761287https://whatsapp.com/channel/0029VbC6yU53GJP70shMp609"
                target="_blank"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                <WhatsAppIcon fontSize="medium" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="caption"
          sx={{ mt: 3, display: "block", textAlign: "center", color: "text.secondary" }}
        >
          © {new Date().getFullYear()} Kalysta Wedding Hub. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
