# WaveChat

WaveChat is a full-stack real-time chat app built with Flask, Flask-SocketIO, SQLite, and plain HTML/CSS/JavaScript. It supports OTP sign-in, one-to-one messaging, media sharing, in-app photo/video capture, and browser-based voice and video calling.

## What it includes

- Phone number sign-up and login with OTP verification
- Session-based authentication with CSRF protection
- Real-time one-to-one messaging with Socket.IO
- Typing indicators, delivery receipts, read receipts, online status, and last seen
- Plain text and media message storage for simpler multi-device testing
- In-app camera capture for photos and short videos
- Browser voice and video calls using WebRTC signaling over Socket.IO
- WhatsApp Web-inspired split layout with responsive mobile behavior
- Search, dark mode, browser notifications, and paginated history loading

## Project structure

- `app.py`: local development entry point
- `wsgi.py`: production entry point for Gunicorn
- `chatapp/`: Flask app factory, models, routes, Socket.IO events, helpers
- `templates/`: server-rendered pages
- `static/css/`: shared and chat-specific styling
- `static/js/`: auth flow and realtime chat client
- `static/img/wavechat-logo.svg`: WaveChat brand mark
- `uploads/`: media saved by the server at runtime
- `chat.db`: SQLite database created automatically on first run
- `render.yaml`: one-click Render blueprint for a single-instance deployment
- `Procfile`: generic Gunicorn start command for platforms that support Procfiles

## Run in VS Code

1. Open the folder `D:\UK codex\CHAT` in VS Code.
2. Create and activate a virtual environment.

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

3. Install dependencies.

```powershell
pip install -r requirements.txt
```

4. Copy `.env.example` to `.env` and set a strong `SECRET_KEY`.
5. Start the app.

```powershell
python app.py
```

6. Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.
7. Request an OTP. In development mode the OTP is also shown on screen and logged in the Flask console.

## Voice and video calls over the internet

WaveChat already includes WebRTC call signaling. For calls on the same Wi-Fi or simple networks, the default STUN servers are often enough. For reliable calls across mobile networks, carrier NAT, or stricter firewalls, you should add a TURN server in your environment.

Add these variables to `.env` for hosted deployments:

```text
RTC_STUN_URLS=stun:stun.l.google.com:19302,stun:stun1.l.google.com:19302
RTC_TURN_URLS=turn:your-turn-host:3478?transport=udp,turn:your-turn-host:3478?transport=tcp
RTC_TURN_USERNAME=your_turn_username
RTC_TURN_CREDENTIAL=your_turn_password
RTC_ICE_TRANSPORT_POLICY=all
```

Use HTTPS in production, otherwise camera, microphone, and WebRTC permissions can be blocked by the browser.

## Host it online

### Best simple path right now: Render

This project is currently best hosted as a single web service because it uses:

- SQLite for the database
- local disk storage for media uploads
- Flask-SocketIO on one process

That works well for demos, portfolios, and small private deployments.

#### Option A: one-click with `render.yaml`

1. Push this project to GitHub.
2. In Render, choose **New +** > **Blueprint**.
3. Select your GitHub repo.
4. Render will detect `render.yaml` and propose a web service plus a persistent disk.
5. Set your real values before deploy:
   - `SECRET_KEY`: strong random value
   - `DEV_OTP_EXPOSE=false`
   - `RTC_TURN_URLS`, `RTC_TURN_USERNAME`, and `RTC_TURN_CREDENTIAL` for reliable calling
6. Deploy.

#### Option B: manual Render setup

1. Push the repo to GitHub.
2. In Render, create a **Web Service**.
3. Use these settings:
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn -w 1 --threads 100 -b 0.0.0.0:$PORT wsgi:app`
4. Add these environment variables:

```text
SECRET_KEY=<your strong secret>
SESSION_COOKIE_SECURE=true
DEV_OTP_EXPOSE=false
DATABASE_URL=sqlite:////opt/render/project/src/data/chat.db
UPLOAD_FOLDER=/opt/render/project/src/data/uploads
RTC_STUN_URLS=stun:stun.l.google.com:19302,stun:stun1.l.google.com:19302
RTC_TURN_URLS=turn:your-turn-host:3478?transport=udp,turn:your-turn-host:3478?transport=tcp
RTC_TURN_USERNAME=<your turn username>
RTC_TURN_CREDENTIAL=<your turn password>
RTC_ICE_TRANSPORT_POLICY=all
```

5. Attach a persistent disk:
   - Mount Path: `/opt/render/project/src/data`
   - Size: `1 GB` is enough to start
6. Deploy and open the Render URL.

## Recommended production command

```bash
gunicorn -w 1 --threads 100 -b 0.0.0.0:$PORT wsgi:app
```

## Important deployment notes

- Keep this app on a single instance while you use SQLite and local uploads.
- For multi-instance scaling, switch from SQLite to PostgreSQL and move uploads to object storage such as S3.
- Replace the development OTP delivery flow with a real SMS provider such as Twilio or MSG91 inside `chatapp/auth.py`.
- Set `SESSION_COOKIE_SECURE=true` behind HTTPS.
- Set `DEV_OTP_EXPOSE=false` for public hosting.
- Add TURN credentials for reliable calls across the public internet.

## Security notes

- Inputs are validated server-side before messages or uploads are stored.
- Message text is rendered with `textContent` on the client to avoid HTML injection.
- CSRF protection is applied to standard HTTP form and JSON writes.
- Camera and microphone access still depend on browser permission and HTTPS on hosted deployments.

## Current limitations

- Voice and video calling are one-to-one only.
- Group chats and AI assistant flows are not implemented yet.
- Search works on loaded messages only.
- The OTP transport is demo-ready but not wired to a real SMS gateway yet.
