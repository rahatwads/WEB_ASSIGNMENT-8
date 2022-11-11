# WEB_ASSIGNMENT-8


- Author: Shivani Pravin Rahatwad
- NUID: 002734520
- Email: rahatwad.s@northeastern.edu

Assignment 6 based on user authentication, CRUD operations involving storing password to MongoDB using encryption.

ENDPOINT

POST - /user/create \
Desc: To create a new user and store it to the database with salt/hashed password using brcypt and validations for password creation. Validation errors for password. \
Parameters: a. email 
            b. password + confirm password 

 POST - /user/edit \
Desc: To update user's email or password on logging in. Validations for correct username or password. \
Parameters: a. new_email
            b. new_password + confirm new_password

 DELETE - /user/delete \
Desc: Delete the user by using Delete request.

GET - /user/getAll \
Desc: Get all the users email addresses and passwords (encrypted) from the database.

TECHNOLOGIES

MongoDB
 Express
 NodeJS

Commonly used packages:
1. bcrypt
2. mongoose
3. express
4. nodemon

INSTALLATION:


Running the server
- Clone the repository on your local machine
- Install the packages by running the command *npm install* (at the root of the directory)
- Run the app by running the command *npm start*

* Use postman to test the API endpoints
* Install MongoDB community edition server and create a local database
