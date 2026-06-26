import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

export function NotificationCard({ notification, index = 0 }) {
  const { type, title, message, timestamp, isRead } = notification;

  const typeColor = {
    Placement: "primary",
    Result: "success",
    Event: "secondary",
  }[type] || "default";

  // Calculate delay class based on index (up to 500ms max)
  const delayClass = `delay-${Math.min((index + 1) * 100, 500)}`;

  return (
    <Card 
      variant="outlined" 
      className={`notification-card animate-fade-in-up ${delayClass}`}
      sx={{ 
        bgcolor: isRead ? "background.paper" : "rgba(99, 102, 241, 0.04)",
        borderColor: isRead ? "rgba(255, 255, 255, 0.05)" : "primary.main",
        borderRadius: 3
      }}
    >
      <CardContent sx={{ pb: '16px !important' }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            {title}
          </Typography>
          <Chip label={type} size="small" color={typeColor} variant="outlined" />
        </Box>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {message}
        </Typography>
        <Typography variant="caption" color="text.disabled">
          {new Date(timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}
