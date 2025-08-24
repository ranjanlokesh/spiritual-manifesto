# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Below commands you can run: 
### `npx create-react-app <repo-name>`

## Available Scripts

In the project directory, you can run:
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

Make sure following is removed from .gitignore
/build

## Update package.json: Add a homepage key:
### `homepage": "https://<username>.github.io/<repo-name>`

## Add deploy scripts to package.json:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

## Install gh-pages
`npm install gh-pages --save-dev`

## Run below commmand for Build and Deploy: 
`npm run build`
`npm run deploy`

## Check GitHub Pages settings:
- Go to your repo on GitHub
- Click on Settings → Pages
- Make sure the source is set to gh-pages branch, not main
- The folder should be / (root) — not /docs or anything else

- Wait a minute: GitHub Pages sometimes takes ~30–60 seconds to update. You might’ve caught it mid-publish.

- Visit Your Webpage: Head to `https://<username>.github.io/<repo-name>`