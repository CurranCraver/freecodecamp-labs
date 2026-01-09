# Bookmark Manager App

## What I learned
-I learned how to work with local storage using JSON to *get* and *fetch* data from my array.
-I learned how to work inside of the application section of devtools and use localStorage
-I put several different functions together that manipulated either the array, the DOM, or local storage dynamically based on the input.values that the user passes in
-I practiced querying for attributes using template literal strings, []'s, and :checked property for my radio buttons
-I learned how to update local storage by re-Setting the localStorage.setItem using JSON

## My Solution
- In order to initialize the the local storage even if no data has been entered yet, I used an OR operator as a fallback to create an empty array, and assigned the result of the function to the bookmarksArray Variable
- For my updateBookmarks function I first used an if statement to check for blank inputs the user may have entered, and pass an alert if the input value is blank
- I set up the bookmark object using the .value of the input fields and the selector's value for the category
- I then used the findIndex method on my bookMarks array to check if the bookmark has already existed.  If findIndex returned -1 I pushed the new bookmark onto the array, else I used the index to update the previously existing bookmark in the array
- Lastly, I updated the localStorage of the array using .setItem and reset the object's values by assigning them to empty strings
- Because I have been learning the DRY principles, I created a function that converts the first letting in a string to caps with an arrow function
- Created some event listeners to the corresponding buttons, where I called the displayOrCloseForm() function with toggled the hidden class
- I did the same thing for the displayOrHideCategory function except with different variables
- At the top of my displayBookmarks function I initialized the display div's innerHTML to an empty string in order to reset any previous values the innerHTML may have possessed, which prevented bookmarks from being duplicated
- I also used the filter method on my bookmarksArray to filter only the bookmarks from the selected category to be displayed as the div's innerHTML
- I checked if there were any bookmark objects present in the selected category by using an if statement to check the categoryBooks.length, if the length was 0 which is falsy, I set the display div's innerHTML to <p>No Bookmarks Found</p>.  
- On the other hand, if the bookmarkArray did contain bookmarks of the selected category I used mutliple different html tags passed into the HTML with template literals to pass value's of the bookmarks to show up in the DOM
- Firstly I initialized the radioId variable to the bookmark.name and Date.now() which is individualized because it return the exact amount of milliseconds that have passed in UTC time since Jan 1, 1970.
- The innerHTML of each corresponding bookmark contained a div, a radio-button so only one bookmark could be selected at a time with the id of radioId, value of the bookmarkName and the name of the bookmark category to prevent any more than one button to be selected in the div.  I also used a label which allowed my radiobutton's to be more easily accessible and through an achor tag inside the label with the href pointing to the bookmark.url.
- The viewCategoryBtn and closeListBtn simply used the display function to toggle the hidden properties,while the deleteBookmarkBtn had more utility
- I declared a radioButton variable as the button I wanted to delete and queried for the selected button by using the div, the corresponding category value, and the :checked property in my querySelector
- If the deleteButton was clicked yet no radioButton variable existed I passed in an alert message.
- However if there was a radio button to delete I got the radioButton's bookmark name by using the .split method and extracted just the name portion of the id, negating the Date.now.  I then used this name variable with findIndex to look for the corresponding name in the bookmarksArray
- If the value was found I used the indexed location with splice to delelte solely that bookmark object, then updated localStorage by setting the new spliced bookmarksArray.
-Lastly I called the displayCategoryBookmarks function to update the DOM so the div no longer visually existed, completely removing the bookmark on all three levels. 