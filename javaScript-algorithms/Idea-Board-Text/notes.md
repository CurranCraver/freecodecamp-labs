# Project Idea Board

## What I Learned
- I learned how to use classes and their different features, such as creating methods, using the this keyword to refer to specific instanes of objects, and construct new Objects that are modified by a particular class
- I experimented with using multiple classes to modify variables and use methods with parameters to access the previously modified objects
- I can call methods outside the scope of the class on instances that I constructed
- When calling another method *inside* the class, I use the the this keyword to refer the specific instance of the object

## My Solution
- I initialized a project status object with the keys, each with thier own object which possessed a description key and property containing the actual description
- Next I created a project Idea class using a constructor to take two optional parameters and initialized their properties with the provided parameters
- In the projectIdea class I had one method which updated the instance of the status property to the newStatus parameter that was passed into the updateProjectStatus method
- In my Second class ProjectIdeaBoard, I used a constructor to initialize the title property to the provided parameter, and an ideas variable to an empty array which would contain all the instances of the ProjectIdeas
- I used a pin method to push the parameter passed into the method into the instance of the ideas array
- I created an unpin method by using the indexOf method to find the index of the parameter passed into the Unpin method on the instance of the projectIdeaBoard's ideas
- I created a count method which returned the number of ideas in the given projectIdeaBoard
- I used the formatToString method to create a coherent sentence using the instance of the title passed into the ProjectIdeaBoard's contructor, and initialized as a property of the title instance.  Then for each particular instance that was stored in the particular ProjectIdeaBoard's ideas array, I used the keys from the ProjectId on that particular instance of each object to return the objets, title, status, and description