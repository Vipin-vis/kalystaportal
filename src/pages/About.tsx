import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import Layout from "../components/Layout";

const About: React.FC = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {/* Header */}
        <Box>
          <Typography
            variant="overline"
            sx={{
              color: "primary.main",
              letterSpacing: "0.25em",
              fontSize: 11,
            }}
          >
            ABOUT KALYSTA
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mt: 1,
              mb: 1,
              fontSize: { xs: 26, md: 32 },
            }}
          >
            Crafting celebrations with care, detail & experience
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", maxWidth: 700 }}
          >
            Kalysta Wedding Hub is a new venture built by a team that has spent
            over 15 years working behind the scenes of weddings and events. The
            people behind Kalysta come from strong backgrounds in décor,
            planning and professional cooking, and now bring that experience
            together under one name to create celebrations that feel warm,
            personal and luxuriously put together.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Story & Philosophy */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Our story
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1.5 }}
                >
                  Kalysta grew out of years of helping friends, families and
                  clients with décor, food and event flow under different
                  banners. After handling many weddings and family functions,
                  the team decided to bring this work together as a dedicated,
                  focused brand – Kalysta Wedding Hub.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  Even though the brand is new, the thinking, systems and care
                  behind it come from long, practical experience in the field.
                  Today, we work across Kerala, styling South Indian weddings,
                  receptions, birthdays and intimate gatherings with a focus on
                  aesthetic décor, seamless coordination and memorable food
                  experiences.
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Experience you can trust
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  The core team at Kalysta collectively brings{" "}
                  <strong>15+ years of hands-on experience</strong> gained from
                  working with various event organisers, caterers and venues
                  before starting this venture.
                </Typography>
                <ul style={ulStyle}>
                  <li>Wedding décor and stage design for varied venues</li>
                  <li>End-to-end event planning and guest flow management</li>
                  <li>
                    Professional cooking and menu planning for sadya, buffet and
                    reception cuisine
                  </li>
                  <li>Handling small intimate events to large guest lists</li>
                </ul>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 1 }}
                >
                  This experience shows up in the small things – how the flow of
                  events is planned, how food timing is managed, and how décor
                  is adapted to your hall or home instead of forcing a template.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Key Highlights / Stats */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Card
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                border: "1px solid rgba(212,175,55,0.4)",
                height: "100%",
              }}
            >
              <CardContent>
                <Typography
                  variant="overline"
                  sx={{ color: "primary.main", letterSpacing: "0.18em" }}
                >
                  AT A GLANCE
                </Typography>

                <Stack spacing={2.5} sx={{ mt: 2 }}>
                  <Box>
                    <Typography variant="h5">15+ years</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      of combined experience that the team brings into this new
                      venture from décor, event planning and professional
                      cooking backgrounds.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h5">100+ events</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      handled by the team across weddings, receptions,
                      engagement functions, birthdays and house events over the
                      years.
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="h5">End-to-end support</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      Décor, stage, sadya, reception cuisine, cultural events,
                      lights, sound, anchoring and on-ground coordination –
                      planned under one roof.
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider
          sx={{
            borderColor: "rgba(212,175,55,0.25)",
            borderBottomWidth: 0.5,
          }}
        />

        {/* Food & Hygiene section */}
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Professional cooking & hygienic food handling
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 1.5 }}
            >
              Food is at the heart of most South Indian celebrations. Our
              kitchen and catering partners are led by{" "}
              <strong>professional cooks and chefs</strong> who have been
              preparing sadya, vegetarian and non-veg menus for years in
              wedding and function setups.
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              We place strong emphasis on <strong>hygiene, quality and
              consistency</strong>:
            </Typography>
            <ul style={ulStyle}>
              <li>Clean and organised cooking environments</li>
              <li>Proper food handling and serving practices</li>
              <li>Fresh ingredients sourced from trusted vendors</li>
              <li>
                Menus planned for both taste and digestion, not just quantity
              </li>
              <li>
                Timely service so guests enjoy food at the right temperature
              </li>
            </ul>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              How we approach every event
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mb: 1.5 }}
            >
              Whether it&apos;s a small home function or a grand hall wedding,
              we follow a structured, calm and professional approach:
            </Typography>
            <ul style={ulStyle}>
              <li>
                We listen first – understanding your family, customs and
                priorities.
              </li>
              <li>
                We suggest ideas that match your venue, guest count and budget.
              </li>
              <li>
                We co-ordinate vendors so you have a single, clear point of
                contact.
              </li>
              <li>
                On the event day, our team is on-ground to manage flow and
                handle last-minute changes.
              </li>
            </ul>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", mt: 1 }}
            >
              The goal is simple: you enjoy your celebration like a guest, while
              we quietly take care of the rest.
            </Typography>
          </Grid>
        </Grid>

        {/* Values / What makes us different */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              What makes Kalysta different
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={valueCardStyle}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                  Personal, not factory-style
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  We don&apos;t believe in copy-paste events. Décor, menus and
                  flow are adapted to your story, your venue and your people,
                  even though processes are refined from years of experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={valueCardStyle}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                  Detail-first planning
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  From the height of the stage to the time food is served, we
                  pay attention to the details that guests may not see but will
                  definitely feel.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={valueCardStyle}>
              <CardContent>
                <Typography variant="subtitle1" sx={{ mb: 0.5 }}>
                  Calm, dependable team
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                >
                  Weddings can be emotional and high-pressure. Our role is to be
                  the calm in the background, handling logistics so you can stay
                  present in the moment.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* CTA */}
        <Box
          sx={{
            borderRadius: 3,
            border: "1px solid rgba(212,175,55,0.5)",
            bgcolor: "rgba(5,5,7,0.95)",
            p: 3,
            mt: 2,
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
                Want to know if Kalysta is the right fit for your wedding?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 0.5 }}
              >
                Tell us your date, venue and what kind of celebration you&apos;re
                dreaming of. We&apos;ll share honest suggestions and a package
                that fits your needs.
              </Typography>
            </Box>
            <Box>
              <Typography
                component="a"
                href="#/contact"
                sx={{
                  px: 3,
                  py: 1,
                  width:"142px",
                  borderRadius: 999,
                  border: "1px solid rgba(212,175,55,0.9)",
                  textDecoration: "none",
                  fontSize: 13,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "primary.main",
                  display: "inline-block",
                }}
              >
                Book now
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Layout>
  );
};

const ulStyle: React.CSSProperties = {
  margin: 0,
  marginTop: 4,
  paddingLeft: "1.1rem",
  fontSize: 13,
  lineHeight: 1.6,
};

const valueCardStyle = {
  bgcolor: "background.paper",
  borderRadius: 3,
  border: "1px solid rgba(212,175,55,0.35)",
  height: "100%",
} as const;

export default About;
