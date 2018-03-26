# Messenger  --Network Application

:zap: Click: http://socialapplication-env.us-east-2.elasticbeanstalk.com   


## Introduction
Use Mean stack to build a social network application.

Angular2 as a fronted-end, with Node.js, Express and MongoDB as a backend.


### Knowledge about Node.js and Angular 
#### Some notes about Node.js:

  1. Node is a runtime environment for executing JavaScript code.

  2. There are two key components of the web application: client and service. Node.js is bascially JavaScript on the server part.

  **Express.js**
  1. This is lightweight framework
  2. > That you don't have to repeat same code over and over again. Node.js is a low-level I/O mechanism which has an HTTP module. If         you just use an HTTP module, a lot of work like parsing the payload, cookies, storing sessions (in memory or in Redis), selecting       the right route pattern based on regular expressions will have to be re-implemented. With Express.js it there for you to use. 

(reference from https://stackoverflow.com/questions/12616153/what-is-express-js)


#### Some notes about Angular2:

  Angular2 uses TypeScript to provide a good user experience
1. ng-model:

The ng-model directive binds the value of HTML controls (input, select, textarea) to application data.
* Directive
property- DOM, attribute- HTML

* `Two-way binding`

reference from https://www.w3schools.com/angular/angular_model.asp

2. Services &Dependency Injection ??

3. Angular is a framework for creating single page application. Difference: 

traditional web application: send the request and wait for the response which introduces a slight delay between clicking and viewing the result

Single page application: 
> interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. 

reference from wiki: single page application

Angular2 creates reactive application and ionic2 compile Angular2 App to JavaScript, HTML CSS following the structure that cordiva needs, provides component library convenience tools, and apache cordova compile JavaScript, HTML and CSS to ios android and window application




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

In normal application, the authentication managered by a session, which means to keep a session on the server, and a cookie on the client to know if the client is logged in and delete or invalidate the session once the client log out.

In Angular2 , we cannot use a session

send token

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
### Backend: how a request travels throught the application
1. The application.js file which used to set up Express app holds the code which is excuted on each request reaching the server.

   ````
    app.use(function (req, res, next) {
    return res.render('index');
    });
   ````
    
when there are error pages, it will render the index.hbs file from views folder, which is also the same file holding Angular2 application. 

set up main routing in the Angular2 app, most of routes will not be found in the server, only have the back end routes for Angular2 to connect behind the scenes on the Server. All the user-relate routes are stored in the Angular2 app. Each request sent to the server or whenever we reload the page, it will reach the server first, and not Angular2.

This set up to make sure we always render the Angular2 application.

(reference from https://www.udemy.com/angular-2-and-nodejs-the-practical-guide/learn/v4/content) section 2 lecture 9


2. how to apply jwt
![jwt](https://user-images.githubusercontent.com/22507322/37370593-b52689be-26da-11e8-95ca-b76b252e379b.png)


3. how to use http in Angular2?  
make HTTP requests using RxJs Observable library.
![screenshot 8 _li](https://user-images.githubusercontent.com/22507322/36978012-bd293ea6-2048-11e8-83db-418d9cd8d50c.jpg)

Not finished yet!
