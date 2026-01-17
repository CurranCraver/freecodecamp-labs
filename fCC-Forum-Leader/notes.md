# fcc Forum Leader

## What I learned
- I learned about <tr> table row tags, and <td> tags as a way to store data in html and storing them dynamically in JavaScript by passing in values from objects within an array
- I worked with new Date() constructor to return the last bump that the forum was updated by subtracting a new Date() from a previous timestamp which returns the difference in dates in milliseconds
- I used math opertations to determine the value of difference in minutes, hours, and days paired with if/else logic to return an appropriate time-passed metric
- I used the in keyword within an if statement to determine whether a certain property exists on an object
- I used an avatars function to map through every post and find the post that matched the specific userId 
- I learned about the .startWith() method which checks if a string starts with certain characters to determine if a url had a relative path, and add http if so
- I used destructuring in my showLatestPosts function to sift through the objects stored within the array to capture the data that would then be used to create multiple table rows <tr> and within those table rows store the data in individual data cells using template literals to create <td>'s.
- I added the innter HTML to the postsContainer to dynamically create of of the posts
- I used an async function to fetch data, parse the data, and catch errors

## My Solution
- I used the new Date() constructor and the new Date() with a timeStamp parameter to get the two different times in milliseconds then subtracted them using Math.floor().  To get the minutes, hours, and days I divides the difference in milleseconds by 1000 for the milliseconds * the # of seconds (60) minutes (60) and hours (24), Then return their values in an if statement that properly matched the time best.
- I function for the viewcount was added incase the amount of views was >= to 1000 would return a k suffix.
- I used the in operator in an if statment to check if an object had a certain property to create two difference anchor tags, one being a specific category if the id was found, and the other being a general category
- To check links first I used .replace to swap the {size} instance than if the link was a relative path I would add a URL to the prefix
- To get the data on the latest post I used object destructuring for each object in the topics array and used the objects values to create dynamic html using table data and plugging in previous function created to modify values such as views.  Instead of using forEach to iterate through the topics array, I used map in order to modify the array and return the value of all of the <td> html inside the <tr>
- Finally I used an asynch function to try fetching the lastestForum variable and used the await keyword to ensure that JavaScript waits to parse an actual value, which I set to data()
