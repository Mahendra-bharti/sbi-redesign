# SBI Website Redesign

This project is a redesigned version of the **State Bank of India (SBI) website** created for the **Frontend Frontier Competition** organized by **IIT Patna's NJACK Development Team**. The primary focus is on improving the website's **UI/UX**, **visual appeal**, and **performance optimization**.

## 🚀 Live Demo
🔗 [View Project on GitHub Pages](https://mahendra-bharti.github.io/sbi-redesign/)

---

## 📂 Project Structure
```
/sbi-redesign
├── /public
├── /src
│   ├── /components
│   ├── /pages
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── AccountSummaryPage.jsx
│   │   ├── AccountStatementPage.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── Dashboard.jsx
│   │   └── Services.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── /dist (Generated after build)
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation and Setup
Follow these steps to set up the project locally:

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/sbi-redesign.git
```

2. **Navigate to the Project Directory**
```bash
cd sbi-redesign
```

3. **Install Dependencies**
```bash
npm install
```

4. **Start Development Server**
```bash
npm run dev
```

5. **Build for Production**
```bash
npm run build
```

6. **Deploy to GitHub Pages**
```bash
npm run deploy
```

---

## 🔧 Key Features
✅ Clean and Professional UI Design  
✅ Improved Form Designs with Enhanced Error Handling  
✅ Responsive Design for Desktop, Tablet, and Mobile Devices  
✅ Smooth Animations using Framer Motion  
✅ Enhanced Navigation and Improved Dashboard Interface  

---

## 🖥️ Technologies Used
- **React.js** (Frontend Framework)
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling Framework)
- **Framer Motion** (For Animations)
- **React Router** (For Navigation)

---

## 📝 Deployment on GitHub Pages
If you encounter a **blank page** after deployment, ensure the following steps are followed:

1. Add the following line to your **vite.config.js**:
```js
base: '/sbi-redesign/'
```

2. Use `<Router basename="/sbi-redesign">` in `main.jsx`.

3. Remove any `<Router>` from `App.jsx` or other components to avoid duplicate routers.

---

## 🙌 Contributing
Contributions are welcome! If you have suggestions, feel free to create an issue or submit a pull request.

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 📧 Contact
For any queries or feedback, please contact **[Mahendra Bharti](mailto:your-email@example.com)**.

