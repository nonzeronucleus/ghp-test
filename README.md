# Starter project template

Created using [Create React App](https://github.com/facebookincubator/create-react-app), with the following modifications already done

## Code structure

### Components

I'm basic my components around atomic design, and using a variation on [this](https://medium.com/@yejodido/atomic-components-managing-dynamic-react-components-using-atomic-design-part-1-5f07451f261f) approach (I've added numbers to keep the folders in an the right order)


### State

Trying out a [variant on the ducks approach](https://hackernoon.com/my-journey-toward-a-maintainable-project-structure-for-react-redux-b05dfd999b5) - keeping actions, action types and reducers in a single file,


## CSS Modules

Ejected

Replace standard css-loaded in both webpack.config.dev.js and webpack.config.prod.js with

```js
    loader: require.resolve('css-loader'),
    query: {
      modules: true,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    }                
```


## Set up for githubpages

```sh
yarn add gh-pages
```

Added the following scripts your `package.json`:

```js
  // ...
  "scripts": {
    // ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
```

The `predeploy` script runs automatically before `deploy` is run.


#### Deployed the site by running `npm run deploy`

Ran:

```sh
yarn run deploy
```

#### Ensured my project’s settings use `gh-pages`

Finally, configured **GitHub Pages** option in the GitHub project settings to use the `gh-pages` branch:

<img src="http://i.imgur.com/HUjEr9l.png" width="500" alt="gh-pages branch setting">


### Accessing

To deploy, I just run

```sh
yarn run deploy
```

and access the site at [https://nonzeronucleus.github.io/ghp-test](https://nonzeronucleus.github.io/ghp-test)

#### I haven't done Step 5: Optionally, configure the domain

You can configure a custom domain with GitHub Pages by adding a `CNAME` file to the `public/` folder.

### Client-side routing

I've install react-router

```sh
yarn add react-router
```

In order to support it on github pages, I've followed [this guide](https://github.com/rafrex/spa-github-pages).


