# Seventeen Bit Website

Welcome to the official website repository for **Seventeen Bit**, a Belgian/Dutch World of Warcraft guild! 🎮✨

## 🌟 Features

## 🛠️ Technologies Used

- **Frontend**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Backend**: n/a
- **Database**: n/a
- **Hosting**: n/a

For the Horde! 🩸 Or for the Alliance! 🛡️

---

# The Journey

## Setting up the frontend

- folder structure root/frontend/
- add `frontend/pnpm-workspace.yaml`:

```yaml
packages:
  - "front-office"
  - "back-office"
```

- add `root/.gitignore`:

<details>
  <summary>example .gitignore</summary>
  
  ```gitignore
# Node modules (top-level and subprojects)
node_modules/
frontend/back-office/node_modules/
frontend/front-office/node_modules/

# Logs

logs/
_.log
npm-debug.log_
pnpm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Dependency directories

jspm_packages/

# Production build

dist/
dist-ssr/
build/

# TypeScript

\*.tsbuildinfo

# Environment variables

.env
.env.local
.env.\*.local

# Local environment files

\*.local

# Vite

.vite/
.vite/deps/

# IDE files

.vscode/
!.vscode/extensions.json
.idea/
.DS*Store
Thumbs.db
*.suo
_.ntvs\*
_.njsproj
\_.sln
\*.sw?

# Ignore pnpm and workspace files (optional, if they are not needed in the repo)

pnpm-lock.yaml
pnpm-debug.log

# Output of ESLint

.eslintcache

# Miscellaneous

_.swp
_.swo

```
</details>

- setup the front-office and back-office using
- `pnpm create vite front-office --template react-ts`
- go to the react project folder
- `pnpm install`

### Logo, icon and theme

The 6 dominant colors extracted from the logo:
  - Dark Green - #354B42
  - Light Gray - #B0B7B7
  - Gray - #747C7F
  - Bright Green - #70BA38
  - White - #EFF1EF
  - Dark Blue-Black - #121B23

🌑 Dark Theme:
  - Background: #121B23 (Dark Blue-Black)
  - Primary Accent: #70BA38 (Bright Green)
  - Secondary Accent: #B0B7B7 (Light Gray)
  - Text: #EFF1EF (White)

☀️ Light Theme:
  - Background: #EFF1EF (White)
  - Primary Accent: #70BA38 (Bright Green)
  - Secondary Accent: #354B42 (Dark Green)
  - Text: #121B23 (Dark Blue-Black)
