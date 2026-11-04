@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>&1
if not errorlevel 1 (
  start "Adelaide Vistas Local Server" cmd /k "py -3 -m http.server 8765"
) else (
  where python >nul 2>&1
  if errorlevel 1 (
    echo Python not found on PATH. Run this folder using VS Code Live Server or a local web server.
    pause
    exit /b 1
  )
  start "Adelaide Vistas Local Server" cmd /k "python -m http.server 8765"
)
timeout /t 2 /nobreak >nul
start "" "http://localhost:8765"
exit /b 0
