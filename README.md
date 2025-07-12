# Coddy_challange

Create a function named exploreMuseum that receives totalTime, exhibits, and skipExhibits as its parameters.

The function simulates a visitor's journey through different exhibits in a natural history museum. It should use nested loops to represent moving through different floors and rooms, and use break and continue statements to simulate the visitor's choices and time constraints.

Parameters:

totalTime (number): The total time in minutes the visitor has for the museum visit.
exhibits (array): A 2D array representing the museum layout, where each sub-array is a floor, and each string in the sub-array is an exhibit name.
skipExhibits (array): An array of exhibit names the visitor wants to skip.
The function should return an array containing the names of exhibits visited in the order they were explored.

Follow these rules while implementing the function:

Use nested loops to iterate through the museum floors and exhibits. The outer loop will represent floors, and the inner loop will represent exhibits on each floor.
Each exhibit takes 30 minutes to explore.
Use the continue statement to skip exhibits that are in the skipExhibits array.
Use the break statement to end the visit if the total time is exceeded.
If an exhibit is explored, add its name to the result array and decrease the remaining time by 30 minutes.
Remember to handle edge cases, such as when the total time is insufficient to visit any exhibit or when all exhibits are to be skipped.
