export async function fetchNotifications(filter = "All", page = 1) {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const allNotifications = [
    { id: 1, type: "Placement", title: "New Job Posting", message: "Google is hiring for SDE1.", timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(), isRead: false },
    { id: 2, type: "Result", title: "Exam Results Declared", message: "Your Mid-Sem results for Semester 6 are out.", timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(), isRead: false },
    { id: 3, type: "Event", title: "Tech Fest 2026", message: "Register for the upcoming tech fest before Friday.", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), isRead: true },
    { id: 4, type: "Placement", title: "Interview Call", message: "You have been shortlisted for Microsoft interview.", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), isRead: true },
    { id: 5, type: "Event", title: "Workshop on GenAI", message: "Join us for a 2-day workshop on Generative AI.", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), isRead: true },
    { id: 6, type: "Result", title: "Re-evaluation Results", message: "Re-evaluation results for Semester 5 are published.", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(), isRead: true },
    { id: 7, type: "Placement", title: "Pre-Placement Talk", message: "Amazon PPT is scheduled for tomorrow at 10 AM.", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(), isRead: true },
  ];

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
