This project was created with React
To start the project, write on the terminal: npm start
Structure:
There are 2 main components on this project:
    Item - It's a todo task, each item has a checkbox to interact with its completed state, it was created with its own css file but there wasn't enough time to complete this part
    List - This list contains the items, there are two list to show:  1 (for uncompleted) and 2 (for completed)
Then App.js calls the list item and handles the event of adding a new task and removing it, it also calls App.css for the styles and the interaction between tasks in progress and one is done in this file.

Process:

To create the structure of this project, there was an analysis of all the interactions the user could do, mainly add tasks and remove them. If we are only working with a list of tasks then it would be better to have a list component of its own and since there will be many tasks to be handled, this can have its own component as well. So the list will display the tasks and the App file will display the list, this makes it easier to understand what's happening with each component and also work with the styles.