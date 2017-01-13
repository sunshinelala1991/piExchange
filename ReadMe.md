To run this project, you will need to have mongodb and nodejs installed on your computer.

To install nodejs, go to page:
https://nodejs.org/en/download/

To install mongodb, go to:
https://www.mongodb.com/download-center#community

After this, type "npm install" inside the directory of this project,
To install all the required libraries.

Then change the database.js file inside config directory to the mongodb 
path in your local computer. The default address is always "localhost:27017" and in my case, 'test' is the name of the database to be connected to, you may want to change the database name to your own.

	url:'mongodb://localhost:27017/the_name_of_your_own_database'


Then in command line, type:

"node server.js"

(There may be some error messages but it actually does not affect the application)

Go to "http://localhost:8080/".

The languages, frameworks and libraries used are:

NodeJS, ExpressJS, MongoDB, AngularJS, Highcharts, Bootstrap, HTML,CSS,Javascript
