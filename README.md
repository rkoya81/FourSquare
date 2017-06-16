<h3>Approach</h3>

I have use Angular and ES2015 to develop my FourSquare API integration. I have seperated out the controllers, directives, templates and factories into seperate folders for readability and any to pin point bugs if the application was to be made bigger. These have been exported as modules with Browserify combining them into a single file with RequireJS. 

I have used NPM as the JS package manager and Gulp as my build tool. 

Much of the default styling is from Bootstrap, with some of my own styles and overrides applied accordingly in a seperate CSS file. 


1. Initial commit included set up of the project, with package.json, node modules, basic skeleton of the application. 
2. Added in controllers, factories and additional node module dependencies in order to Browserify my code. Added in basic API call to retrieve the data.
3. Modified files to use ES2015, used the data retrieve to API to create my own JSON object with only relevant information and build a directive to display the information. 
4. Tweaked the Gulp script, added in new controller and factory to have filter options to display, so customer can choose relevant service.
5. Added some styling to make it look nicer, and changed checkboxes to radio buttons as you cannot choose more than one service (API only allows for one to be selected).
6. Added in a new page to allow customer to select the result once it has been searched to go to a map. Allowed the application to go back to search results and use sessionstorage if available to redisplay the results. 
 

<h3>How to run the application</h3>
1. In order to run the application please clone from Github
2. Navigate to the relavant folder for the application in Terminal/command prompt and type - npm i (this will install the dependencies).
3. Once completed type in - gulp (this will run the application and open the page on your default browser)

<h3>To Do</h3>

If I had more time I would have like to have put in unit tests with Jasmine and Karma in order to test the controllers, directives and factories out.
