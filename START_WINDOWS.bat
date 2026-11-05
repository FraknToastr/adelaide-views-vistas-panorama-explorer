@echo off
setlocal

rem Run the server branch in a separate CMD process. This matters when this
rem file is launched from a \\wsl.localhost UNC path: Windows Terminal does not
rem reliably pass that directory on to a child process.
if /i "%~1"=="--serve" goto serve

where py >nul 2>&1
if not errorlevel 1 (
  start "Adelaide Vistas Local Server" cmd /k call "%~f0" --serve py
) else (
  where python >nul 2>&1
  if errorlevel 1 (
    echo Python not found on PATH. Run this folder using VS Code Live Server or a local web server.
    pause
    exit /b 1
  )
  start "Adelaide Vistas Local Server" cmd /k call "%~f0" --serve python
)
timeout /t 2 /nobreak >nul
start "" "http://localhost:8765/index.html"
exit /b 0

:serve
rem pushd maps the WSL UNC path to a temporary drive, then --directory makes
rem Python's document root explicit rather than inheriting a Windows system dir.
pushd "%~dp0"
if errorlevel 1 (
  echo Could not open the app folder: %~dp0
  pause
  exit /b 1
)
%~2 -m http.server 8765 --directory "%CD%"
popd
exit /b %errorlevel%
