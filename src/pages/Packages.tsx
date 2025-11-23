import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
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
            designed as a starting point to understand possibilities. Final
            details are customised based on guest count, location, décor style,
            menu preferences and technical requirements.
          </Typography>

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Chip label="Décor & Stage" size="small" sx={chipStyle} />
            <Chip label="Complete Wedding Packages" size="small" sx={chipStyle} />
            <Chip label="Traditional Sadya" size="small" sx={chipStyle} />
            <Chip label="Reception Cuisine" size="small" sx={chipStyle} />
            <Chip label="Cultural & Entertainment" size="small" sx={chipStyle} />
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
                  Tailored packages covering the full wedding décor experience
                  – stage, entrance, photo spots and optional planning
                  coordination.
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{ mb: 0.5, fontSize: 13 }}
                  >
                    Sample tiers:
                  </Typography>

                  <ul style={ulStyle}>
                    <li>
                      <strong>Essential Décor</strong> – simple elegant stage,
                      minimal floral accents, basic entrance décor.
                    </li>
                    <li>
                      <strong>Signature Wedding</strong> – detailed stage,
                      entrance concepts, photo corners and coordinated décor
                      across events.
                    </li>
                    <li>
                      <strong>Luxury Experience</strong> – high-impact florals,
                      custom structures, layered lighting and curated thematic
                      spots.
                    </li>
                  </ul>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Stage-only */}
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
                  Ideal for venues that already provide basic décor. Create a
                  standout stage or mandap as the main visual highlight.
                </Typography>

                <ul style={ulStyle}>
                  <li>
                    <strong>Compact Home / Hall Stage</strong>
                  </li>
                  <li>
                    <strong>Grand Hall Stage</strong> – based on florals,
                    lighting and structure
                  </li>
                  <li>
                    <strong>Custom Theme Stage</strong> – curated look designed
                    uniquely for your venue
                  </li>
                </ul>

                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", mt: 1, display: "block" }}
                >
                  Add-ons include photo corners, welcome boards and entrance
                  styling.
                </Typography>
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
              Authentic sadya prepared by professional cooks and served with
              attention to timing and presentation.
            </Typography>
          </Grid>

          {/* 4 tiers */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  BASIC SADYA
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  Simple, traditional spread for intimate gatherings.
                </Typography>

                <ul style={ulStyle}>
                  <li>Basic curries & thorans</li>
                  <li>Pickles & pappadam</li>
                  <li>Single payasam</li>
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
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  Balanced sadya with more accompaniments.
                </Typography>

                <ul style={ulStyle}>
                  <li>Full sadya curries & sides</li>
                  <li>Multiple upperis/thorans</li>
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
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  Enhanced menu with richer dishes.
                </Typography>

                <ul style={ulStyle}>
                  <li>Extended curry selections</li>
                  <li>Special dishes on request</li>
                  <li>2–3 payasams</li>
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
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  A lavish, premium sadya with extended varieties.
                </Typography>

                <ul style={ulStyle}>
                  <li>Premium dishes & special festival items</li>
                  <li>Multiple dessert options</li>
                  <li>Full expanded menu</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Reception Cuisine */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Reception Non-Veg Cuisine Packages
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Curated non-veg menus designed for receptions and evening events.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  CELEBRATION MENU
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  Balanced menus suitable for moderate to large gatherings.
                </Typography>

                <ul style={ulStyle}>
                  <li>1–2 non-veg mains (chicken, fish)</li>
                  <li>Rice / chapati / appam options</li>
                  <li>Salad, pickle, dessert</li>
                  <li>Optional tea/coffee counter</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  PREMIUM RECEPTION MENU
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mb: 1 }}
                >
                  High-variety menus suitable for luxury receptions and VIP
                  gatherings.
                </Typography>

                <ul style={ulStyle}>
                  <li>Multiple non-veg mains (chicken, mutton, seafood)</li>
                  <li>Live counters (grill, pasta, shawarma etc.)</li>
                  <li>Starters & canapés</li>
                  <li>Dessert spread and mocktails</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Cultural & Entertainment */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
              Cultural & Entertainment Packages
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Add cultural charm, energy and entertainment to your event.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Card sx={cardStyle}>
              <CardContent>
                <Typography variant="overline" sx={overlineStyle}>
                  VALLAPATTU
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Traditional performances ideal for family gatherings and
                  pre-wedding events.
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

                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  Modern DJ sets with optional lighting and sound.
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Fusion events combining DJ + traditional live elements
                  available on request.
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
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Elegant Mohiniyattam performances curated for receptions and
                  cultural evenings.
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
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Professional lighting & sound solutions for weddings,
                  receptions and stage events.
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
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", display: "block", mb: 1.5 }}
          >
            All packages are customised after understanding your event needs.
            Share your date, venue and expectations to receive a tailored plan.
          </Typography>
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
