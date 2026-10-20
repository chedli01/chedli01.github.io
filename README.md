# Chedli Masmoudi — DevOps & Platform Engineering Portfolio

[**Live portfolio → chedli01.github.io**](https://chedli01.github.io/)

Personal portfolio presenting DevOps, DevSecOps, cloud infrastructure and platform engineering work, with technical case studies, engineering experience and selected projects.

## Projects

- **KubeForge** — Kubernetes self-service environments built with Crossplane v2, Python validation, GitHub Actions and Argo CD. [Source](https://github.com/chedli01/KubeForge)
- **Task Manager** — Azure VM and AKS infrastructure paths, Terraform/Ansible/Helm automation, CI/CD, GitOps, Linkerd and observability. [Source](https://github.com/chedli01/task_management_devops)
- **Azure Subscription Factory** — Azure subscription provisioning through Terraform, GitLab CI/CD and approval gates.
- **Cloud Policy-as-Code Guardrails** — Terraform/Azure governance with OPA, Rego, Conftest and Python reporting.

## Tech stack

Built with [Astro](https://astro.build/), MDX, Tailwind CSS and TypeScript. The static site is deployed using GitHub Actions and GitHub Pages.

## Development

Requires Node.js 22.19+ and npm.

```bash
npm ci
npm run dev
```

Visit <http://localhost:4321>. For a production build:

```bash
npm run build
npm run preview
```

## Content and assets

| Purpose | Location |
| --- | --- |
| Homepage, metrics, skills and experience | `src/content/home/en.yaml` |
| Project case studies | `src/content/work/*.mdx` |
| Site design and theme tokens | `src/styles/global.css` |
| Project diagrams and animations | `public/images/` |
| Headshot and social preview | `public/profile.jpg`, `public/og.png` |
| Downloadable CV | `public/cv.pdf` |
| GitHub Pages deployment | `.github/workflows/deploy.yml` |

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages after a push to `main`. Set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** (not branch-based/Jekyll deployment).

## Contact

- [LinkedIn](https://linkedin.com/in/chedli-masmoudi-4b6911328)
- [GitHub](https://github.com/chedli01)
- [Email](mailto:chedli.masmoudi01@gmail.com)
