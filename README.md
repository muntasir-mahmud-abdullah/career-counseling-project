# Career Counseling Website

## 📌 Overview

This **Career Counseling Website** provides personalized career guidance, professional counseling sessions, resume reviews, and valuable career-related resources. It ensures an interactive and user-friendly experience for job seekers and professionals alike.

## 🖼️ Screenshot

![Website Screenshot](https://i.ibb.co/QvvR2nZw/Screenshot-2025-02-05-191916.png)

## 🛠️ Technologies Used

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Firebase** - Authentication & database
- **Tailwind CSS & DaisyUI** - UI styling
- **SwiperJS** - Image slider
- **AOS Animation** - Smooth UI animations
- **SweetAlert2** - Enhanced alerts & notifications

## 🌟 Features

- 🔐 **User Authentication** (Email/Password & Google Sign-In)
- 📌 **Protected Routes** (Access control for logged-in users)
- 🎯 **Career Services** (Counseling, resume reviews, etc.)
- 🔄 **Persistent Login** (User stays logged in after page reload)
- 📝 **Dynamic JSON Data** (Real-time service listings)
- 💬 **User Feedback System** (Add comments & reviews)
- 🔥 **Responsive Design** (Optimized for mobile, tablet, and desktop)
- ⚡ **Password Show/Hide Toggle** (Better UX for login & registration)

## 📦 Dependencies

```json
{
  "react": "^18.x.x",
  "react-router-dom": "^6.x.x",
  "firebase": "^10.x.x",
  "tailwindcss": "^3.x.x",
  "daisyui": "^3.x.x",
  "swiper": "^9.x.x",
  "aos": "^2.x.x",
  "sweetalert2": "^11.x.x"
}
```

## 🚀 Running the Project Locally

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/muntasir-mahmud-abdullah/career-counseling-project.git
cd career-counseling
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Firebase

Create a `.env` file in the root directory and add:

```ini
  VITE_apiKey=AIzaSyDzD6F4RW-BSksWcSr2nsaoCtcU6L_KhO8
  VITE_authDomain=career-counseling-auth.firebaseapp.com
  VITE_projectId=career-counseling-auth
  VITE_storageBucket=career-counseling-auth.firebasestorage.app
  VITE_messagingSenderId=967215316901
  VITE_appId=1:967215316901:web:6baa79b83b7ac3c2e3724c
```

### 4️⃣ Run the Development Server

```sh
npm start
```

Then, open **[http://localhost:3000](http://localhost:3000)** in your browser.

## 🔗 Live Project

- **Live Demo:** [Deployed Website](https://career-counseling-auth.web.app)
- **GitHub Repository:** [View on GitHub](https://github.com/muntasir-mahmud-abdullah/career-counseling-project)

## 📚 Additional Features & Routes

- **My Profile Page:** Users can view and update their profile.
- **Service Details Page (Protected):** Users can view details & provide feedback.
- **Forgot Password Feature:** Users can reset passwords via email.
- **Dynamic Titles:** Page titles change based on active routes.
- **Custom 404 Page:** User-friendly error handling.

---

This project follows best practices in **React development**, **state management**, and **responsive UI design**. 🚀
