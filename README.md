# Rachit's Portfolio 
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://rachitsharma300.github.io/rachit-portfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/rachitsharma300/rachit-portfolio/blob/main/LICENSE)


A modern, performant portfolio built with cutting-edge web technologies. Designed to showcase projects with smooth animations and responsive design.


## ✨ Features

- **2-Theme System** (Light/Dark)
- **Animated UI** with Framer Motion
- **Functional Contact Form** (EmailJS)
- **Verified Certificates** (GUVI integration)
- **Responsive Design** (Mobile-first approach)
- **95+ Lighthouse Score** (Optimized performance)

## 🛠 Tech Stack

### Core Technologies
| Category        | Technologies                                                                 |
|-----------------|------------------------------------------------------------------------------|
| Frontend        | ![React](https://img.shields.io/badge/React-20232A?logo=react) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer) |
| Backend         | ![EmailJS](https://img.shields.io/badge/EmailJS-DD0031?logo=mail.ru) (Contact form) |
| Deployment      | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?logo=github) |

### Key Dependencies
```json
"dependencies": {
  "react": "^18.2.0",
  "react-icons": "^4.10.1",
  "framer-motion": "^10.16.4",
  "emailjs-com": "^3.2.0",
  "tailwindcss": "^3.3.0"
}
```
### Getting Started
Prerequisites
```
Node.js ≥16.x
npm
Git
```
### Installation
Clone the repo:

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### Install dependencies:

```bash
npm install
```
### Run locally:
```bash
npm run dev
```
Set up environment variables (for local development):
Create a .env file in root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```
### Building for Production
```bash
npm run build
```
### Customization Guide
1. Theme Colors
Modify tailwind.config.js:
```js
theme: {
  extend: {
    colors: {
      'dark': {
        900: '#0f172a' // Change dark theme base color
      },
      'pro': {
        accent: '#2563eb' // Professional theme accent
      }
    }
  }
}
```
## 2. Certificate Data
Edit src/data/certifications.js:
```js
{
  id: "GUVI-001",
  title: "Your New Certification",
  issuer: "Issuing Organization",
  date: "YYYY-MM-DD",
  link: "verification_url",
  skills: ["Skill 1", "Skill 2"]
}
```
## 3. Project Showcase
Update src/data/projects.js with:
```js
{
  title: "Project Name",
  description: "Brief description",
  tags: ["React", "Node.js"],
  image: "/project-image.png",
  github: "https://github.com/your/project",
  live: "https://live-demo.com"
}
```
### Challenging Parts
Theme System Implementation
Requires careful state management across components
Solution: Used React Context + localStorage persistence
Certificate Verification Flow
GUVI links need proper credential IDs
Tip: Store all certificates in a central JSON file
Mobile Menu Animations
Framer Motion requires precise layout measurements


### Deployment
Install gh-pages:
```bash
npm install gh-pages --save-dev
```
### Add to package.json:
```json
"homepage": "https://rachitsharma300.github.io/rachit-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
### Deploy:
```bash
npm run deploy
```
### License
MIT © Rachit Sharma


<!--

## Demo
https://github.com/user-attachments/assets/6b598e91-071c-4ba2-8559-be130678cd80
-->
