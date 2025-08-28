This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# Prodify

Prodify is a **Next.js + NextAuth** project where users can add, view, and manage products in real-time. It comes with a modern responsive UI and authentication.

---
**Live Demo:** [Prodify Live](https://prodify-tkzk.vercel.app/)



## Features

- User Authentication & Authorization via **NextAuth**
- Add, View, and Manage Products
- Responsive layout with modern UI
- Social media links in footer
- Product detail pages

---

## Tech Stack

- [Next.js 13](https://nextjs.org/)
- [React](https://reactjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [MongoDB](https://www.mongodb.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- React Hot Toast & ClipLoader for notifications and loading states

---

## Setup & Installation

1. **Clone the repo**
```bash
git clone <your-repo-url>
cd prodify

2. **Install Dependencies**

npm install


3. **Environment Variables**

NEXT_PUBLIC_MONGODB_URI=your_mongodb_connection_uri
DB_NAME=prodify
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

4. **Run the development server**

npm run dev

---

## Deployment

Prodify can be deployed on **Vercel** (recommended) or any Next.js-compatible host.

1. Push your code to GitHub.
2. Import the repo in Vercel.
3. Set the **Environment Variables** in the Vercel dashboard (same as `.env.local`).
4. Deploy and access the live site.


