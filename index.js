/*
You probably know of the "like" system from Facebook and other social media sites. People are able to "like" blog posts, pictures, or other items. We want to create the text that would be displayed next to such an item.

Write a function called likeFormatter which takes one parameter called listOfLikes, which you can expect will be an array containing the names of people that like an item. Take a look at the examples below to see what your function should be returning.

Example 1:
When given an empty array like [],
your function would return "No one likes this."

Example 2:
When given an array of one like, like ["Peter"],
your function would return "Peter likes this."

Example 3:
When given an array of two likes, like ["Peter", "Alex"],
your function would return "Jacob and Alex like this."

Example 4:
When given an array of three likes, like ["Peter", "Alex", "Riley"],
your function would return "Peter, Alex, and Riley like this."

Example 5:
When given an array of more than 3 likes, like ["Peter", "Alex", "Riley", "Emily"],
your function would return "Peter, Alex, and 2 others like this."

Note: For arrays of 4 or more likes, the number in "and ___ others like this" simply increases.  

*/

// Write your code below: 