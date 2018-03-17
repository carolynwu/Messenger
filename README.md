# Messenger  --Network Application

:zap: Click: http://socialapplication-env.us-east-2.elasticbeanstalk.com   


## Introduction
Use Mean stack to build a social network application.

Angular2 as a fronted-end, with Node.js, Express and MongoDB as a backend.


### Knowledge about Node.js and Angular 
* Some notes about Node.js:

  1. Node is a runtime environment for executing JavaScript code.

  2. There are two key components of the web application: client and service. Node.js is bascially JavaScript on the server part.

  **Express.js**
  1. This islightweight framework
  2. > That you don't have to repeat same code over and over again. Node.js is a low-level I/O mechanism which has an HTTP module. If         you just use an HTTP module, a lot of work like parsing the payload, cookies, storing sessions (in memory or in Redis), selecting       the right route pattern based on regular expressions will have to be re-implemented. With Express.js it there for you to use. 

(reference from https://stackoverflow.com/questions/12616153/what-is-express-js)

* Some notes about Angular2:

  Angular2 uses TypeScript to provide a good user experience

### How Node.js and Angular2 work together
Angular 2+NodeJS
Nodejs exposes some end points, some API end points, some routes to which Angular2 can connect behind the scenes to exchange data
and to well speak to the server.

![screenshot 8](https://user-images.githubusercontent.com/22507322/36977257-2a4751c4-2046-11e8-9cda-ac5f74b00b64.png)

(picture from https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/v4/content) section 1 lecture 4

## Strategies
* Set up the environment:  

First, you need to set up the environment, download Node.js with the lastest vision https://nodejs.org/en/ 
                                  mongoDB https://www.mongodb.com/download-center#community.


After downloading MongoDB, follow https://docs.mongodb.com/manual/administration/install-community/ to set up.

npm install --save mongoose-unique-validator  
extra validation
https://www.npmjs.com/package/mongoose-unique-validator   
set up routing:  
````
  const APP_ROUTES:Routes=[
  { path:'', redirectTo:'/messages',pathMatch:'full'},
  { path:'messages', component:MessagesComponent},
  { path:'auth', component:AuthenticationComponent}
  ];   
  
  export const routing=RouterModule.forRoot(APP_ROUTES);
````


* Users and Authentication
1. Encrypt the password stored in the database:

````
$ npm install --save bcryptjs
````

````
var bcrypt = require('bcryptjs');
````

2. jwt（JSON Web Token）

1. based on a web standard

2. used to securely communicate JSON object

3. consists of a header, payload and signature

4. self-contained


````
$ npm install --save jsonwebtoken
````
````
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
````

## Challenging
how to apply jwt
![jwt](https://user-images.githubusercontent.com/22507322/37370593-b52689be-26da-11e8-95ca-b76b252e379b.png)


how to use http in Angular2?  
make HTTP requests using RxJs Observable library.
![screenshot 8 _li](https://user-images.githubusercontent.com/22507322/36978012-bd293ea6-2048-11e8-83db-418d9cd8d50c.jpg)

