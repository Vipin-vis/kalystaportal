import React from "react";
import { Box, Typography, Button, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Replace imports with your actual asset paths
import imgBanquet from "../assets/banquet.jpg";
import imgBuffet from "../assets/buffet.jpg";
import imgStageTraditional from "../assets/stage-traditional.jpg";
import imgStageModern from "../assets/stage-modern.jpg";

const slides = [
  {
    image: imgStageModern,
    label: "Signature Stage Styling",
    caption:
      "Modern South Indian wedding aesthetics with rich florals and warm candlelight.",
  },
  {
    image: imgBanquet,
    label: "Traditional Sadhya Elegance",
    caption:
      "Classic Kerala sadhya presented with refined, contemporary detailing.",
  },
  {
    image: imgBuffet,
    label: "Curated Dining Experiences",
    caption: "Luxury buffet layouts that look as beautiful as they taste.",
  },
  {
    image: imgStageTraditional,
    label: "Heritage Mandap Décor",
    caption: "Vibrant traditional florals with a Kalysta signature touch.",
  },
];

const HeroCarousel: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  // Auto-slide
  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[index];

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        minHeight: { xs: 420, md: 520 },
        backgroundColor: "#111",
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src={slide.image}
        alt={slide.label}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.55)",
        }}
      />

      {/* Gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "primary.main",
            letterSpacing: "0.25em",
            fontSize: 11,
            mb: 1,
          }}
        >
          KALYSTA WEDDING HUB
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 28, md: 40 },
            maxWidth: 520,
            mb: 1.5,
          }}
        >
          Turning moments into{" "}
          <span style={{ color: "#d4af37" }}>memories</span>.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            maxWidth: 460,
            color: "text.secondary",
            mb: 3,
          }}
        >
        Bespoke South Indian weddings, reception décor, and intimate celebrations designed with graceful, understated luxury.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              borderRadius: 999,
              px: 3,
              py: 1,
              fontSize: 13,
            }}
            href="#/contact"
          >
            Plan Your Event
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              borderRadius: 999,
              px: 3,
              py: 1,
              fontSize: 13,
              borderColor: "rgba(212,175,55,0.7)",
            }}
            href="/gallery"
          >
            View Gallery
          </Button>
        </Stack>

        {/* Slide info & dots */}
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            {slide.label}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {slide.caption}
          </Typography>
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          sx={{
            position: "absolute",
            bottom: 18,
            right: 20,
          }}
          spacing={1.5}
        >
          <IconButton
            size="small"
            onClick={handlePrev}
            sx={{
              border: "1px solid rgba(255,255,255,0.4)",
              bgcolor: "rgba(0,0,0,0.4)",
            }}
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 14 }} />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            sx={{
              border: "1px solid rgba(255,255,255,0.4)",
              bgcolor: "rgba(0,0,0,0.4)",
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
          </IconButton>
        </Stack>

        {/* Dots */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            bottom: 20,
            left: 24,
          }}
        >
          {slides.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: i === index ? 18 : 8,
                height: 3,
                borderRadius: 999,
                bgcolor: i === index ? "primary.main" : "grey.600",
                transition: "all 0.25s",
              }}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default HeroCarousel;
