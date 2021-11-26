# Mongoose Backend for a Registration Form

This assignment will allow you to practise building a general database structure for standard endpoints. In this case the work scenario is the creation of a book store management stock database.

## Tasks

## Task 0 - Create the folder structure for your backend server

Create the base folder structure for your backend server. Create folder for models, controllers, routes and any other group files you think will be needed. The idea is to have a starting point for the rest of the tasks. 

## Task 1 - Create your server.js file

Create a server.js file and implement the minimum structure for creating a small server. use all the express middleware needed for parsing and formating the data.

After this use `npm init` to create a `package.json` file and proceed to install express with `npm install express`.

## Task 2 - Write a .env file and use dotenv

Create a file in your root folder called `.env`. This file will contain all the connection information for accessing your database. You can use a local database or use one in the cloud. Keep in mind that depending on this decision the url syntax will change.

After this install dotenv and use it to use your `.env` file in the server.

## Task 3 - Connecting Mongoose

Install mongoose and use the `connect` method of mongoose to connect to your database.

## Task 4 - Mongoose - Create the book Schema

Think of the properties you would like to add to each book saved in the database. Your schema must have minimum 4 fields/properties: `title`, `author`, `ediorial`, `year`. Thinks which values should be required and which are optional. Think about the types of each value. 

## Task 5 - Create a model for the book Schema

Use the Schema created on Task 4 and create a model. Export this model for further use as the bridge to connect your server with the collection that will store the information of the books.

## Task 6 - Use the model to create the first endpoint

Create a routes file for the book routes. In this file create a route that will work with a `POST` request. This route will be the first endpoint and its goal is to be able to use the model and create new entries in our collection. Keep in mind the following:

- Use validation to check every required field comes in the request
- Use url for your route that makes sense with the action. For example use an URL like `/create` and not just `/book`.
- Do not forget to give a response at the end of the route.

## Task 7 - Connect the route with the server

Once you created the route for "posting" new elements to our database connect this route in the `server.js` file. Remember to use `cors` to make sure our server will accepts the request from other programs like imsonia or postman.

Once you are in this step, make sure you can add new elements to the database with the created endpoint. Check this by looking at your database with mongoDB Compass

## Task 8 - Let's create more endpoints

Once the `POST` request is working, the next step is to add more endpoints to manage the database. Add the following endpoints to the server:

- Add a `GET` request for getting all the books saved in the database.
- Add a `GET` request that accepts an id to search for a specific book in the database.
- Add a `GET` request for searching books by author.
- Add a `PUT` request for updating the fields of a specific book according to the id.
- Add a `DELETE` request for deleting a specific book from the database according to the id.

## BONUS

- Add a `GET` request for searching book by a portion of a title that matches a query in the params.
- Add a `GET` request for searching books that were published between a range of years. The years will come as queries like `rangeLow:2000` and `rangeHigh:2020`.



