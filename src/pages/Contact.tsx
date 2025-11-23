import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Stack,
  IconButton,
  Divider,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Layout from "../components/Layout";

interface ContactFormState {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\-\s()]{7,}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid phone / WhatsApp number.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Please share a few details about your event.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      setSnackbar({
        open: true,
        message: "Please fill in the required details.",
        severity: "error",
      });
      return;
    }

    const subject = `New enquiry from ${form.name || "Kalysta website"}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`;

    // Open Gmail compose in new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kalystaweddinghub@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");

    setSnackbar({
      open: true,
      message: "Opening Gmail to send your enquiry.",
      severity: "success",
    });
  };

  const handleWhatsApp = () => {
    if (!validate()) {
      setSnackbar({
        open: true,
        message: "Please fill in the required details before sending via WhatsApp.",
        severity: "error",
      });
      return;
    }

    const text = `New enquiry from Kalysta website%0A%0AName: ${encodeURIComponent(
      form.name
    )}%0APhone: ${encodeURIComponent(
      form.phone
    )}%0A%0AMessage:%0A${encodeURIComponent(form.message)}`;

    // WhatsApp number for Kalysta (change if needed)
    const whatsappUrl = `https://wa.me/918547569694?text=${text}`;

    window.open(whatsappUrl, "_blank");

    setSnackbar({
      open: true,
      message: "Opening WhatsApp with your enquiry.",
      severity: "success",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

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
            CONTACT
          </Typography>
          <Typography
            variant="h4"
            sx={{ mt: 1, mb: 1, fontSize: { xs: 26, md: 32 } }}
          >
            Let&apos;s plan your celebration
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", maxWidth: 600 }}
          >
            Share a few details about your event and our team will connect with
            you to discuss ideas, budgets and availability. We usually respond
            within 24 hours.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                bgcolor: "background.paper",
                borderRadius: 3,
                border: "1px solid rgba(212,175,55,0.35)",
                p: { xs: 2.5, md: 3 },
              }}
            >
              <form onSubmit={handleSubmit} noValidate>
                <Stack spacing={2.5}>
                  <TextField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.name)}
                    helperText={errors.name}
                  />

                  <TextField
                    label="Phone number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    fullWidth
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.phone)}
                    helperText={
                      errors.phone ||
                      "WhatsApp number preferred, with country code if outside India."
                    }
                  />

                  <TextField
                    label="Message / Event details"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    fullWidth
                    multiline
                    minRows={4}
                    variant="outlined"
                    size="small"
                    error={Boolean(errors.message)}
                    helperText={
                      errors.message ||
                      "Share your event type, date, location, approximate guest count and any ideas you already have."
                    }
                  />

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems={{ xs: "stretch", sm: "center" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        borderRadius: 999,
                        px: 4,
                        py: 1,
                        fontSize: 13,
                        letterSpacing: "0.12em",
                      }}
                    >
                      Send via Gmail
                    </Button>

                    <Button
                      type="button"
                      variant="outlined"
                      onClick={handleWhatsApp}
                      startIcon={<WhatsAppIcon />}
                      sx={{
                        borderRadius: 999,
                        px: 3,
                        py: 1,
                        fontSize: 13,
                        borderColor: "rgba(212,175,55,0.9)",
                        color: "primary.main",
                      }}
                    >
                      Send via WhatsApp
                    </Button>
                  </Stack>

                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    &quot;Send via Gmail&quot; opens a new Gmail compose window
                    with your details pre-filled. &quot;Send via WhatsApp&quot;
                    opens a chat with Kalysta&apos;s number.
                  </Typography>
                </Stack>
              </form>
            </Paper>
          </Grid>

          {/* Contact details / WhatsApp / Social */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                borderRadius: 3,
                border: "1px solid rgba(212,175,55,0.35)",
                p: 3,
                bgcolor: "rgba(5,5,7,0.9)",
                height: "100%",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ mb: 1.5, fontSize: { xs: 16, md: 18 } }}
              >
                Direct contact
              </Typography>

              <Stack spacing={1.5}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">+91 70127 61287</Typography>
                    <Typography variant="body2">+91 85905 25127</Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      Call or WhatsApp between 9:00 AM – 8:00 PM IST
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <EmailIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">
                      kalystaweddinghub@gmail.com
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      For detailed proposals and bookings
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.5} alignItems="center">
                  <WhatsAppIcon sx={{ color: "primary.main", fontSize: 20 }} />
                  <Box>
                    <Typography variant="body2">
                      WhatsApp: +91 70127 61287
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      Quick queries, date checks, and sharing reference photos
                    </Typography>
                  </Box>
                </Stack>
              </Stack>

              <Divider
                sx={{
                  my: 3,
                  borderColor: "rgba(212,175,55,0.25)",
                  borderBottomWidth: 0.5,
                }}
              />

              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Follow Kalysta
              </Typography>

              <Stack direction="row" spacing={1}>
                <IconButton
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://facebook.com"
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://wa.me/918547569694"
                  target="_blank"
                  sx={{
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Stack>

              <Typography
                variant="caption"
                sx={{ mt: 2, display: "block", color: "text.secondary" }}
              >
                Share your favourite décor inspirations with us on WhatsApp or
                Instagram, and we&apos;ll help you shape them into a cohesive,
                luxurious event.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
            sx={{ bgcolor: snackbar.severity === "success" ? "primary.main" : undefined }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Layout>
  );
};

export default Contact;
