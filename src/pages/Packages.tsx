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

const Packages: React.FC = () => {
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
            PACKAGES
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mt: 1,
              mb: 1,
              fontSize: { xs: 26, md: 32 },
            }}
          >
            Wedding & Event Packages
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", maxWidth: 620 }}
          >
            Every venue, family and celebration is unique. These packages are
            designed as a starting point to understand budgets and
            possibilities. Final pricing is customised based on guest count,
            location, décor density and specific requirements.
          </Typography>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: 1, // works for both row & column gaps
            }}
          >
            <Chip label="Décor & Stage" size="small" sx={chipStyle} />
            <Chip
              label="Complete Wedding Packages"
              size="small"
              sx={chipStyle}
            />
            <Chip label="Traditional Sadya" size="small" sx={chipStyle} />
            <Chip label="Reception Cuisine" size="small" sx={chipStyle} />
            <Chip
              label="Cultural & Entertainment"
              size="small"
              sx={chipStyle}
            />
            <Chip label="Lights & Sound" size="small" sx={chipStyle} />
          </Box>
        </Box>

        <Divider
          sx={{
            borderColor: "rgba(212,175,55,0.25)",
            borderBottomWidth: 0.5,
          }}
        />

        {/* Complete Wedding & Stage Packages */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  COMPLETE WEDDING PACKAGES
                </Typography>
                <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                  Décor & planning bundles
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1.5 }}
                >
                  Tailored packages that cover the full wedding décor experience
                  – from stage and entrance to key photo spots – with optional
                  add-ons for planning and vendor coordination.
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "primary.main", fontWeight: 500, mb: 0.5 }}
                >
                  Indicative range: ₹25,000 to ₹3,00,000+
                </Typography>
                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                  Pricing depends on décor style, venue size, floral choices,
                  structure, and number of events (engagement, wedding,
                  reception).
                </Typography>

                <Box sx={{ mt: 2 }} component="div">
                  <Typography
                    variant="subtitle2"
                    sx={{ mb: 0.5, fontSize: 13 }}
                  >
                    Sample tiers:
                  </Typography>
                  <ul style={ulStyle}>
                    <li>
                      <strong>Essential Décor (from ~₹25,000)</strong> – Simple
                      elegant stage, basic floral elements, minimal entrance
                      décor.
                    </li>
                    <li>
                      <strong>
                        Signature Wedding (from ~₹75,000–₹1,50,000)
                      </strong>{" "}
                      – Detailed stage styling, entrance, photo corner, pathway
                      elements and coordinated look for your main events.
                    </li>
                    <li>
                      <strong>Luxury Experience (₹1,50,000–₹3,00,000+)</strong>{" "}
                      – High-impact floral work, custom structures, layered
                      lighting, multiple thematic spots and an overall luxury
                      visual experience.
                    </li>
                  </ul>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Stage-only / Focus Décor */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  STAGE / MANDAP-ONLY PACKAGES
                </Typography>
                <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                  Focused stage styling
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1.5 }}
                >
                  Ideal if your venue already provides basic décor and you want
                  a standout, well-designed stage or mandap as the focal point.
                </Typography>

                <Box component="div">
                  <ul style={ulStyle}>
                    <li>
                      <strong>Compact Home / Hall Stage</strong> – from ~₹25,000
                    </li>
                    <li>
                      <strong>Grand Hall Stage</strong> – typically from
                      ~₹50,000–₹1,20,000 depending on structure, florals and
                      lighting
                    </li>
                    <li>
                      <strong>Custom Theme Stage</strong> – for fully curated,
                      themed backdrops and concepts, pricing is shared after
                      understanding size and design direction.
                    </li>
                  </ul>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", display: "block", mt: 1 }}
                  >
                    All stage packages can be paired with add-ons such as photo
                    corners, name boards, welcome boards and entrance styling.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Sadya Packages */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Traditional Kerala Sadya Packages
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Authentic Kerala sadya served with attention to taste,
              presentation and timing – perfect for temple weddings, home
              functions and traditional halls.
            </Typography>
          </Grid>

          {/* Four sadya tiers */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  BASIC SADYA
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  From ₹150 / person
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  Simple, traditional spread for intimate or budget-conscious
                  functions.
                </Typography>
                <ul style={ulStyle}>
                  <li>Basic curries & thorans</li>
                  <li>Pickles & pappadam</li>
                  <li>Payasam (single variety)</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  STANDARD SADYA
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  From ₹180 / person
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  A well-rounded sadya with more accompaniments and balanced
                  flavours.
                </Typography>
                <ul style={ulStyle}>
                  <li>Full sadya curries & sides</li>
                  <li>2+ thorans and upperis</li>
                  <li>1–2 varieties of payasam</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  PREMIUM SADYA
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  From ₹250 / person
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  Enhanced menu with richer payasams and special side dishes.
                </Typography>
                <ul style={ulStyle}>
                  <li>Extended curry & side selection</li>
                  <li>Special dishes on request</li>
                  <li>2–3 varieties of payasam</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  LUXURY SADYA
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  From ₹300 / person
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  A lavish, showcase-style sadya with premium elements.
                </Typography>
                <ul style={ulStyle}>
                  <li>Premium, expanded menu</li>
                  <li>Special regional or festive dishes</li>
                  <li>Multiple payasams & dessert focus</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Reception Non-Veg Cuisine */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Reception Non-Veg Cuisine Packages
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Designed for receptions and evening events, these non-vegetarian
              menus balance taste, presentation and guest preferences.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  CELEBRATION MENU
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  From ~₹350 / plate
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  Ideal for moderate budgets while keeping the experience
                  complete and satisfying.
                </Typography>
                <ul style={ulStyle}>
                  <li>1–2 non-veg mains (e.g., chicken curry, fish fry)</li>
                  <li>Veg curry, rice / chapati / appam</li>
                  <li>Salad, pickle, dessert</li>
                  <li>Tea / coffee add-ons optional</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  LUXURY RECEPTION MENU
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  Premium menus up to ~₹1,200 / plate
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  For high-end receptions and VIP gatherings with a focus on
                  variety and presentation.
                </Typography>
                <ul style={ulStyle}>
                  <li>
                    Multiple non-veg mains (chicken, mutton, seafood options)
                  </li>
                  <li>Live counters (e.g., grill / shawarma / pasta)</li>
                  <li>Assorted starters & canapés</li>
                  <li>Rich dessert spread and mocktails</li>
                </ul>
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", display: "block", mt: 1 }}
                >
                  Exact per-plate pricing depends on menu selections, live
                  counters, and serving style (buffet vs. plated).
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Cultural & Entertainment Packages */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Cultural & Entertainment Packages
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Add character and energy to your celebration with curated programs
              that reflect your culture and personality.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  VALLAPATTU
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  From ~₹20,000
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Traditional vallapaatu / vattapaatu performances that bring
                  warmth and nostalgia to pre-wedding and family events.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  DJ & FUSION
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  DJ from ~₹25,000
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  Modern DJ sets with sound and basic lighting options.
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Fusion programs (DJ + traditional / live elements) typically
                  from ~₹30,000 depending on duration and setup.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  MOHINIYATTAM
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  From ~₹35,000
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Elegant Mohiniyattam performances curated for stage shows,
                  reception segments or cultural evenings.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  LIGHTS & SOUND
                </Typography>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  From ~₹25,000–₹50,000
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Professional lights and sound setup for weddings, receptions
                  and stage shows – final pricing varies by venue size, duration
                  and technical requirements.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Note + CTA */}
        <Box
          sx={{
            borderRadius: 3,
            border: "1px solid rgba(212,175,55,0.5)",
            bgcolor: "rgba(5,5,7,0.95)",
            p: 3,
            mt: 2,
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", display: "block", mb: 1.5 }}
          >
            All prices mentioned are indicative starting points to help you
            understand budgets. Final quotes are shared after a discussion about
            your date, venue, guest count, décor style, menu preferences and
            technical needs.
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
            spacing={2}
          >
            <Box>
              <Typography variant="subtitle1">
                Need a custom package for your wedding or event?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 0.5 }}
              >
                Share your details with us and we&apos;ll create a tailored
                combination of décor, catering, events and technical support to
                match your vision and budget.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Layout>
  );
};

const cardStyle = {
  bgcolor: "background.paper",
  border: "1px solid rgba(212,175,55,0.3)",
  borderRadius: 3,
  height: "100%",
} as const;

const overlineStyle = {
  color: "primary.main",
  letterSpacing: "0.18em",
} as const;

const chipStyle = {
  borderRadius: 999,
  bgcolor: "rgba(212,175,55,0.08)",
  border: "1px solid rgba(212,175,55,0.4)",
  color: "primary.main",
  fontSize: 11,
} as const;

const ulStyle: React.CSSProperties = {
  margin: 0,
  marginTop: 4,
  paddingLeft: "1.1rem",
  fontSize: 13,
  lineHeight: 1.6,
};

export default Packages;
