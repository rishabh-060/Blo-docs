<p align="center">
  <img src="./public/logoIco.png" alt="Blo-Docs Logo" height="100"/>
</p>

<h1 align="center">Blo-Docs — A Modern Blogging Platform</h1>

 **Blo-Docs** is a sleek and modern **blog web application** built with React, powered by **Appwrite** as the backend-as-a-service (BaaS). It allows users to sign up, write rich blog posts, manage their content, and explore posts written by others — even without logging in.

> 💡 A smooth, markdown-friendly, responsive blog experience for readers and writers alike.

---

## 🖼️ Project Preview

| Home Page                             | Editor Page                               | Post Detail                              |
|--------------------------------------|-------------------------------------------|-------------------------------------------|
| ![Home](./public/home.png) | ![Editor](./public/create.png) | ![Post](./public/create.png) |

| Login Page                            | Signup Page                               | Blo-Docs                                 |
|---------------------------------------|-------------------------------------------|------------------------------------------|
| ![Login](./public/login.png) | ![Signup](./public/signup.png) | ![Logo](./public/logoIco.png)|
---

## 🚀 Tech Stack

| Tech                | Purpose                             |
|---------------------|-------------------------------------|
| `React 19`          | Frontend UI Framework               |
| `Appwrite 1.8+`     | Backend-as-a-Service (BaaS)         |
| `Redux Toolkit`     | Global state management             |
| `React Hook Form`   | Form state & validation             |
| `TinyMCE`           | Rich Text Editing (RTE)             |
| `html-react-parser`| Secure HTML rendering               |
| `SweetAlert2`       | Elegant notifications & confirmations |
| `React Router v7`   | Routing and navigation              |
| `Tailwind CSS`      | Utility-first styling               |

---

## ✨ Key Features

- 🔐 **Authentication**: Login, Signup, Logout
- 📝 **Post Management**: Create, edit, and delete your own posts
- 👥 **Public Reading**: Posts are visible to all users, even without login
- 🧠 **Rich Text Editing**: Blog content with headings, images, and HTML via TinyMCE
- 📦 **File Storage**: Upload featured images via Appwrite Bucket
- 🗂️ **Post Slugs**: Auto-generated slugs for unique blog URLs
- ⚡ **Live Feedback**: Form validations and submission alerts
- 🎨 **Skeleton Loaders**: For better loading UX

---

## 📦 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/blo-docs.git
cd blo-docs
```

## create *.env* file with following variables
```bash
VITE_APPWRITE_URL = ""
VITE_APPWRITE_PROJECT_ID = ""
VITE_APPWRITE_DATABASE_ID = ""
VITE_APPWRITE_COLLECTION_ID = ""
VITE_APPWRITE_BUCKET_ID = ""
VITE_TINYMCE_API_KEY = ""
``` 

[Visit Blo-Docs](https://blo-docs.netlify.app)
