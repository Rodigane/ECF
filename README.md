
# Hypnos hotel group - ECF Studi .

This project was realised during my training at Studi, it's a web app for a hotel group, 
which allows to make online reservations. Each  hotel manager can manage his premise from an 
administration panel.

You can visit the web site at : https://www.glenkurt.online/



## Run Locally

Clone the project

```bash
  git clone https://github.com/Rodigane/ECF.git
```

Go to the project directory

```bash
  cd ECF
```

First you need to handle the client side

```bash
  cd client
```
Install dependencies
```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Then you need to handle the server side

Go back to your project directory

```bash
  cd ..
```

then go on the server directory

```bash
  cd server
```

Install dependencies
```bash
  npm install
```

Start the server

```bash
  npm run start
```

Now you need to handle the database.

Required to have postgres sql install on your computer

You can check this by typing :

```bash
which psql
```

You need first to create an empty database.


Then to import the data base from 'mydb.sql' file.

```bash
psql yourdbname < mydb.sql
```

Now you need to manage the environment variables (watch next section) and you're app is ready 


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
in the server folder

`PORT = 3005`

Depending on your postgresql configuration  you need to fill out those PG info

`PGUSER`

`PGHOST`

`PGPASSWORD`

`PGDATABASE`

`PGPORT`


## Create an admin

You need to be connected to your database

```bash
\connect yourdbname
```

```sql
INSERT INTO users (name, first_name, email, password, role) VALUES ('name', 'firstname', 'mail@mail.com', 'hashed password', 'admin');
```
## Authors

- [@Thibaut Gellenoncourt](https://github.com/Rodigane/ECF)

