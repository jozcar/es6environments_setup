# es6environments_setup
Show how to set up a ES6 environment using npm,webpack,systemjs, etc... 

Usefull links..
http://www.programwitherik.com/understanding-the-babel-compiler-2016/

//Setting up using only NPM

0. create your working directory, then inside your directory execute steps 1 to 3.
1. npm init  [just select the defaults]
2. npm install --save-dev babel-cli
3. npm install --save-dev babel-preset-es2015
4. create a .babelrc file  add this file {"presets": ["es2015","react"]} , you can use this command to create file via terminal prompt echo  { "presets": ["es2015"] } > .babelrc
5. Update the "scripts" section of the package.json with the following line 
   "build": "babel src -d lib", if should look like this 
   "scripts": {
    "build": "babel src -d lib"
  }  this tells babel that your  es6 js files will be located inside the src folder, and to place the transpile files in the lib folder.
6. create folders src and lib in your working directory.
7. to test your es6 environment , create a es6 class inside your src directory, you can use the Polygon class on the Mozilla site. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
8. transpile it by using this command npm run build
9. check your lib folder, and you will see the es5 transpile version.  to test this, create and index.html page, and reference the js file from the lib directory.
  
10. You can add the 'watch' argurment to your build statement just after lib as follow:  "build": "babel src -d lib --watch", this will watch any file you create on your src folder, and will transpile it an put it into your lib folder.

//Setting up using Webpack 
