SELECT e.city, COUNT(DISTINCT r.user_id) AS total_users
FROM Registrations r
JOIN Events e ON r.event_id = e.event_id
GROUP BY e.city
ORDER BY total_users DESC
LIMIT 5;