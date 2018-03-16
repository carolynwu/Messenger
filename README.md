# Messenger  --Network Application

:zap: Click: http://socialapplication-env.us-east-2.elasticbeanstalk.com   

## Introduction
Use Mean stack to build a social network application.

Angular2 as a fronted-end, with Node.js, Express and MongoDB as a backend.

### knowledge about Node.js and Angular 
* Some notes about Node.js:

Node is a runtime environment for executing JavaScript code.

There are two key components of the web application: client and service. Node.js is bascially JavaScript on the server part.

**Express.js**

The framework



## Strategies



First STTEP: Set up the environment:  

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

Second STEP: figure out how to make node.js and Angular 2 work together

Angular 2+NodeJS
![screenshot 8](https://user-images.githubusercontent.com/22507322/36977257-2a4751c4-2046-11e8-9cda-ac5f74b00b64.png)

how to use http in Angular2?  
make HTTP requests using RxJs Observable library.
![screenshot 8 _li](https://user-images.githubusercontent.com/22507322/36978012-bd293ea6-2048-11e8-83db-418d9cd8d50c.jpg)


App_Routes is the type of Routes which is provided by @angular router package,each route has a path which is the part we see in the URL after the slash.
using the built-in RouterModule Angular2 ships with


Users and Authentication
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

how to apply
![jwt](https://user-images.githubusercontent.com/22507322/37370593-b52689be-26da-11e8-95ca-b76b252e379b.png)



You can get also reference from here https://github.com/ericdouglas/MEAN-Learning
https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/v4/overview
