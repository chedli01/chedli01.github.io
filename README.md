# Chedli Masmoudi — Portfolio

Personal DevOps / Cloud / Platform Engineering portfolio. Adapted from the Astro source code provided by a friend while preserving its visual design; all content, links, diagrams and downloadable CV have been replaced.

**Target public URL:** https://chedli01.github.io/

## Requirements
- Node.js 22 or newer (Node.js 22 LTS works)
- npm

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:4321. To check the production build:

```bash
npm run build
npm run preview
```

## Publish at https://chedli01.github.io/

1. Sign in to GitHub as `chedli01`.
2. Create a **public** repository with the **exact name** `chedli01.github.io` (do not auto-generate another README).
3. In the terminal, open this project's **root folder** (the directory containing `package.json`).
4. Execute the following commands, replacing `main` if your local branch already differs:

```bash
git init
git add .
git commit -m "Create personal DevOps portfolio"
git branch -M main
git remote add origin https://github.com/chedli01/chedli01.github.io.git
git push -u origin main
```

5. Go to the repository's **Settings → Pages → Build and deployment → Source → GitHub Actions**.
6. Under **Actions**, watch the `Deploy to GitHub Pages` workflow finish successfully.
7. Visit **https://chedli01.github.io/**. GitHub Pages can take a few minutes to propagate after the first successful deployment.

If the deployment workflow does not start, check that GitHub Actions is enabled for the repo. The included `.github/workflows/deploy.yml` builds Astro and deploys the result; **do not upload `dist` manually**. Future pushes to `main` republish the site.

If you already created the repository with a README, clone it first or reconcile its initial commit; do not force push blindly.

## Customize the site

| Change | File |
| --- | --- |
| Your about section, metrics, skills, internships, links | `src/content/home/en.yaml` |
| Project details and case studies | `src/content/work/*.mdx` |
| Project illustrations | `src/assets/*.png` (home cards) and `public/images/*.png` (case studies) |
| Replace initials with a real profile photo | `public/avatar.svg` and photo tag in `src/pages/index.astro` |
| Downloadable CV | `public/cv.pdf` |
| Site colors, typography, spacing | `src/styles/global.css` |
| Site URL, sitemap | `astro.config.mjs` |
| GitHub Pages action | `.github/workflows/deploy.yml` |

For a real photo: save a headshot at `public/profile.jpg` and replace `src="/avatar.svg"` with `src="/profile.jpg"` in `src/pages/index.astro`. Use a properly cropped square JPEG or PNG.

## Content decisions and confirmations

- **Avatar:** uses an intentional **CM initials illustration**, because no personal photo was supplied. It is not your friend's photo.
- **CV:** the current download is an English, general DevOps/Cloud/Platform CV, sourced from your uploaded `Cv_Chedli_Masmoudi_brainbroad(3).pdf`. Replace it with your preferred master CV any time.
- **PCP internship dates:** shown as **Summer 2026**, because exact dates were not supplied. Confirm this label and the company name before publishing.
- **Project diagrams:** original **conceptual illustrations**, not screenshots or claims about live infrastructure.
- **Azure Subscription Factory & Cognira:** high-level public descriptions only. No internal source code, keys or cloud account details are included.
- **Blog:** deliberately not published. No articles were invented in your name.
- **Contact:** the public-facing email, LinkedIn and GitHub match the details you provided.

## Notes

- This is a **static Astro website**, so no back-end hosting, database, paid service, or personal access token is needed to host on GitHub Pages.
- The site uses fonts through npm packages, does not embed analytics or cookies, and contains no user-submitted form requiring a server. Email links open the visitor's mail app, and the copy button uses their browser clipboard.
- The `.gitignore` excludes dependencies and build output.
- Please confirm you have permission to reuse the original site's design/source code, especially if you plan to publish it publicly.
