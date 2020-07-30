## Deere Project 2 Starter Code

## Set Up

1. Fork and clone
1. `cd` into the folder and run `npm install`
1. In the root of your app, `touch .env` and add `PORT=3000`
1. Check out your `config/config.json` file. You'll need to create a database called `project2_development`
1. Sequelize is included in the app. You have a `User` model. Run `db:migrate` to create the `Users` table in your database.
1. Run `nodemon` and go to the Homepage: `localhost:3000/`

![](https://i.imgur.com/943BDFS.png)

<br>

## Routes

You have the following routes available.

- `localhost:3000/auth/signup`
- `localhost:3000/auth/login`
