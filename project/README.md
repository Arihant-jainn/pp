# Arihant Jain - Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark/light theme switching, smooth animations, and a comprehensive showcase of skills and projects.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: System preference detection with manual toggle
- **Smooth Animations**: Framer Motion for engaging interactions
- **Blog System**: Separate pages for tech blogs and poetry
- **AI Assistant**: Interactive helper for portfolio information
- **Professional Contact Form**: Modern design with validation
- **Project Showcase**: 12+ project cards with categories and filtering
- **Skills Visualization**: Organized by category with progress bars

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── layout/          # Layout components (Navbar, etc.)
│   └── sections/        # Page sections
├── contexts/            # React contexts (Theme, etc.)
├── data/               # Static data and configuration
├── pages/              # Route components
└── styles/             # Global styles
```

## 🎨 Customization

### Adding New Projects
Edit `src/components/sections/ProjectsSection.tsx` and add new project objects to the `projects` array.

### Adding Blog Posts
1. Add new blog post data to `src/components/sections/BlogSection.tsx`
2. Create corresponding content in `src/pages/BlogPost.tsx`

### Updating AI Assistant
Edit `src/data/aiAssistantData.ts` to update the knowledge base and response templates.

### Customizing Theme Colors
Update the color scheme in `tailwind.config.js` and the gradient classes throughout the components.

## 🚀 Deployment

This project is ready for deployment on:
- **Netlify**: Push to GitHub and connect repository
- **Vercel**: Import GitHub repository
- **GitHub Pages**: Build and deploy static files

### Build Commands
- Build: `npm run build`
- Preview: `npm run preview`
- Dev: `npm run dev`

## 📝 Content Updates

1. **Personal Information**: Update contact details in `ContactSection.tsx`
2. **About Section**: Modify text and photo in `AboutSection.tsx`
3. **Skills**: Update skill levels and categories in `SkillsSection.tsx`
4. **Projects**: Add your actual project data with real GitHub/live URLs
5. **AI Assistant**: Enhance responses in `aiAssistantData.ts`

## 🎯 Performance Optimizations

- Lazy loading for images
- Code splitting with React.lazy
- Optimized animations with Framer Motion
- Efficient re-renders with React.memo
- Compressed images from Pexels

## 📱 Mobile Optimization

- Touch-friendly interaction areas
- Responsive navigation with mobile menu
- Optimized image sizes for mobile
- Fast loading with optimized assets

Built with ❤️ by Arihant Jain