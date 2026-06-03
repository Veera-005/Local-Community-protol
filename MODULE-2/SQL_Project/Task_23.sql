SELECT MONTH(registration_date) AS month,
COUNT(*) AS registrations
FROM Registrations
WHERE registration_date >= CURDATE()-INTERVAL 12 MONTH
GROUP BY MONTH(registration_date);