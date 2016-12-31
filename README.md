# es6environments_setup
Show how to set up a ES6 environment using npm,webpack,systemjs, etc... 

Usefull links..
http://www.programwitherik.com/understanding-the-babel-compiler-2016/

//Setting up using only NPM

1. npm init  [just select the defaults]
2. npm install --save-dev babel-cli
3. npm install --save-dev babel-preset-es2015
4. create a .babelrc file  add this file {"presets": ["es2015","react"]} , you can use this command to create file via terminal promp echo '{ "presets": ["es2015"] }' > .babelrc
5. Update the "scripts" section of the package.json with the following line 
   "build": "babel src -d lib", if should look like this 
   "scripts": {
    "build": "babel src -d lib"
  }  this tell babel that your js will be located inside the src folder, and your lib folder is where your output code will be after being transpile
6. Automate using either Gulp or Grunt

//Setting up using Webpack 
