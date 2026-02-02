🚀 Tech Stack
Frontend

⚛️ Next.js 16 (App Router)

📦 Lucide React Icons

📝 TipTap Editor (Rich Text Editor)

🌐 Next/Image for optimized images

Backend

🔐 NextAuth.js (Google OAuth 2.0)

🗄 Prisma ORM

🍃 MongoDB (Atlas)

Cloud Services

☁️ Cloudinary – Image & video upload + asset optimization

▲ Vercel – Hosting & CI/CD

✨ Features
🔥 User Features

✔ Create posts using a rich TipTap editor
✔ Upload images/videos via Cloudinary
✔ Edit or delete your own posts
✔ Login with Google OAuth
✔ Comment on posts (auth required)
✔ Fully responsive UI
✔ Clean and modern minimal design

🛠️ Admin / Author Features

✔ Write new blog posts
✔ Auto-generated slug for SEO
✔ Server-side validation
✔ Secure authenticated routes

📄 Pages & Modules
Home Page

Displays all posts

Post cards with images, date, category, author, etc.

Post Details Page

Full story

Reading-friendly layout

Comment section (only logged-in users can post comments)

Write Page

TipTap rich text editor

Upload cover image using Cloudinary

Create & publish new stories

Authentication

Google OAuth login

Protected write/comment routes

🧩 Database Schema (Prisma ORM)
Models:

User (Google OAuth)

Post (title, slug, content, coverImage, authorId…)

Comment (text, postId, userId…)

☁️ Cloudinary Integration

Upload images & videos directly from TipTap

Secure upload preset

Next.js API route handles media upload

🔐 Environment Variables

Your project uses the following env variables:

NEXTAUTH_URL=
NEXTAUTH_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=

NEXT_PUBLIC_BASE_URL=


Make sure to configure them in .env.local and Vercel.

🏗️ Installation & Setup
1️⃣ Clone repo
git clone https://github.com/your-username/paperleaf-blog.git
cd paperleaf-blog

2️⃣ Install dependencies
npm install

3️⃣ Add .env.local with your credentials
4️⃣ Push Prisma Schema
npx prisma generate
npx prisma db push

5️⃣ Start dev server
npm run dev

🚀 Deployment (Vercel)

Push code to GitHub repo

Connect repo in Vercel

Add all Environment Variables

Redeploy
✔ Google OAuth redirect_uri
✔ Cloudinary working
✔ Prisma on MongoDB Atlas

🖼️ Screenshots (Optional Section)

Add screenshots of your UI later.

🙏 Credits

Built by Waleed Ahmed (full-stack MERN/Next.js developer).

⭐ Support

If you like this project, give it a star on GitHub ⭐ and share it!
