# Build A Drum Machine

## What I learned
- I learned how to access the value properties of id using .notation lookup in JavaScript
- I also worked with the e.key property which let me see which key was pressed from the document which I was listening to for each keydown event
- I learned how to use event listeners on my audio tag, I used 'ended' to change the class of the div that I was using for each pad button 
- I also familiarized myself with working with optional parameters which I could pass into my function in order to either pass the audio element to be played or change the style of the corresponding audio's .parentElement

## My Solution
- I started by assigning useful variables at the top of my JS doc using querySelector all to get the nodeList of the drum-pad divs
- With the nodeList I used the for Each method to iterate through each individual pad with an event listener listenening to each click.  Inside of this event listener I called on the individual button's audio child element by using a querySelector from the btn: btn.querySelector('audio')
- Inside the click listener I passed in my playSound function which I gave 2 Parameters: the first was to capture the audio which I would play, and the second captured the pad btn so I could modify the style while the audio was playing
- For my playSound function, I initialized the audio property by using the .currentTime method and assinging it a value of 0, then i used the .play() method on the audio parameter
- For my second parameter I used classList.add to pass in an active class which I created in my css using .drum-pad.active.  Two class calls with no spaces because this calling requires the element to have both classes.  If there is a space in the CSS selector that means that I am looking for a descendant of the element, and a comma means I am looking to modify multiple seperate selectors, and lastly the + means I am trying to target the adjacent sibling
-Once I passed this class to the drumpad button to modify it with my CSS I only wanted the active class to remain whilst the audio was playing so I used an event listener to listen for the 'ended' event on my audio element.  Inside of the event listener, I used classList.remove to delete the 'active' class one the audio clip ended.
-The same goes for my display <p> tag.  I first got the string of the id of the corresponding audio tag's pad button, which I already had passed in because I wanted to manipulate the style.  The pad button's id described the audio that was being played so I got this property by using padbutton.id property and I assigned this property equal to the p element's text content.  In order to remove this after the element was done playing I set the display's text content = '' inside the ended event listener