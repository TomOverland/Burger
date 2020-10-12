# Burger Application

[Deployed on Heroku](https://tranquil-citadel-07940.herokuapp.com/).

![Screenshot of Application](https://github.com/TomOverland/Burger/blob/main/public/images/Demo.JPG)

## Description:

This application demonstrates a simple full stack development CRUD application with front end implemented with an HTML/CSS and Bootstrap 4.  The backend is implemented with Node.js and Express. The database was constructed with MySQL and implemented to Heroku with JawsDB. The HTML templating was completed with Handlebars.

The app allows the user to enter any burger name to add it to the menu. This enters the burger's information into the MySQL database. When a burger is created, it is added to the available burger menu, and it's default "devoured" status is set to false. When the user clicks the "Devour" button to eat a burger, then it changes the saved "devoured" boolen to false in the database, and the burger is moved to the "devoured" menu. After the burger has been "devoured," the user can delete the burger from the database.

## Installation:

#### Step 1 - Make sure you have a code editor, MySQL, Node.js and Node Package Manager installed

The code editor I used was Visual Studio Code. It can be found [here](https://code.visualstudio.com/download).  
Node.js and NPM download can be found [here](https://nodejs.org/en/).  
MySQL workbench can be found [here](https://dev.mysql.com/downloads/workbench/).

#### Step 2 - Clone my repository

In your command terminal, type the following to clone this repository: "git clone https://github.com/TomOverland/Burger.git"

#### Step 3 - Move to the correct directory

Type the following in your command line: "cd Burger"

#### Step 4 - Install NPM dependencies

By typing "npm install -i" you will download all of the dependencies required for this application.

#### Step 5 - Execute the MySQL code

Insert the MySQL schema and seeds into your MySQL, or use mysql npm package to execute the code in your command line.  
You will have to change the user name and password in connection.js to your MySQL login info.

#### Step 6 - Start the application on your local server

Type the following in your command line: "node server.js" and then go to the url "localhost:3000" in your internet browser.

## Technology used
* Node.js
* Heroku-cli NPM Package
* Handlebars
* Express NPM Package
* Express-Handlebars NPM Package
* HTML 5
* CSS 3
* Bootstrap 4
* JavaScript
* jQuery
* Path NPM Package
* Method-Override NPM Package
* MySQL NPM Package
* Util NPM Package

## Built With
* VS Code - https://code.visualstudio.com/
* MySQL Workbench - https://www.mysql.com/

## License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

For more information about the license, click the link below:

- [License](https://opensource.org/licenses/)

## Contributing:

Everyone is welcome to contribute. Create a pull request with your changes and I will review it. Currently, I only have instructions written in English. Translations to other languages would be appreciated!

## Tests:

This application was not developed with any tests.

## Demonstration

- [YouTube](https://youtu.be/V8LyyhFEOaQ)

## Questions:

For more information about the application, please reach out to me via my [GitHub Profile](https://github.com/TomOverland).

For any other questions, please send me an email at: thomas.c.overland@gmail.com.
