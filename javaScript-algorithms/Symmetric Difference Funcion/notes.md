# Symmetric Difference Function

## What I learned
- I learned how to use a high order function inside of another high order function (this probably is not optimal whatsoever)
- I learned how to workaround this like if "cat" is in "catnip" which broke my filter
- I cemented my knowledge of .includes()

## My Solution
- My initial filter wasn't working because when I checked .includes it worked for most numbers, but not all strings because of words like "cat" in "catnip" so I knew I needed to find a workaround.
- I tried using for loops and .some but those were just complicating things too much making my code unreadable and tangled
- Eventually I decided to try findIndex inside of .filter and only return the values where findIndex didn't find a match