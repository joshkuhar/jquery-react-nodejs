# jQuery React Node.js

#### Description
This project demonstrates one way to integrate React and jQuery so that both network with the same database. Also, React Router and Redux are intentionally left out of this app. The goal is show how React can be implemented without significant of refactoring.  

## Project Requirements
This project uses React and Node.js. 

## Instructions
Clone the repo and then

`$ npm install` or if you have Yarn installed `$ yarn install`

Cd into jquery-react-nodejs and then 

`$ npm run dev`

Open a new terminal windown and cd into the directory then

`$ node server.js` or if you have nodemon installed `nodemon server.js`

Then navigate in a browser to localhost:8080

## index.html
The project's index.html file is placed in the public folder. It could be placed anywhere. Just make sure there is a script tag pointing the bundle.js file created by webpack.


## Webpack

One way to start incorporation React in jQuery is to use the ProvidePlugin to point to jQuery variables.
Use this [link](https://webpack.js.org/plugins/provide-plugin/#usage-jquery) to learn more.

