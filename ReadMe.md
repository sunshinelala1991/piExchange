To run this project, you will need to have mongodb and nodejs installed on your computer.

To install nodejs, go to page:
https://nodejs.org/en/download/

To install mongodb, go to:
https://www.mongodb.com/download-center#community

Then change the database.js file inside config directory to the mongodb 
path in your local computer. The default address is always localhost:27017 and in my case, 'test' is the name of the database to be connected to, you may want to change the database name to your own.

	url:'mongodb://localhost:27017/test'


Then in command line, type:

node server.js 


and go to "http://localhost:8080/" and you can see the page


