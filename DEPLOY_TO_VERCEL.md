# Deploy Visual Venue Wizard to Vercel (Step-by-Step)

Follow these steps to deploy your app to Vercel. No prior Vercel experience needed.

---

## Prerequisites

- Your code is in a **Git repository** (GitHub, GitLab, or Bitbucket).
- You have a **GitHub/GitLab/Bitbucket account** (free is fine).
- You have a **Vercel account** (free at [vercel.com](https://vercel.com)).

---

## Step 1: Push Your Code to GitHub (if not already)

1. Open a terminal in your project folder.
2. Run:
   ```bash
   git status
   ```
   If you see "nothing to commit, working tree clean", you're good. Otherwise:
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```
   (Use `master` instead of `main` if that's your default branch.)

---

## Step 2: Sign Up / Log In to Vercel

1. Go to **https://vercel.com**.
2. Click **"Sign Up"** or **"Log In"**.
3. Choose **"Continue with GitHub"** (or GitLab/Bitbucket) and authorize Vercel.
4. You’ll be taken to the Vercel dashboard.

---

## Step 3: Import Your Project

1. On the Vercel dashboard, click **"Add New..."** → **"Project"**.
2. You’ll see a list of your GitHub repositories.
3. Find **visual-venue-wizard** (or your repo name) and click **"Import"**.

---

## Step 4: Configure the Project (Vercel usually does this for you)

Vercel detects Vite automatically. Just confirm:

| Setting           | Value        | Notes                                      |
|-------------------|-------------|--------------------------------------------|
| **Framework Preset** | Vite        | Should be auto-selected.                   |
| **Build Command**    | `npm run build` | Already in `package.json`.              |
| **Output Directory** | `dist`      | Where Vite puts the built files.          |
| **Install Command**  | `npm install` | Leave default.                           |

If any field is empty, fill it as in the table above.

---

## Step 5: Deploy

1. Click **"Deploy"**.
2. Wait 1–2 minutes. You’ll see build logs.
3. When it finishes, you’ll get a link like:  
   `https://visual-venue-wizard-xxxx.vercel.app`

---

## Step 6: Open Your Live Site

1. Click **"Visit"** or open the link from the deployment success screen.
2. Your app should load. If you use routes (e.g. `/about`), they will work thanks to the `rewrites` in `vercel.json`.

---

## Optional: Custom Domain

1. In Vercel, open your project.
2. Go to **Settings** → **Domains**.
3. Add your domain and follow the DNS instructions.

---

## Optional: Deploy from Your Computer (CLI)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. In your project folder, run:
   ```bash
   vercel
   ```
3. Log in when asked, then follow the prompts. Use the same build settings as above.

---

## Troubleshooting

- **Build fails:** Check the build log on Vercel. Often it’s a missing dependency or wrong Node version. You can set **Node.js Version** in Project Settings → General (e.g. 18 or 20).
- **Blank page or 404 on refresh:** The project already has `vercel.json` with `rewrites` so that all routes serve `index.html`. If you changed the output directory, update `outputDirectory` in `vercel.json` to match.
- **Environment variables:** If your app needs env vars (e.g. API keys), add them in Vercel: **Project** → **Settings** → **Environment Variables**.

---

## Summary

1. Push code to GitHub.
2. Sign in to Vercel with GitHub.
3. Import the repo and confirm Build = `npm run build`, Output = `dist`.
4. Click Deploy and use the generated URL.

You’re done.
