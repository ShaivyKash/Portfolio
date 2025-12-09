@echo off
echo Starting Portfolio Backend and Frontend...
echo.

start "Backend Server" cmd /k "cd backend && npm install && npm start"
timeout /t 3 /nobreak > nul
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo.
