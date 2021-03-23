@echo off
COLOR 0E
rem https://www.npmjs.com/package/http-server
rem taskkill /IM explorer.exe /F
rem TASKKILL /IM chrome.exe /F

rem TASKKILL /F /FI "WINDOWTITLE eq C:\WINDOWS\system32\cmd.exe - http-server*"
rem TO INDSTALL: npm install --global http-server
chdir /d C:\_projekt
start /min http-server ./release -p 8080 -s
rem /B

timeout 1 > nul

echo.
echo -----------------------------
echo ---------- AMF --------------
echo -----------------------------
echo /////////////////////////////
echo -----------------------------
echo ------- STARTING IN... ------
echo -----------------------------
echo. 
for /L %%x in (5, -1, 1) do ( 

   echo ... %%x seconds
   timeout 1 >nul
)

echo.
echo -----------------------------
echo ------- STARTING NOW --------
echo -----------------------------

timeout 1 >nul
rem "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --start-fullscreen --disable-infobars --kiosk  --incognito --disable-pinch --disable-session-crashed-bubble http://127.0.0.1:8080
start chrome -disable-pinch -start-fullscreen -kiosk http://127.0.0.1:8080
REM -kiosk --start-fullscreen 