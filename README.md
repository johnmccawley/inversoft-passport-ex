# Passport Bluemix Example

This project contains an example project that illustrates using Passport with Node and React.

## Prerequisites
You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)

## Installation
* `git clone https://github.com/inversoft/passport-bluemix-example`
* `cd passport-bluemix-example`
* `./server> npm install`
* `./react> npm install`

## Passport and Database Configuration
* Start up Passport Backend
* Log into Passport Backend and create a new API key using the value from the `server/config/config.json` configuration file
* Create a MySQL database called `user_todos` by executing this in the MySQL shell
  * `create database user_todos character set = 'utf8mb4' collate = 'utf8mb4_bin';`
* Grant privileges to the dev user to this database by executing this in the MySQL shell 
  * `grant all on user_todos.* to 'dev'@'localhost' identified by 'dev';`
  
## Running / Development
* `./server> npm start`
  * Debug mode `./server> node --inspect server.js`
* `./react> npm start`
  * This should open a browser to [https://localhost:3000](https://localhost:3000). 

## Inversoft Internal Use 
The following is for Inversoft use, if you've cloned this repository your application names will be different.

### Deploying React frontend to Bluemix
* `./react> npm run build`
* `./react> cf push todo-passport-node-example`

### Deploying Node ToDo backend to Bluemix
* `./server> cf push todo-backend-passport-node-example`
