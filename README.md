# mean-stack

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
````

You can get also reference from here https://github.com/ericdouglas/MEAN-Learning
