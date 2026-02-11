# 🚀 DevConnect - Developer Networking Platform

<div align="center">

![DevConnect Banner](https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=300&fit=crop)

**Connect. Collaborate. Code Together.**

A modern full-stack platform that brings developers together through intelligent matching, real-time chat, and professional networking.

[![Live Demo](https://img.shields.io/badge/Live-AWS_Deployment-success?style=for-the-badge&logo=amazon-aws)](https://developerstinder.duckdns.org)
[![Vercel Demo](https://img.shields.io/badge/Live-Vercel-black?style=for-the-badge&logo=vercel)](https://dev-tinder-neon-pi.vercel.app)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Deployments](#-live-deployments)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Author](#-author)

---

## 🌟 Overview

**DevConnect** is a professional networking platform designed exclusively for developers. It uses **skill-based matching algorithms** to connect developers with similar tech stacks, real-time chat for instant communication, and a membership system for enhanced visibility.

---

## 🌐 Live Deployments

### **Production (AWS EC2)**
🔗 **https://developerstinder.duckdns.org**
- Full-stack deployment with SSL
- Nginx reverse proxy + PM2
- Custom domain via DuckDNS

### **Alternative (Vercel + Render)**
🔗 **https://dev-tinder-neon-pi.vercel.app**
- Frontend on Vercel
- Backend on Render

---

## ✨ Features

### **Core Features**
- 🔐 **Secure Authentication** - JWT-based auth with HTTP-only cookies
- 👤 **Profile Management** - Customizable developer profiles with skills
- 🎯 **Smart Matching** - Skill-based matching using Jaccard similarity algorithm
- 🤝 **Connection System** - Send/receive connection requests
- 💬 **Real-time Chat** - Socket.IO powered instant messaging with online status
- 🔍 **Advanced Search** - Search users by name with pagination
- 🤖 **AI Assistant** - Google Gemini powered chatbot for platform help

### **Premium Features**
- 💳 **Membership Plans** - Silver (₹499/3mo) & Gold (₹999/6mo)
- ⭐ **Profile Priority Boost** - Silver members get priority in feed
- 🏆 **Highest Priority** - Gold members appear first in all feeds
- 👑 **Verification Badges** - Silver/Gold crown badges and highlights
- 📛 **DevConnect Badges** - Exclusive Silver and Gold badges on profiles

---

## 📸 Screenshots

### Landing Page
![Landing Page](screenshots/landing.png)

### User Feed
![User Feed](screenshots/feed.png)

### Smart Matches
![Smart Matches](screenshots/smart-matches.png)

### Real-time Chat
![Chat Interface](screenshots/chat.png)

### Membership Plans
![Membership](screenshots/membership.png)

### Mobile View
![Mobile View](screenshots/mobile.png)

---

## 🛠️ Tech Stack

<div align="center">

### **Frontend Technologies**

<table>
<tr>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="60" height="60" alt="React"/>
<br><b>React 18</b>
</td>
<td align="center" width="150">
<img src="https://vitejs.dev/logo.svg" width="60" height="60" alt="Vite"/>
<br><b>Vite</b>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" width="60" height="60" alt="Redux"/>
<br><b>Redux Toolkit</b>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width="60" height="60" alt="Tailwind"/>
<br><b>Tailwind CSS</b>
</td>
</tr>
<tr>
<td align="center" width="150">
<img src="https://raw.githubusercontent.com/saadeghi/daisyui-images/master/images/daisyui-logo/favicon-192.png" width="60" height="60" alt="DaisyUI"/>
<br><b>DaisyUI</b>
</td>
<td align="center" width="150">
<img src="https://socket.io/images/logo.svg" width="60" height="60" alt="Socket.IO"/>
<br><b>Socket.IO Client</b>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="60" height="60" alt="Axios"/>
<br><b>Axios</b>
</td>
<td align="center" width="150">
<img src="https://reactrouter.com/_brand/react-router-stacked-color-inverted.svg" width="60" height="60" alt="React Router"/>
<br><b>React Router</b>
</td>
</tr>
</table>

### **Backend Technologies**

<table>
<tr>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="60" height="60" alt="Node.js"/>
<br><b>Node.js</b>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="60" height="60" alt="Express"/>
<br><b>Express.js</b>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="60" height="60" alt="MongoDB"/>
<br><b>MongoDB</b>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" width="60" height="60" alt="Mongoose"/>
<br><b>Mongoose</b>
</td>
</tr>
<tr>
<td align="center" width="150">
<img src="https://socket.io/images/logo.svg" width="60" height="60" alt="Socket.IO"/>
<br><b>Socket.IO Server</b>
</td>
<td align="center" width="150">
<img src="https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg" width="80" height="60" alt="Stripe"/>
<br><b>Stripe</b>
</td>
<td align="center" width="150">
<img src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" width="60" height="60" alt="Gemini"/>
<br><b>Gemini AI</b>
</td>
<td align="center" width="150">
<img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" width="60" height="60" alt="JWT"/>
<br><b>JWT</b>
</td>
</tr>
</table>

### **DevOps & Deployment**

<table>
<tr>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" width="60" height="60" alt="AWS"/>
<br><b>AWS EC2</b>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" width="60" height="60" alt="Nginx"/>
<br><b>Nginx</b>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pm2/pm2-original.svg" width="60" height="60" alt="PM2"/>
<br><b>PM2</b>
</td>
<td align="center" width="150">
<img src="https://www.vectorlogo.zone/logos/letsencrypt/letsencrypt-icon.svg" width="60" height="60" alt="Let's Encrypt"/>
<br><b>Let's Encrypt</b>
</td>
</tr>
<tr>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="60" height="60" alt="Vercel"/>
<br><b>Vercel</b>
</td>
<td align="center" width="150">
<img src="https://www.vectorlogo.zone/logos/render/render-icon.svg" width="60" height="60" alt="Render"/>
<br><b>Render</b>
</td>
<td align="center" width="150">
<img src="https://www.svgrepo.com/show/331589/duckduckgo.svg" width="60" height="60" alt="DuckDNS"/>
<br><b>DuckDNS</b>
</td>
<td align="center" width="150">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" width="60" height="60" alt="Ubuntu"/>
<br><b>Ubuntu 22.04</b>
</td>
</tr>
</table>

</div>

---

## 💻 Installation

### **Prerequisites**
- Node.js 18+
- MongoDB (local or Atlas)

### **Backend Setup**
```bash
cd backend
npm install
# Configure .env file
npm run dev
```

### **Frontend Setup**
```bash
cd frontend
npm install
# Configure .env file
npm run dev
```

### **Environment Variables**

**Backend (.env):**
```env
MONGO_URI=your_mongodb_uri
JWT_SECRET_KEY=your_secret
STRIPE_SECRET_KEY=your_stripe_key
GEMINI_API_KEY=your_gemini_key
FRONTEND_URL=http://localhost:5173
```

**Frontend (.env):**
```env
VITE_BACKEND_URL=http://localhost:7777
```

---

## 📁 Project Structure

```
DevConnect/
├── backend/          # Node.js + Express API
├── frontend/         # React + Vite
├── docs/            # Documentation
└── README.md        # This file
```

📖 **Detailed Documentation:**
- [Backend README](backend/README.md) - API endpoints, models, architecture
- [Frontend README](frontend/README.md) - Components, state management, routing
- [AWS Deployment Guide](docs/AWS_DEPLOYMENT.md) - Full deployment walkthrough

---

## 👨‍💻 Author

**Ritesh Gite**  
Full Stack Developer | MERN Stack Specialist

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RiteshGite)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ritesh-gite)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:riteshgite2005@gmail.com)

</div>

---

<div align="center">

**⭐ If you found this project helpful, please give it a star!**

**Made with ❤️ by Ritesh Gite**

![Thanks](https://img.shields.io/badge/Thank_You-For_Visiting-blue?style=for-the-badge)

</div>