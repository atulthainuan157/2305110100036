import { Card, CardContent, Typography, Box, Chip } from "@mui/material";

export function NotificationCard({ notification }) {
  const { type, title, message, timestamp, isRead } = notification;

  const typeColor = {
    Placement: "primary",
    Result: "success",
    Event: "secondary",
  }[type] || "default";

  return (
    <Card 
      variant="outlined" 
      sx={{ 
        bgcolor: isRead ? "background.paper" : "action.hover",
        borderColor: isRead ? "divider" : "primary.main" 
      }}
    >
      <CardContent>
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
