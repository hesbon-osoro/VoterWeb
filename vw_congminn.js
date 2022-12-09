"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4
  
     
   Filename: vw_congminn.js 
   
   Variables:
   raceTitle
      Contains the title to be placed in the election results page
   race
      An array of race names
   candidate
      A multidimensional array showing the candidate names for each
      of the races
   party
      A multidimensional array showing the party afflilations for
      each candidate from each race
   votes
      A multidimensional array showing the votes for each 
      candidate from each race
     
*/

var raceTitle = "Minnesota Congressional Elections";

var race = [
  "District 1",
  "District 2",
  "District 3",
  "District 4",
  "District 5",
  "District 6",
  "District 7",
  "District 8",
];

var candidate = [
  ["Sanchez, Onita", "Troutman, Rachel", "Whitman, Gary"],
  ["Berk, Thomas", "Chiang, Michael", "Larson, Alicia"],
  ["Thomas, Howard", "Olsen, Fred", "Shapiro, Douglas"],
  ["Sweet, Alice", "Grovener, Stewart", "Reardin, Samuel"],
  ["Aitkens, Mary", "Mundleberg, Linda", "Ketrick, Rachel"],
  ["Nielsen, Kevin", "Francis, Trevor", "Inglessohn, Ray"],
  ["Pulaski, Stewart", "Biersen, Nancy", "Pope, Richard"],
  ["Venn, Michael", "Ramirez, Juan", "Zander, Audry"],
];

var party = [
  ["D", "R", "I"],
  ["D", "R", "I"],
  ["D", "R", "I"],
  ["D", "R", "I"],
  ["D", "R", "I"],
  ["D", "R", "I"],
  ["D", "R", "I"],
  ["D", "R", "I"],
];

var votes = [
  [193211, 142164, 22486],
  [164338, 193587, 42168],
  [159937, 222335, 23217],
  [216685, 123703, 21135],
  [262102, 100744, 27255],
  [174944, 179240, 11145],
  [197791, 114151, 15296],
  [191976, 161831, 4012],
];
