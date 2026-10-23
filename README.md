# Troy Yu — Portfolio Website

The personal portfolio and résumé site for **Hao "Troy" Yu**, Software Engineer /
BIM & CAD Automation Developer. It presents professional experience, engineering
(BIM) project work, self-built web applications, and a contact route, as a
single-page React app.

**Live:** <http://troyyu527.github.io/ReactWebsite>

## Pages

| Route | Page | What it shows |
|---|---|---|
| `/` | About Me | Intro, profile, social links |
| `/Resume` | Résumé | Experience, selected technical projects, education, skills — plus a PDF download |
| `/Projects` | BIM Projects | AEC/construction work: LaGuardia, Kosciuszko Bridge, Goethals Bridge, and others, with photo and video galleries |
| `/WebApps` | Web Apps | Self-built software: UNO Multiplayer, VisualAlgo, Hide & Seek |
| `/3Dsample` | 3D Sample | A Three.js viewer loading an `.obj` mesh, with orbit controls |
| `/Contact` | Contact | Form that composes a pre-filled email via `mailto:` |

Project content is data-driven: both galleries render from
[`src/projectData.js`](src/projectData.js), so adding a project means adding an
object, not writing a component.

## Tools & technologies

| Area | Used |
|---|---|
| Framework | **React 18** |
| Build tool | **Create React App** (`react-scripts` 5) |
| Routing | **React Router 6** (`BrowserRouter`, `basename` from `PUBLIC_URL`) |
| 3D | **Three.js** — `OBJLoader`, `OrbitControls` |
| Styling | SCSS → CSS |
| Deploy | GitHub Pages via `gh-pages` |

## Getting started

```bash
npm install
npm start
```

Then open **<http://localhost:8080>**.

> The port is pinned to `8080` by the `start` script (`set PORT=8080 && ...`).
> That syntax is Windows-specific — on macOS or Linux use `PORT=8080
> react-scripts start`, or install `cross-env`.

## Build & deploy

```bash
npm run build        # production build → build/
npm run deploy       # runs predeploy (build) then publishes build/ to gh-pages
```

`homepage` in `package.json` is set to the GitHub Pages URL, which is what makes
asset paths and the router `basename` resolve correctly under `/ReactWebsite/`.

> **Routing note:** this uses `BrowserRouter`, not `HashRouter`. GitHub Pages has
> no server-side rewrites, so loading a deep link such as `/ReactWebsite/Resume`
> directly can 404 — navigating from within the app always works. If direct deep
> links matter, either switch to `HashRouter` or add a `404.html` redirect shim.

## Project layout

```
public/
  download/TroyYu_Resume.pdf   downloadable résumé (linked from /Resume)
  img/ , video/                project media for the galleries
src/
  App.js                       routes and layout
  projectData.js               ALL project content (BIM + web apps)
  components/
    Aboutme.jsx                landing page
    Resume.jsx                 résumé content
    Projects.jsx               BIM gallery      (reads projectDataBIM)
    WebApps.jsx                web app gallery  (reads projectDataCS)
    SampleModel.jsx            Three.js viewer
    Contact.jsx                contact form (mailto)
    Menubar.jsx                navigation
    Slide.jsx / CSlide.jsx     image & content carousels
  css/                         SCSS sources and compiled CSS
  obj/                         3D model asset
  profile/                     photos and icons
TroyYu_Resume_2026.txt         résumé source text (not published — outside public/)
```

## Updating content

- **Projects** — edit [`src/projectData.js`](src/projectData.js).
  `projectDataBIM` feeds `/Projects`, `projectDataCS` feeds `/WebApps`. Image
  paths are relative to `public/`.
- **Résumé (page)** — edit [`src/components/Resume.jsx`](src/components/Resume.jsx).
- **Résumé (PDF)** — regenerate from `TroyYu_Resume_2026.txt` and replace
  `public/download/TroyYu_Resume.pdf`. Keep the two in step; the page and the
  download are separate sources.

## Housekeeping notes

- `@emailjs/browser` is listed as a dependency but isn't used — the contact form
  builds a `mailto:` link instead. Safe to remove.
- `npm run build` with `CI=true` treats warnings as errors, so a stray lint
  warning will fail a CI deploy even though a local build passes.
