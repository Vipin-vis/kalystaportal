import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
} from "@mui/material";
import Layout from "../components/Layout";

// TODO: replace these with your actual images in src/assets/gallery/
import imgStageModern from "../assets/stage-modern.jpg";
import imgStageTraditional from "../assets/stage-traditional.jpg";
import imgBuffet from "../assets/buffet.jpg";
import imgSadhya from "../assets/banquet.jpg";
import imgEntrance from "../assets/entrance.png";
import imgCake from "../assets/cake.png";
import imgReception from "../assets/stage-arch.jpg"

type GalleryCategory =
  | "Stage & Mandap"
  | "Sadhya & Dining"
  | "Reception & Buffet"
  | "Details & Moments";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: GalleryCategory;
}

const items: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Reception Stage",
    description:
      "Layered florals, warm lighting and a soft neutral palette for an evening reception.",
    image: imgStageModern,
    category: "Stage & Mandap",
  },
  {
    id: 2,
    title: "Traditional Mandap",
    description:
      "A classic South Indian mandap with vibrant garlands and cultural detailing.",
    image: imgStageTraditional,
    category: "Stage & Mandap",
  },
  {
    id: 3,
    title: "Luxury Buffet Setup",
    description:
      "Non-veg reception buffet with coordinated counters and elevated presentation.",
    image: imgBuffet,
    category: "Reception & Buffet",
  },
  {
    id: 4,
    title: "Kerala Sadya Layout",
    description:
      "Authentic Kerala sadya service with neat, symmetrical banana leaf placement.",
    image: imgSadhya,
    category: "Sadhya & Dining",
  },
  {
    id: 5,
    title: "Entrance & Welcome Path",
    description:
      "A warm welcome with florals, lanterns and subtle lighting guiding guests in.",
    image: imgEntrance,
    category: "Details & Moments",
  },
  {
    id: 6,
    title: "Cake & Celebration Corner",
    description:
      "Dedicated cake and dessert corner styled for birthdays or reception moments.",
    image: imgCake,
    category: "Details & Moments",
  },
//   {
//     id: 7,
//     title: "Ambient Lighting",
//     description:
//       "Stage and hall lighting tuned to enhance both photography and guest experience.",
//     image: imgLighting,
//     category: "Reception & Buffet",
//   },
  {
    id: 8,
    title: "Reception Hall Mood",
    description:
      "Full-hall view showing how décor, lighting and seating come together.",
    image: imgReception,
    category: "Stage & Mandap",
  },
];

const categories: { id: GalleryCategory | "All"; label: string }[] = [
  { id: "All", label: "All" },
  { id: "Stage & Mandap", label: "Stage & Mandap" },
  { id: "Sadhya & Dining", label: "Sadya & Dining" },
  { id: "Reception & Buffet", label: "Reception & Buffet" },
  { id: "Details & Moments", label: "Details & Moments" },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<
    GalleryCategory | "All"
  >("All");

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

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
            GALLERY
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mt: 1,
              mb: 1,
              fontSize: { xs: 26, md: 32 },
            }}
          >
            A glimpse into Kalysta events
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", maxWidth: 650 }}
          >
            A selection of stages, sadya layouts, reception setups and intimate
            details from the weddings and celebrations we&apos;ve styled. Every
            event is customised – this gallery is just a starting point for what
            we can create for you.
          </Typography>

          {/* Category filter */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: 2, flexWrap: "wrap" }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <Chip
                  key={cat.id}
                  label={cat.label}
                  size="small"
                  onClick={() => setActiveCategory(cat.id)}
                  sx={{
                    borderRadius: 999,
                    fontSize: 11,
                    border: isActive
                      ? "1px solid rgba(212,175,55,0.9)"
                      : "1px solid rgba(212,175,55,0.35)",
                    bgcolor: isActive
                      ? "rgba(212,175,55,0.16)"
                      : "rgba(15,15,15,0.9)",
                    color: isActive ? "primary.main" : "text.secondary",
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </Stack>
        </Box>

        {/* Gallery grid */}
        <Grid container spacing={2.5}>
          {filteredItems.map((item, index) => (
            <Grid
              key={item.id}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{
                display: "flex",
              }}
            >
              <Card
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid rgba(212,175,55,0.28)",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxShadow: "0 0 0 rgba(0,0,0,0)",
                  transition:
                    "transform 0.2s ease, box-shadow 0.25s ease, border-color 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 18px 40px rgba(0,0,0,0.65)",
                    borderColor: "rgba(212,175,55,0.9)",
                  },
                }}
              >
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                  <CardMedia
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      height: index % 3 === 0 ? 260 : index % 3 === 1 ? 220 : 240,
                      width: "100%",
                      objectFit: "cover",
                      filter: "brightness(0.9)",
                      transition: "transform 0.4s ease, filter 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                        filter: "brightness(1)",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      bgcolor: "rgba(0,0,0,0.7)",
                      borderRadius: 999,
                      px: 1.5,
                      py: 0.3,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: 10,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "primary.main",
                      }}
                    >
                      {item.category}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ p: 1.8 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontSize: 14,
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", fontSize: 13 }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          {filteredItems.length === 0 && (
            <Grid size={{ xs: 12 }}>
              <Box
                sx={{
                  borderRadius: 3,
                  border: "1px dashed rgba(212,175,55,0.35)",
                  p: 3,
                  textAlign: "center",
                  bgcolor: "rgba(5,5,7,0.95)",
                }}
              >
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  No images in this category yet. Please check another filter or
                  ask us for a customised mood board for your venue.
                </Typography>
              </Box>
            </Grid>
          )}
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
                Liked something from the gallery?
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", mt: 0.5 }}
              >
                Share the images or styles you love with us on WhatsApp or in
                your enquiry, and we&apos;ll create a customised décor plan based
                on your venue and budget.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Layout>
  );
};

export default Gallery;
