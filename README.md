# 🌟 muskansindhu.tech

A modern portfolio showcasing my work as a software engineer, built with Next.js and TypeScript.


## ✨ Features

- **Dynamic Project Pages** - Each project has its own detail page with features and tech stack
- **Dark/Light Mode** - Theme switcher with system preference detection
- **Contact Form** - Integrated contact form for inquiries
- **Responsive Design** - Works seamlessly across all devices
- **Fast & Optimized** - Built on Next.js 14 App Router for optimal performance

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible UI components
- **Framer Motion** - Smooth animations

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/muskansindhu/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build

```bash
npm run build
npm start
```

## 📂 Project Structure

```
src/
├── app/
│   ├── api/              # API routes
│   ├── projects/
│   │   └── [slug]/       # Dynamic project detail pages
│   ├── contact/          # Contact page
│   └── privacy/          # Privacy policy
├── components/
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── data/
│   ├── projects.json     # Project data
│   ├── career.json       # Work experience
│   ├── skills.json       # Tech skills
│   └── socials.json      # Social links
└── lib/
    ├── schemas.ts        # Zod validation schemas
    └── utils.ts          # Helper functions
```

## 📝 Content Management

### Adding a New Project

Edit `src/data/projects.json`:

```json
{
  "name": "Project Name",
  "description": "One-line description",
  "longDescription": "Detailed 2-3 sentence overview",
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "image": "/img/screenshot.png",
  "tags": ["React", "TypeScript"],
  "links": [
    {
      "name": "Website",
      "href": "https://project.com",
      "icon": "globe"
    }
  ]
}
```

Project pages are automatically generated at `/projects/[project-name]`.

### Updating Your Resume

Replace `public/resume.pdf` with your latest resume.

## 🚢 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muskansindhu/portfolio)

1. Push your code to GitHub
2. Import the repository to Vercel
3. Add your environment variables
4. Deploy!

The site will automatically redeploy on every push to main.

## 🎨 Customization

### Theme Colors

Modify the color scheme in `src/app/globals.css` (CSS variables) or `tailwind.config.ts`.

### Navigation

Update navigation links in `src/components/Header.tsx`.

## 📬 Contact

- **Website**: [muskansindhu.tech](https://muskansindhu.tech)
- **LinkedIn**: [linkedin.com/in/muskan-sindhu](https://linkedin.com/in/muskan-sindhu)
- **GitHub**: [github.com/muskansindhu](https://github.com/muskansindhu)
- **Email**: [shunyamuskan@gmail.com](mailto:shunyamuskan@gmail.com)

---

<div align="center">
  Made with ❤️ by Muskan Sindhu
</div>