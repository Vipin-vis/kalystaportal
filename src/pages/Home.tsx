import React from "react";
import { Box, Grid, Typography, Card, CardContent, Stack, Button } from "@mui/material";
import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel"; // WhatsApp number for Kalysta (change if needed)

const Home: React.FC = () => {
  const handleEquire = () => {
    // If you are using BrowserRouter:
    // window.location.href = "/contact";

    // If you are using HashRouter:
    window.location.href = "#/contact";
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <HeroCarousel />

        {/* Highlights section */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                bgcolor: "background.paper",
                border: "1px solid rgba(212,175,55,0.25)",
              }}
            >
              <CardContent>
                <Typography variant="overline" sx={{ color: "primary.main" }}>
                  BESPOKE
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Wedding concepts
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  From traditional Kerala mandaps to modern minimal luxury,
                  every event is crafted uniquely for your story and venue.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                bgcolor: "background.paper",
                border: "1px solid rgba(212,175,55,0.25)",
              }}
            >
              <CardContent>
                <Typography variant="overline" sx={{ color: "primary.main" }}>
                  END-TO-END
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Planning & styling
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Décor, vendors, timelines and on-day execution managed by a
                  calm, detail-obsessed team so you can simply enjoy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card
              sx={{
                bgcolor: "background.paper",
                border: "1px solid rgba(212,175,55,0.25)",
              }}
            >
              <CardContent>
                <Typography variant="overline" sx={{ color: "primary.main" }}>
                  EXPERIENCES
                </Typography>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  For every celebration
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Engagements, weddings, receptions, sadhya layouts, birthdays
                  and intimate gatherings – curated in Kalysta’s signature
                  timeless luxury.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Featured Packages Strip */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              letterSpacing: "0.25em",
              fontSize: 11,
            }}
          >
            FEATURED PACKAGES
          </Typography>

          <Typography variant="h5" sx={{ mt: 1, mb: 3 }}>
            Explore Our Most Requested Packages
          </Typography>

          <Grid container spacing={3}>
            {/* Wedding Décor */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  border: "1px solid rgba(212,175,55,0.3)",
                  height: "100%",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "rgba(212,175,55,0.8)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="overline" sx={{ color: "primary.main" }}>
                    WEDDING DÉCOR
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5 }}>
                    Stage & Complete Wedding Packages
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    Elegant home stages to full venue décor setups – tailored
                    for your hall, home or outdoor space.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Sadya */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  border: "1px solid rgba(212,175,55,0.3)",
                  height: "100%",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "rgba(212,175,55,0.8)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="overline" sx={{ color: "primary.main" }}>
                    KERALA SADYA
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5 }}>
                    Authentic Traditional Sadya
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    Multiple sadya packages – from simple traditional spreads to
                    premium, extended menus for larger functions.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Reception */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  border: "1px solid rgba(212,175,55,0.3)",
                  height: "100%",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    borderColor: "rgba(212,175,55,0.8)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="overline" sx={{ color: "primary.main" }}>
                    RECEPTION CUISINE
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5 }}>
                    Non-Veg Celebration Menus
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mt: 1 }}
                  >
                    Custom non-veg menus with starters, mains, desserts and
                    optional live counters for receptions and evening events.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* CTA */}
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
            }}
          >
            <Typography
              component="a"
              href="#/packages"
              sx={{
                px: 3,
                py: 1,
                borderRadius: 999,
                border: "1px solid rgba(212,175,55,0.9)",
                textDecoration: "none",
                fontSize: 13,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "rgba(212,175,55,0.1)",
                },
              }}
            >
              View All Packages
            </Typography>
          </Box>
        </Box>

        {/* Small CTA strip */}
        <Box
          sx={{
            borderRadius: 3,
            border: "1px solid rgba(212,175,55,0.4)",
            bgcolor: "rgba(10,10,10,0.9)",
            p: 3,
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
            spacing={2}
          >
            <Box>
              <Typography variant="subtitle1">
                Planning a wedding or reception in the next 6–12 months?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 0.5 }}
              >
                Share your date, venue and guest count for a tailored décor and
                planning proposal.
              </Typography>
            </Box>

            <Box>
              <Button
                onClick={handleEquire}
                sx={{
                  borderRadius: 999,
                  border: "1px solid rgba(212,175,55,0.9)",
                  px: 3,
                  py: 1,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  fontSize: 13,
                  color: "primary.main",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(212,175,55,0.1)",
                    borderColor: "rgba(212,175,55,1)",
                  },
                }}
              >
                Enquire Now
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
