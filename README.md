
# Laxmi Sahu - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS.

## Features

- Responsive design for all devices
- Dark/light mode toggle
- Modern animations and transitions
- SEO optimized
- Contact form
- JSON Resume download
- Preloader with name animation

## Tech Stack

- React with Vite
- TypeScript
- TailwindCSS for styling
- React Router for navigation
- React Helmet for SEO
- Lucide React for icons

## Pages

- Home: Brief introduction and overview
- About: Detailed professional summary
- Skills: Categorized technical competencies
- Experience: Work history with detailed achievements
- Projects: Portfolio of technical projects
- Certifications: Professional credentials
- Contact: Contact form and connection options

## Installation and Setup

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd laxmi-sahu-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Deployment Instructions

### Deploying to Vercel

1. Create a Vercel account at [vercel.com](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel login` and follow the prompts
4. From your project directory, run `vercel` to deploy

### Deploying to Netlify

1. Create a Netlify account at [netlify.com](https://netlify.com)
2. Set up your build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Deploy using the Netlify UI or CLI tools

### Deploying to GitHub Pages

1. Install gh-pages package: `npm install --save-dev gh-pages`
2. Add these scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Add a homepage field to package.json: `"homepage": "https://<username>.github.io/<repository>/"`
4. Run `npm run deploy` to publish

## Customization

The website can be customized by:

1. Editing the content in the components
2. Modifying the theme colors in `tailwind.config.ts`
3. Updating the resume.json file for the downloadable resume

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License
