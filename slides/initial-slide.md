---
# Slidev configuration
theme: seriph
background: https://cover.sli.dev
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true

# SEO & Meta Information
title: "Getting Started with Modern Development"
description: "An introduction to modern development practices and tools that developers love. Learn about the fundamentals and best practices."
author: "Alper Reha YAZGAN"
keywords: "development, modern, programming, tutorial, getting started"
tags: ["development", "tutorial", "getting-started", "modern-dev"]
date: "2025-01-16"
duration: "15 min"
level: "beginner"
category: "development"

# Social sharing
og:
  title: "Getting Started with Modern Development"
  description: "Learn modern development practices with this interactive presentation"
  image: "https://slides.yazgan.xyz/slides/initial-slide/cover.png"
  url: "https://slides.yazgan.xyz/initial-slide"

# Additional metadata
info: |
  ## Getting Started with Modern Development

  An interactive presentation covering modern development practices and tools.
  Perfect for developers who want to learn the fundamentals.

  **Topics covered:**
  - Modern development workflow
  - Essential tools and practices
  - Best practices for beginners

  **Duration:** ~15 minutes
  **Level:** Beginner
---

# Getting Started with Modern Development �

Your journey to becoming a better developer starts here

<div class="flex items-center justify-center mt-12">
  <div class="text-center">
    <div class="text-lg text-gray-400 mb-4">Welcome to</div>
    <div class="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
      Modern Development Fundamentals
    </div>
    <div class="text-lg text-gray-400 mt-4">by Alper Reha YAZGAN</div>
  </div>
</div>

<div @click="$slidev.nav.next" class="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:bg-white/10 px-6 py-3 rounded-lg transition-all">
  Press Space for next page <carbon:arrow-right class="inline ml-2" />
</div>

---

## layout: two-cols

# Essential Developer Tools 🛠️

## 🔧 Development Environment

- **VS Code** with extensions
- **Git** version control
- **Node.js** & **pnpm/npm**
- **Terminal** mastery

## 📦 Package Management

- **Understanding dependencies**
- **Semantic versioning**
- **Lock files** importance
- **Security auditing**

::right::

## 🚀 Modern Workflow

- **Hot reloading** development
- **TypeScript** for safety
- **ESLint & Prettier** for consistency
- **Automated testing** basics

## 🌐 Deployment Basics

- **Static site hosting**
- **Environment variables**
- **CI/CD** introduction
- **Monitoring** essentials

---

# From Zero to Hero: Setting Up a Project 🎯

Let's create a modern web application from scratch

```bash {1-3|4-6|7-9|10-12|all}
# 1. Initialize your project
npm create vite@latest my-awesome-app --template react-ts
cd my-awesome-app

# 2. Install essential dependencies
npm install @types/node
npm install -D eslint prettier @vitejs/plugin-react

# 3. Configure development tools
echo "node_modules\n.env.local\ndist" > .gitignore
git init && git add . && git commit -m "🎉 Initial commit"

# 4. Start developing
npm run dev
```

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="bg-blue-50 border border-blue-200 p-4 rounded-lg text-center">
    <h3 class="text-blue-700 font-bold mb-2">⚡ Fast</h3>
    <p class="text-blue-600 text-sm">Vite HMR in ~50ms</p>
  </div>
  
  <div class="bg-green-50 border border-green-200 p-4 rounded-lg text-center">
    <h3 class="text-green-700 font-bold mb-2">🔒 Type Safe</h3>
    <p class="text-green-600 text-sm">TypeScript catching errors</p>
  </div>
  
  <div class="bg-purple-50 border border-purple-200 p-4 rounded-lg text-center">
    <h3 class="text-purple-700 font-bold mb-2">🎨 Modern</h3>
    <p class="text-purple-600 text-sm">Latest React 18 features</p>
  </div>
</div>

---

# Best Practices for Beginners 📚

Essential habits every developer should develop

<div class="grid grid-cols-2 gap-8">
  <div>
    <h2 class="text-2xl font-bold mb-4 text-green-400">✅ Do This</h2>
    <ul class="space-y-3 text-lg">
      <li>✅ <strong>Write meaningful commit messages</strong></li>
      <li>✅ <strong>Use consistent naming conventions</strong></li>
      <li>✅ <strong>Comment complex logic</strong></li>
      <li>✅ <strong>Test your code regularly</strong></li>
      <li>✅ <strong>Learn keyboard shortcuts</strong></li>
    </ul>
  </div>
  
  <div>
    <h2 class="text-2xl font-bold mb-4 text-red-400">❌ Avoid This</h2>
    <ul class="space-y-3 text-lg">
      <li>❌ <strong>Committing directly to main</strong></li>
      <li>❌ <strong>Ignoring error messages</strong></li>
      <li>❌ <strong>Copy-pasting without understanding</strong></li>
      <li>❌ <strong>Skipping documentation</strong></li>
      <li>❌ <strong>Not backing up your work</strong></li>
    </ul>
  </div>
</div>

<div class="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-300/30 rounded-lg">
  <h3 class="text-xl font-bold mb-2">💡 Pro Tip</h3>
  <p class="text-lg">Focus on building small projects consistently rather than starting big projects you can't finish. Progress over perfection!</p>
</div>
