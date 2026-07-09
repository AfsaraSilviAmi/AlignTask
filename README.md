# 🚀 AlignTask

A full-stack freelance marketplace platform that connects clients and freelancers through a complete hiring workflow. Clients can post jobs, freelancers can submit proposals, and administrators can manage users and platform activities through dedicated role-based dashboards.

---

## 🌐 Live Link

https://align-task-ruby.vercel.app

---

## 📖 Project Overview

AlignTask is a modern freelance marketplace built using the MERN stack. It provides a seamless experience for clients to hire freelancers and manage projects, while freelancers can browse available jobs, submit proposals, and track their earnings. Administrators can monitor users, platform activity, and overall system management through a dedicated admin dashboard.

---

## ✨ Core Features

### 🔐 Authentication
- Email & Password Authentication
- Google Sign-In
- BetterAuth Authentication
- JWT Authorization
- Protected Routes
- Role-Based Access Control

### 👤 Client Features
- Create, Update, and Delete Tasks
- Review Freelancer Proposals
- Hire Freelancers
- Stripe Payment Integration
- Track Project Progress

### 💼 Freelancer Features
- Browse Available Tasks
- Search and Filter Tasks
- Submit Proposals
- View Proposal History
- Track Earnings
- Update Profile

### 🛠️ Admin Features
- Manage Users
- Block and Unblock Users
- Monitor Platform Activities
- Manage Earnings

---

## 🛠️ Technologies Used

### Frontend
- Next.js
- React
- Tailwind CSS
- HeroUI
- Framer Motion
- React Toastify

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- BetterAuth
- JWT

### Payment Gateway
- Stripe

---

## 📦 Dependencies

### Client

```bash
next
react
react-dom
tailwindcss
@heroui/react
better-auth
framer-motion
react-toastify
lucide-react
axios
```

### Server

```bash
express
mongodb
cors
dotenv
jsonwebtoken
stripe
cookie-parser
```

---

## ⚙️ Run the Project Locally

### 1. Clone the repositories

```bash
git clone https://github.com/AfsaraSilviAmi/AlignTask.git
git clone https://github.com/AfsaraSilviAmi/AlignTask-server.git
```

### 2. Navigate to each project

```bash
cd client
npm install
```

```bash
cd server
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in both the client and server projects.

Example:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
BETTER_AUTH_SECRET=your_better_auth_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_API_URL=your_api_url
```

### 4. Run the projects

Client

```bash
npm run dev
```

Server

```bash
nodemon index.js
```

---

## 📂 Resources

- 🌐 Live Website: https://align-task-ruby.vercel.app
- 📁 Client Repository: https://github.com/AfsaraSilviAmi/AlignTask.git
- 📁 Server Repository: https://github.com/AfsaraSilviAmi/AlignTask-server.git

---

## 🚀 Future Improvements

- Real-time notifications
- In-app messaging between clients and freelancers
- File upload support
- Email notifications
- Advanced analytics dashboard
