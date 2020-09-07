## Deere Project 4 Starter Code

This app serves JSON data only. There are no views. You'll build a React app to communicate with this Express app. Since there are no views, you'll want to use Postman to test that your endpoints are working before writing the React code.

Note - this app has no views and each endpoint is prefaced with `/api`.

   ```js
   // server.js
   app.use("/api/auth", require("./controllers/authController.js"));
   app.use("/api/users", require("./controllers/usersController.js"));
   ```



## Set Up

1. Fork and clone this repo
1. `cd` into the folder and run `npm install`
1. In the root of your app, `touch .env` and add:

   ```bash
   PORT=3000
   JWT_SECRET=pancakes
   ```

1. Check out your `config/config.json` file. You'll need to create a database called `project4_development` in pgAdmin or from any directory in the Terminal:

   ```
   $ createdb project4_development
   ```
2. Sequelize is included in the app. You have a `User` model. Run `db:migrate` to create the `Users` table in your database.

3. This app contains some Sequelize magic in `server.js` that will automatically create the tables in your database by syncing with your models and migrations. This will happen when you start your `nodemon` server.

   ```js
   // server.js
   const db = require("./models");
   db.sequelize.sync();
   ```

4. Run `nodemon`. 
5. Open Postman to confirm that your app is working on `localhost:3000/`.

![](https://i.imgur.com/VEkRBk9.png)

<br>

## Routes

You have the following routes available.

#### `server.js`

- GET `localhost:3000/`

#### `controllers/authController.js`

- POST `localhost:3000/api/auth/signup`
- POST `localhost:3000/api/auth/login`
- GET `localhost:3000/api/auth/logout`

#### `controllers/usersController.js`

- GET `localhost:3000/api/users/profile/:id`

<br>

## Additional Resources

- [Fruit App Solution](https://git.generalassemb.ly/jdr-0622/fruit-app-in-class)
- [Pokemon Express Solution](https://git.generalassemb.ly/jdr-0622/pokemon-express-sequelize6)
- [Google Routes Spreadsheet](https://docs.google.com/spreadsheets/d/14-LHKXLtEkp_vKEz3qSKjREnrmSyzQ9fimTlmrPsZsQ/edit#gid=0)
- [JSON Web Tokens](https://jwt.io/)
