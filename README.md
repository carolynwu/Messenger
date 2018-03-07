# mean-stack

Angular2 as a fronted-end, Node.js, Express and MongoDB as a backend


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


Angular 2+NodeJS
![screenshot 8](https://user-images.githubusercontent.com/22507322/36977257-2a4751c4-2046-11e8-9cda-ac5f74b00b64.png)

how to use http in Angular2?  
make HTTP requests using RxJs Observable library.
![screenshot 8 _li](https://user-images.githubusercontent.com/22507322/36978012-bd293ea6-2048-11e8-83db-418d9cd8d50c.jpg)


App_Routes is the type of Routes which is provided by @angular router package,each route has a path which is the part we see in the URL after the slash.
using the built-in RouterModule Angular2 ships with

You can get also reference from here https://github.com/ericdouglas/MEAN-Learning
