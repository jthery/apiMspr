# apiMspr
API de fidélisation de client via un système de couponing.
l'idée est d'avoir une application où l'utilisateur pourra scanner des QR code & stocker dans son espace client les différents coupons précédemment scannés


##Pre-requisites
- IDE
- [NodeJS](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/installer/)

##Optional
- MySQL Workbench / Datagrip / phpmyadmin

## How to start


#### 1) Clone repository

open terminal & type:
```
$ git clone https://github.com/jthery/apiMspr.git
```

#### 2) install project dependencies
```
$ cd apiMspr/
```
```
$ npm install
```

#### 3) Config identifiers database

Modify his identifiers database in "apimspr/.env.local"

DB_USER= youruser
DB_PASSWORD= yourpassword
DB_PORT= yourportdatabase


#### 4) start project
```
$ npm run local
```

open browser on http://localhost:3000

## SWAGGER CHECK REQUESTS
Use Swagger for check Requests, open browser on http://localhost:3000/api-docs/

