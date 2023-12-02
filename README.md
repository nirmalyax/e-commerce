## Upcoming new Project
### **Step 1 : Create a new react project using vite js**

```jsx
npm create create-react-app applicationName
```

### **Step 2 : Install npm dependencies**

```jsx
npm i
```

### **Step 3 :** Install tailwind Css

1. **Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.**

```jsx
npm install -D tailwindcss postcss autoprefixer
```

```jsx
npx tailwindcss init -p
```

1. **Configure your template paths**

Add the paths to all of your template files in your tailwind.config.js file.

```jsx
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

1. ****Add the Tailwind directives to your CSS****

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

1. **Run your build process with npm run dev.**

```jsx
npm run dev
```