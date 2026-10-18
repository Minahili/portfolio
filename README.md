# Minahil Irfan — Portfolio

React (Vite) portfolio, dark theme, fully responsive. Built from the CV content.

## Run locally

```bash
npm install
npm run dev
```

## Before deploying

1. **Add your CV PDF**: put your resume file at `public/Minahil_Irfan_CV.pdf`
   (the "Resume" button in the navbar downloads this exact path — rename the file
   or update the `href` in `src/components/Navbar.jsx` if you use a different name).
2. **Update links**: `src/components/Contact.jsx` and `Navbar.jsx` have your email
   and GitHub — add LinkedIn if you want it too.
3. **Optional**: add real screenshots of the Al Ghurair Foods (AGI) site and the
   Blood Donation app into `public/` and reference them in `Projects.jsx`, since the
   AGI project lives on an internal DX sandbox with no public link.

## Deploy on Vercel

```bash
git init
git add .
git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

Then on [vercel.com](https://vercel.com):

1. Sign in with GitHub.
2. **Add New → Project** → import this repo.
3. Vercel auto-detects Vite (Build: `npm run build`, Output: `dist`) — just click **Deploy**.
4. You'll get a live `*.vercel.app` URL; every future `git push` auto-redeploys.
