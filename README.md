# Nexora Academy 🎓

An online learning platform with **Lipa Mdogo Mdogo** (pay-as-you-go) wallet system.

## Features
- Multi-step student registration (with National ID verification)
- Admin approval workflow
- $0.50 one-time activation fee
- Course enrollment with partial payments
- Proportional course access based on amount paid
- Exams & CATs with unlock timers
- Certificate generation with QR verification
- Full admin dashboard (students, instructors, courses, revenue)

## Demo Accounts
| Role    | Email                | Password    |
|---------|----------------------|-------------|
| Admin   | admin@nexora.com     | admin123    |
| Student | brian@nexora.com     | student123  |

## Tech Stack
- Pure HTML / CSS / JavaScript (no build step)
- `localStorage` used as the database (demo/prototype)
- Font Awesome + Google Fonts

## Deployment (Render)
1. Push this repo to GitHub
2. On Render → **New → Static Site**
3. Connect repo → Build Command: *(leave empty)* → Publish Directory: `.`
4. Deploy 🚀

## ⚠️ Important
This version stores all data in `localStorage`. It is a **frontend-only prototype**.
For real production use, replace `localStorage` with a backend (Node/Express + MongoDB/PostgreSQL).
