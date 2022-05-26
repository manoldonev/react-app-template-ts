![license](https://img.shields.io/github/license/manoldonev/react-app-template-ts?style=plastic) ![ci workflow](https://github.com/manoldonev/react-app-template-ts/actions/workflows/main.yml/badge.svg)

# React TypeScript App Template

This is a Github template repo that can be used for rapid application prototyping of React TypeScript applications:

- Based on Vite
- React 18
- Prettier
- Eslint setup (strict ruleset -- check the `.eslintrc` contents)
- Git pre-commit hook setup (`husky` & `lint-staged`)
- Deployment setup (`gh-pages`)
- Github Actions CI workflow
- Dependency management via [Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate/)
- Package management via [pnpm](https://pnpm.io/)

Make sure to update the following if using the template:

- The LICENSE file.
- All references to the string `react-app-template-ts` in package.json, package-lock.json, and vite.config.js files

## Available Scripts

In the project directory, you can run:

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:3000/react-app-template-ts/](http://localhost:3000/react-app-template-ts/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm test`

Launches the test runner in the interactive watch mode.

### `pnpm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/#getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
