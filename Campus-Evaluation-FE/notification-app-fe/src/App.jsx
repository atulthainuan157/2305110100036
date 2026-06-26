import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { NotificationsPage } from "./pages/NotificationsPage";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Sleek Indigo
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#14b8a6', // Teal
    },
    success: {
      main: '#22c55e', // Vibrant Green
    },
    background: {
      default: '#0f172a', // Deep Slate
      paper: '#1e293b',   // Slightly lighter slate for cards
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    action: {
      hover: 'rgba(99, 102, 241, 0.08)',
    }
  },
  typography: {
    fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    subtitle1: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default MUI dark mode gradient
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          borderRadius: 12,
          '&.Mui-selected': {
            backgroundColor: 'rgba(99, 102, 241, 0.15)',
            color: '#818cf8',
            '&:hover': {
              backgroundColor: 'rgba(99, 102, 241, 0.25)',
            }
          }
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <NotificationsPage />
      </div>
    </ThemeProvider>
  );
}