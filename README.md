<h2>Tech Stack</h2>
<b>Frontend</b>

 Next.js 16 (App Router)

 Lucide React Icons

TipTap Editor (Rich Text Editor)

 Next/Image for optimized images

<b>Backend</b>

 NextAuth.js (Google OAuth 2.0)

 Prisma ORM

 MongoDB (Atlas)

<h2>Cloud Services</h2>

☁️ Cloudinary – Image & video upload + asset optimization

▲ Vercel – Hosting & CI/CD

<b>Features<b>
<h3User Features</h3>

✔ Create posts using a rich TipTap editor
✔ Upload images/videos via Cloudinary
✔ Edit or delete your own posts
✔ Login with Google OAuth
✔ Comment on posts (auth required)
✔ Fully responsive UI
✔ Clean and modern minimal design

<h2 Admin / Author Features></h2>

✔ Write new blog posts
✔ Auto-generated slug for SEO
✔ Server-side validation
✔ Secure authenticated routes

<h2>Pages & Modules</h2>
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

 Database Schema (Prisma ORM)
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

<h2> Installation & Setup</h2>
  Clone repo
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

<h2>Deployment (Vercel)</h2>

Push code to GitHub repo

Connect repo in Vercel

Add all Environment Variables

Redeploy
✔ Google OAuth redirect_uri
✔ Cloudinary working
✔ Prisma on MongoDB Atlas



<h2>Credits</h2>

Built by Waleed Ahmed (full-stack MERN/Next.js developer).

<b>Support</b>

If you like this project, give it a star on GitHub ⭐ and share it!
