module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSomeComponent',
      externals: {
        'react': 'React',
        'react-router': 'ReactRouter',
        "@gov.au/core": "Core",
        "@gov.au/body": "Body",
        "@gov.au/breadcrumbs": "Breadcrumbs",
        "@gov.au/pancake-js": "pancake",
        "@gov.au/pancake-sass": "pancake-sass",
      }
    }
  }
}
