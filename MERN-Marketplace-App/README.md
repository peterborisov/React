# MERN Marketplace App

## Client
====================================================
React app setup
-----------------
React routing  > npm install react-router-dom<br/>
Redux setup > npm i redux react-redux <br>
Redux-devtools-extension<br/>
	- also install chrome extension for redux + composeWithDevTools() in createStore
	In index.js <br/>
	1. Import from react-redux and redux<br/>
	2. Create user reducer function<br/>
	3. Combine multiple reducers<br/>
	4. Create redux store<br/>
	5. provide redux store to the entire app

## Server
===================================================
Entry point is server.js > routes > controllers 

Server setup 
> 'npm init -y' to create package.json file<br/>
> 'npm i express dotenv mongoose cors morgan

Express setup 
> Express is reqest/response handler

Using import/export syntax(React syntax)
https://www.npmjs.com/package/esm

Routes(endpoints)

Autoloading routes
To prevent multiple routs import as middleware, use 'fs' module.

Controllers

Env variables<br/>
creat .env file 

Using morgan<br/>
HTTP request logger middleware for node.js

DB setup(MongoDB)
> Install localy<br/>
> Use mongoDB Atlas<br/>
> Robo 3t - visualize DB<br/>


## User registration
=================================================
1. Create register page
2. User enter name, email, password
3. Send information using axios to the backend in req.body
4. Backend will save or create user in DB

Create register form component. Pass data as props from parent(Register.js) to RegisterForm.js

Using Axios > send req to backend

Register endpoint and json
> create/register user<br/>
> create endpoint/route<br/>
> create controller to handle user registration

Bcrypt hash password
> npm i bcrypt

Save user in DB
in mongoDB terminal > db["users"].find()

Toast notification
> npm i react-toastify

Actions
