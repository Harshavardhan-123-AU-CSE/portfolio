# 🌐 Personal Portfolio Website

A single-page responsive portfolio website developed as part of a Frontend Web Development Internship Assignment. The project includes 3D model integration using **Three.js**, and features clean design, interactivity, and responsive layout.

---

## 📌 Objective

To demonstrate frontend development skills through a fully functional, single-page portfolio showcasing personal and project information with a mandatory 3D model.

---

## 🔧 Tech Stack

- **HTML5**
- **CSS3** (Vanilla or with Tailwind/Bootstrap)
- **JavaScript (Vanilla)**
- **Three.js** (3D model integration)
- **Deployed on**: Vercel / GitHub Pages / Netlify

---

## 🚀 Live Demo

🔗 [View Website Live](https://684c62a8c847054fe9cc5bcd--charming-axolotl-6958bc.netlify.app/)  
📁 [View Source Code](https://github.com/Harshavardhan-123-AU-CSE/portfolio/)

---

## 🧩 Features

- ✅ Hero section with name, role, background image, and optional CTA
- ✅ About section with profile picture and introduction
- ✅ Projects section with real project previews
- ✅ Contact form with JS validation (name, email, message)
- ✅ 3D model (spinning cube) integrated using **Three.js**
- ✅ Fully responsive design (mobile + desktop)

---

## 🖼️ Project Showcases

1. **GreenCart**
   - Preview: `images/greencart.jpg`
   - Description: A sustainable e-commerce website for local organic produce with real-time cart management.
   - Link: [GitHub Repo](https://github.com/example/greencart)

2. **HealthMate AI**
   - Preview: `images/healthmate-ai.jpg`
   - Description: AI-powered health assistant web app that tracks daily vitals and recommends habits.
   - Link: [GitHub Repo](https://github.com/example/healthmate-ai)

3. **EduSpark LMS**
   - Preview: `images/eduspark.jpg`
   - Description: An intuitive LMS for schools and institutions with real-time student tracking.
   - Link: [GitHub Repo](https://github.com/example/eduspark)

---

## 🎮 3D Model Integration

### Method: **Three.js**

- Rendered a **spinning 3D cube** with `OrbitControls` for interaction.
- Integrated directly into the **Hero section**.
- Responsive, smooth animation loop using `requestAnimationFrame`.

### Key Libraries:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
