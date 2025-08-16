import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Tailwind CDN for static HTML
const tailwindCdn = '<script src="https://cdn.tailwindcss.com"></script>';

const slidesDir = path.join(process.cwd(), "slides");
const slideFiles = fs.readdirSync(slidesDir).filter((f) => f.endsWith(".md"));

function getMeta(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  return data;
}

// Modern terminal-inspired UI with micro-SaaS styling
function generateSlideHTML(slides) {
  const slideItems = slides
    .map(
      (slide) => `
    <div class="group relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 h-full flex flex-col">
      <div class="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div class="relative p-6 flex flex-col h-full">
        <!-- Terminal Header -->
        <div class="flex items-center gap-2 mb-4">
          <div class="flex gap-1.5">
            <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
          </div>
          <div class="ml-3 text-xs text-gray-400 font-mono">~/slides/${slide.name}</div>
        </div>
        
        <!-- Content -->
        <a href="/${slide.name}/" class="block flex-1 flex flex-col">
          <div class="mb-3">
            <h3 class="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300 font-mono leading-tight mb-2">
              ${slide.meta.title || slide.name}
            </h3>
            <div class="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-500"></div>
          </div>
          
          ${
            slide.meta.description
              ? `
          <div class="text-gray-300 mb-4 leading-relaxed text-sm flex-1">
            <span class="text-green-400 font-mono text-xs">$</span> 
            <span class="description-text" data-full="${slide.meta.description.replace(/"/g, "&quot;")}">
              ${
                slide.meta.description.length > 100
                  ? slide.meta.description.substring(0, 100) + "..."
                  : slide.meta.description
              }
            </span>
            ${
              slide.meta.description.length > 100
                ? '<button class="see-more-btn text-purple-400 hover:text-purple-300 ml-1 text-xs font-mono underline">see more</button>'
                : ""
            }
          </div>
          `
              : ""
          }
          
          <!-- Meta Info -->
          <div class="mb-4 space-y-2 text-xs">
            ${slide.meta.duration ? `<div class="text-gray-400"><span class="text-cyan-400">⏱</span> ${slide.meta.duration}</div>` : ""}
            ${slide.meta.level ? `<div class="text-gray-400"><span class="text-yellow-400">📊</span> ${slide.meta.level}</div>` : ""}
          </div>
          
          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${
              slide.meta.tags
                ? slide.meta.tags
                    .slice(0, 3)
                    .map(
                      (tag) =>
                        `<span class="px-2 py-1 bg-purple-500/15 border border-purple-500/25 text-purple-300 rounded text-xs font-mono hover:bg-purple-500/25 transition-colors duration-200">${tag}</span>`
                    )
                    .join("")
                : ""
            }
            ${
              slide.meta.tags && slide.meta.tags.length > 3
                ? `<span class="px-2 py-1 bg-gray-500/15 border border-gray-500/25 text-gray-400 rounded text-xs font-mono">+${slide.meta.tags.length - 3}</span>`
                : ""
            }
          </div>
          
          <!-- Action Button -->
          <div class="flex items-center justify-between mt-auto">
            <span class="text-gray-400 text-xs font-mono">click to open →</span>
            <div class="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded text-xs font-semibold group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300 shadow-lg">
              Launch
            </div>
          </div>
        </a>
      </div>
    </div>
  `
    )
    .join("");

  return `
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-900">
      <!-- Background Pattern -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div class="relative z-10 px-4 py-16">
        <!-- Header -->
        <div class="max-w-6xl mx-auto text-center mb-16">
          <div class="inline-flex items-center gap-3 bg-black/50 border border-gray-800 rounded-full px-6 py-3 mb-8">
            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span class="text-gray-300 font-mono text-sm">System Online</span>
          </div>
          
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            slides.yazgan.xyz
          </h1>
          
          <p class="text-lg lg:text-xl text-gray-300 mb-8 font-mono">
            <span class="text-green-400">$</span> Presentation slides crafted with code
          </p>
          
          <div class="flex items-center justify-center gap-4 text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Interactive</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Responsive</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Open Source</span>
            </div>
          </div>
        </div>
        
        <!-- Slides Grid -->
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${slideItems}
          </div>
        </div>
        
        <!-- Footer -->
        <div class="max-w-6xl mx-auto mt-20 text-center">
          <div class="inline-flex items-center gap-2 text-gray-400 font-mono text-sm">
            <span>Built with</span>
            <span class="text-purple-400">❤️</span>
            <span>and</span>
            <span class="text-cyan-400">Slidev</span>
          </div>
        </div>
      </div>
      
      <!-- JavaScript for see more functionality -->
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          document.querySelectorAll('.see-more-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
              e.preventDefault();
              e.stopPropagation();
              const textSpan = this.previousElementSibling;
              const fullText = textSpan.getAttribute('data-full');
              
              if (this.textContent === 'see more') {
                textSpan.textContent = fullText;
                this.textContent = 'see less';
              } else {
                textSpan.textContent = fullText.substring(0, 100) + '...';
                this.textContent = 'see more';
              }
            });
          });
        });
      </script>
    </div>
  `;
}

const slides = slideFiles.map((file) => {
  const name = path.basename(file, ".md");
  const meta = getMeta(path.join(slidesDir, file));
  return { file, name, meta };
});

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>slides.yazgan.xyz - Interactive Presentations</title>
  <meta name="description" content="Interactive presentation slides crafted with code. Modern, responsive, and open source." />
  <meta name="keywords" content="slides, presentations, frontend, development, alperreha" />
  <meta property="og:title" content="slides.yazgan.xyz" />
  <meta property="og:description" content="Interactive presentation slides crafted with code" />
  <meta property="og:type" content="website" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
  ${tailwindCdn}
  <style>
    body { font-family: 'JetBrains Mono', monospace; }
    .font-mono { font-family: 'JetBrains Mono', monospace; }
  </style>
</head>
<body class="bg-black overflow-x-hidden">
  ${generateSlideHTML(slides)}
</body>
</html>`;

// Ensure dist directory exists
if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

fs.writeFileSync(path.join(process.cwd(), "dist", "index.html"), html);
console.log("✅ dist/index.html generated.");
