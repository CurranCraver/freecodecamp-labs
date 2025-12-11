# Build A Pyramid Generator

## What I Learned
- Using template literals with \n to generate new lines for my pyramid
- I was hardstuck on the idea that the pyramid had to have a nested for loop, which kept me stuck for hours.  I realized that I need to not only question all my beliefs when the code isn't working, I also need to try to simplify from the start.
- When starting a project from here, I will think "What is the simplest way I can solve this"
- Got really comfortable with iteration math and using different equations to build results that I want
- Using if else statement to make sure the function started and ended with `\n`

## My Solution
- It took me a while but i realized that I could solve for both symbols and spaces on one loop instead of going through a nested for loop, which was breaking my repeat operator
- Once I had one pyramid solved inverting it wasn't too much of a challenge as I already knew the concept behind the math
- I luckily figured out the if else statement to ensure the newline operator was on the front at back, to do this I just said that if i was zero (so the first line) add an extra newline to the front else just do it at the end only.