import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Services: React.FC = () => {
  return (
    <>
      <SEO
        title="Kalysta Wedding Hub | Wedding Planner & Event Management in Chengannur, Kerala"
        description="Kalysta Wedding Hub offers wedding planning, elegant décor and catering services in Chengannur, Thiruvalla, Mavelikara, Omalloor, Pathanamthitta and across Kerala."
        keywords="wedding planner in chengannur, event management chengannur, wedding catering kerala, wedding planner thiruvalla, event management mavelikara"
        url="https://www.kalystahub.com/"
      />

      <Layout>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {/* Page Header */}
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                letterSpacing: "0.25em",
                fontSize: 11,
              }}
            >
              SERVICES
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mt: 1,
                mb: 1,
                fontSize: { xs: 26, md: 32 },
              }}
            >
              Services we provide
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary", maxWidth: 620 }}
            >
              At Kalysta Wedding Hub, every celebration is treated as a unique
              story. From complete wedding planning to intimate family
              gatherings, we blend tradition, detail and luxury to create
              unforgettable experiences.
            </Typography>

            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexWrap: "wrap",
                gap: 1, // row + column spacing
              }}
            >
              <Chip
                label="Full Wedding Planning"
                size="small"
                sx={{
                  borderRadius: 999,
                  bgcolor: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "primary.main",
                  fontSize: 11,
                }}
              />
              <Chip
                label="Décor & Stage"
                size="small"
                sx={{
                  borderRadius: 999,
                  bgcolor: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "primary.main",
                  fontSize: 11,
                }}
              />
              <Chip
                label="Catering"
                size="small"
                sx={{
                  borderRadius: 999,
                  bgcolor: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "primary.main",
                  fontSize: 11,
                }}
              />
              <Chip
                label="Traditional & Theme Events"
                size="small"
                sx={{
                  borderRadius: 999,
                  bgcolor: "rgba(212,175,55,0.08)",
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "primary.main",
                  fontSize: 11,
                }}
              />
            </Box>
          </Box>

          <Divider
            sx={{
              borderColor: "rgba(212,175,55,0.25)",
              borderBottomWidth: 0.5,
            }}
          />

          {/* Main Services Grid */}
          <Grid container spacing={3}>
            {/* Complete Wedding Planning */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid rgba(212,175,55,0.3)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.18em" }}
                  >
                    COMPLETE WEDDING PLANNING
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    End-to-end planning & coordination
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1.5 }}
                  >
                    A concierge-style planning service for couples who want a
                    seamless, stress-free experience from the first discussion
                    to the final farewell.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    component="div"
                  >
                    <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                      <li>
                        Concept & theme development tailored to your story
                      </li>
                      <li>Budget planning and vendor alignment</li>
                      <li>Venue walkthroughs & layout planning</li>
                      <li>Detailed timelines and run-sheets for all events</li>
                      <li>
                        Vendor coordination (photographers, makeup, décor,
                        catering, music and more)
                      </li>
                      <li>
                        Full on-day execution with a dedicated Kalysta
                        coordination team
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Catering */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid rgba(212,175,55,0.3)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.18em" }}
                  >
                    CATERING
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    Traditional sadhya to luxe buffets
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1.5 }}
                  >
                    We coordinate with trusted catering partners to deliver
                    memorable dining experiences that look as beautiful as they
                    taste.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    component="div"
                  >
                    <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                      <li>Kerala traditional sadhya arrangements</li>
                      <li>Multi-cuisine buffets and plated service</li>
                      <li>Live counters and speciality food stations</li>
                      <li>Dessert tables and wedding delicacy highlights</li>
                      <li>Complete buffet setup, service & presentation</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Décor & Stage / Mandap */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid rgba(212,175,55,0.3)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.18em" }}
                  >
                    DÉCOR, STAGE & MANDAP
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    Theme-based design & styling
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1.5 }}
                  >
                    From traditional mandaps to contemporary luxury stages, we
                    create visual experiences that set the mood for your
                    celebration.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    component="div"
                  >
                    <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                      <li>Reception stages and couple backdrops</li>
                      <li>Kerala-style mandap & traditional setups</li>
                      <li>Theme-based décor (minimal, floral, rustic, luxe)</li>
                      <li>Entrance, pathway & photo corner styling</li>
                      <li>Candle décor, florals and ambient lighting</li>
                      <li>Table styling and guest experience elements</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Events, Cultural & Entertainment */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid rgba(212,175,55,0.3)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.18em" }}
                  >
                    EVENTS & TRADITIONAL PROGRAMS
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    Lights, sound, culture & performance
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1.5 }}
                  >
                    We curate a blend of modern entertainment and traditional
                    art forms to reflect your personality and roots.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    component="div"
                  >
                    <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                      <li>Lights and sound for events and receptions</li>
                      <li>Fusion DJ and live music performances</li>
                      <li>
                        Traditional programs such as Mohiniyattam Vattapaatu and
                        other regional art forms
                      </li>
                      <li>Custom concept events for haldi, mehendi & more</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Birthday & Private Celebrations */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid rgba(212,175,55,0.3)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.18em" }}
                  >
                    BIRTHDAYS & PRIVATE CELEBRATIONS
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    Intimate moments with a luxe touch
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1.5 }}
                  >
                    Whether it&apos;s a milestone birthday or a close family
                    gathering, we bring charm and elegance to every detail.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    component="div"
                  >
                    <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                      <li>Stage & backdrop décor for birthdays</li>
                      <li>Balloon and theme-based decorations</li>
                      <li>Cake table and centerpiece styling</li>
                      <li>Lighting, music and basic entertainment support</li>
                      <li>Photo corners and memory spots</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Reception Planning */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid rgba(212,175,55,0.3)",
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.18em" }}
                  >
                    RECEPTION PLANNING
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    Grand welcomes & smooth flow
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1.5 }}
                  >
                    We ensure your reception is as well-orchestrated as it is
                    beautiful, from couple entry to the final send-off.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    component="div"
                  >
                    <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                      <li>Reception stage & ambience design</li>
                      <li>Couple entry concepts & special moments</li>
                      <li>Lighting & sound coordination</li>
                      <li>Program flow planning with anchor / host</li>
                      <li>Guest movement and VIP coordination</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Hospitality & Support Team */}
            <Grid size={{ xs: 12, md: 12 }}>
              <Card
                sx={{
                  bgcolor: "background.paper",
                  border: "1px solid rgba(212,175,55,0.3)",
                }}
              >
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.18em" }}
                  >
                    HOSPITALITY & SUPPORT TEAM
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    Professional team for guest experience
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1.5 }}
                  >
                    A well-coordinated team on the ground ensures that every
                    guest feels welcomed and every moment runs smoothly.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    component="div"
                  >
                    <ul style={{ margin: 0, paddingLeft: "1.1rem" }}>
                      <li>Experienced anchors and event hosts</li>
                      <li>Welcome girls for premium guest greeting</li>
                      <li>Security personnel for access & crowd management</li>
                      <li>Ushers and guest coordinators</li>
                      <li>Support staff for backstage and on-day operations</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Bottom CTA */}
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
                  Need a customised plan for your event?
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 0.5 }}
                >
                  Share your date, venue and requirements, and we&apos;ll help
                  you choose the right combination of services.
                </Typography>
              </Box>
              <Box>
                <Typography
                  component="a"
                  href="#/contact"
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
                  }}
                >
                  Talk to Kalysta
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Layout>
    </>
  );
};

export default Services;
