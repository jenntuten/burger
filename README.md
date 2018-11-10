# Eat-Da-Burger!
Eat-Da-Burger! is an app that lets users input the names of burgers they want to eat.\
\
This app follows the MVC design pattern, using Node and MySQL to query and route data, and Handlebars to generate HTML. There are three CRUD (Create, Read, Update, and Delete) functions used in interacting with the MySQL database:

* **selectAll** (GET request): reads entries from the MySQL database and displays them to the DOM using Handlebars.
* **createOne** (POST request): adds a new burger to the database (the "Devour!" section in this app).
* **updateOne** (PUT request): switches the status of the burger ('devoured', which has a boolean value in MySQL).
## Demo
Users will enter their burger of choice in the "Add a Burger" section. This burger will then be displayed in the "Devour!" section on the left side of the page, along with any burgers that have not been eaten.\
\
Once the user has clicked "EAT!" that item will move to the right side of the screen. The user can also click the "Order Again" button in the "Burgers Already Eaten" section.\
\
Heroku link: https://pure-scrubland-37201.herokuapp.com/
