# Element Skipper

## What I Learned
- First time really utilizing callback functions instead of manually iterating through the array
- Passing in parameters into what I think is called closer functions

## My Solution
- Use findIndex() to evaluate when the first case of the parameter function passed in is true in a 
- Use an if statement to ensure that there is a truthy value by knowing that if findIndex() finds a value it will be >= 0
- If the value is found use slice to create a new subarray starting at that index position if not return an empty array