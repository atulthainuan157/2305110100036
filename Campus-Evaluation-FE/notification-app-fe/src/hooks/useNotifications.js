import { useState, useEffect } from "react";
import { fetchNotifications } from "../api/notifications";

export function useNotifications(filter = "All", page = 1) {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNotifications(filter, page);
        if (active) {
          setNotifications(data.notifications ?? []);
          setTotal(data.total ?? 0);
          setTotalPages(data.totalPages ?? 0);
        }
      } catch (err) {
        if (active) {
          setError(err.message || "Failed to fetch");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    load();
    return () => { active = false; };
  }, [filter, page]);

  return { notifications, total, totalPages, loading, error };
}
