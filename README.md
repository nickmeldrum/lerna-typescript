# Lerna - Typescript - Webpack

Testing that we still get sourcemaps when:

 1. we are using lerna to import a local package that was written in typescript (compiled to js with sourcemaps)
 2. our package is then webpacked with sourcemaps

Therefore there is a 2 stage process for sourcemapping. `source-map-loader` takes the typescript generated sourcemaps to include them properly in the webpack sourcemaps.

Tested and works fine.

## Instructions to test this:

 1. `npm install` to install 3rd party dependencies
 2. `lerna bootstrap` to install local packages into local node-modules folders
 3. `lerna run tsc` to compile both local modules (in the lib folder)
 4. `cd packages/top-level && npm run bundle` to create the webpack bundle (in the dist folder)
 5. `npm run debug-bundled` to run the webpack bundle in node with the inspector attached
 6. in chrome browse to `http://localhost:1992/json/list` to get the chrome devtools address to debug
 7. open the devtools inspector at that address and inspect the code...
 8. step into the `doSomething()` method (defined in the imported local package) - it should all look like the original typescript!
