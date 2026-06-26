import { setAccessToken } from "../../logging-middleware/logger";

const BASE_URL = "http://4.224.186.213/evaluation-service";
let currentToken = null;

async function authenticate() {
  if (currentToken) return currentToken;

  const payload = {
    email: import.meta.env.VITE_EMAIL,
    name: import.meta.env.VITE_NAME,
    rollNo: import.meta.env.VITE_ROLL_NO,
    accessCode: import.meta.env.VITE_ACCESS_CODE,
    clientID: import.meta.env.VITE_CLIENT_ID,
    clientSecret: import.meta.env.VITE_CLIENT_SECRET
  };

  const response = await fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Authentication failed. Please check your credentials in the .env file.");
  }

  const data = await response.json();
  currentToken = data.accessToken || data.token;
  setAccessToken(currentToken); // Provide token to the logger middleware
  return currentToken;
}

export async function fetchNotifications(filter = "All", page = 1) {
  const token = await authenticate();

  const response = await fetch(`${BASE_URL}/notifications`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch notifications: ${response.statusText}`);
  }

  const allNotifications = await response.json();

  let filtered = allNotifications;
  if (filter && filter !== "All") {
    filtered = allNotifications.filter(n => n.type === filter);
  }

  const itemsPerPage = 3;
  const total = filtered.length;
  const totalPages = Math.ceil(total / itemsPerPage);
  
  const start = (page - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  return {
    notifications: paginated,
    total,
    totalPages,
  };
}
