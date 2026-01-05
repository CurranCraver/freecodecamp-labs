# Markdown to HTML Converter

## What I Learned
- Funnily enough, I learned alot of new markdown feature such as how to use blockquotes, what different #'s converted to and how to **Bold** my text in *markdown*!
- I also learned how to take an input value with an Event Listener to make changes to other textareas
- I worked with many different **regex** and learned about the non-greedy ? operator with works with all quantifiers and makes it's match as little as possible while still allowing the overall pattern to succeed.
- I used backreferences to optimize my regular expressions that took multiple possible soltions

## My Solution 
- I used an eventListener to capture each input and I created a variable to capture to value of the *markdown* input
- I set the htmlOutput's text content = the replacement of the the new inputText variable with the convertMarkdown() function called in the replacement.  I used textContent because I didn't want to convert the actual htm for the Raw HTML input box, that was for the HTML preview
- That why, for the preview, I used innerHTML = the rawHTML's .textContent.
- In my convertMarkdown() function, I started out by assigning a new variable to the input.value to get the basic input.
- I then created all the regex placements = to the new rawOutput variable to I could stack the replacement ontop of each other instead of redefining the rawOutput each time.  I also learned that order did not matter when creating the replacements because each replacement has one exact regex match
- Creating the regex expressions came down to learning about how different properties interact with one another.  For example the . magic everything operator worked perfectly with the multi-line flag when trying to match Markdown that strictly needed to start at a newline or only after blank space.  This worked perfectly with my header #'s and blockquotes because I would have had to use multiple OR operators which was a much messier verion
- I also learned I had to use the non-greedy ? operator after my quatifiers so that the capture group didn't continue to consume excess characters but rather stopped when the match was found but still solved the overall *pattern* of the regex.  This was especially key for the **bold** and _italic_ operations, because this allowed for multiple uses of the **operaters** **together** without **this\*\*happening\*\***    
- I still don't how why the non-greedy operator doesn't work on the last output but I will figure it out!