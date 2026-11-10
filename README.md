# Personal website

React + Vite + Tailwind CSS.

## Run it in VS Code

1. Unzip the folder, then in VS Code choose File > Open Folder and pick `portfolio`.
2. Open the terminal (Terminal > New Terminal) and run:
   ```
   npm install
   npm run dev
   ```
3. Open the address it prints (usually http://localhost:5173).

You need Node.js 20 or newer: https://nodejs.org

## Make it yours

Edit `src/content.js`. Your name, tagline, about text, projects, leadership roles, skills,
interests, email and social links are all there. Save and the page updates instantly.

- Photo: put an image in the `public` folder (for example `public/me.jpg`) and set `photo: '/me.jpg'`.
- Colours: change the values under `@theme` in `src/index.css`.
- Page title: edit `index.html`.

## Put it online

```
npm run build
```

Upload the `dist` folder to Netlify, Vercel or GitHub Pages.
