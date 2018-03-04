# mean-stack

First, you need to set up the environment, download Node.js with the lastest vision https://nodejs.org/en/ 
                                  mongoDB https://www.mongodb.com/download-center#community.


After downloading MongoDB, follow https://docs.mongodb.com/manual/administration/install-community/ to set up.

npm install --save mongoose-unique-validator  
extra validation
https://www.npmjs.com/package/mongoose-unique-validator   

Angular 2+NodeJS
![capture](https://user-images.githubusercontent.com/22507322/36940847-e774772a-1f12-11e8-8a9a-f2ab7a70ba77.PNG)


set up routing:  
````
  const APP_ROUTES:Routes=[
  { path:'', redirectTo:'/messages',pathMatch:'full'},
  { path:'messages', component:MessagesComponent},
  { path:'auth', component:AuthenticationComponent}
  ];   
  
  export const routing=RouterModule.forRoot(APP_ROUTES);
````


App_Routes is the type of Routes which is provided by @angular router package,each route has a path which is the part we see in the URL after the slash.
using the built-in RouterModule Angular2 ships with

You can get also reference from here https://github.com/ericdouglas/MEAN-Learning
