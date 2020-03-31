# React App Boilerplate

### This Frontend Boilerplate features:

- React
- TypeScript
- SASS
- ESLint
- Prettier
- Webpack


### Prerequisites

To use it, first you need to install **node** and **npm**.

### Scripts

- `npm ci` - installs all dependencies

- `npm run dev`: starts a development server on **localhost:3737**

- `npm run build`: creates a bundle for production on  **dist** folder

- `npm run prettier`: runs _prettier_ on entire project (only checks for errors)

- `npm run fix-prettier`: runs _prettier_ on entire project to fix errors

- `npm run lint`: runs _eslint_ on entire project to check for errors (only typescript files)

- `npm run fix-lint`: runs _eslint_ on entire project to repair fixable errors (only typescript files)

### Observations

- Hot reload is active for development server

- Before each commit, both _prettier_ and _eslint_ are executed on entire project to check for errors. You can bypass this check by passing _--no-verify_ flag on _git commit_. 

- When _build_ script is ran, it triggers _prebuild_ script, which also checks for _prettier_ and _eslint_ errors before bundling.

- If you want to use this boilerplate, do not forget to change some _package.json_ configs that are inherent to this repository (such as name, version, description, repository, author, bugs, license and homepage).

### Final  Considerations

This is the model I use in my react applications. All configurations and rules are subjective, and everyone is free to change them in their personal projects.  This is just a starting point to build an application without being stuck for a long time configuring it.