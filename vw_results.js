"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Hesbon Osoro
   Date: 12/10/22  
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

/* Variables */

var reportHTML = "<h1>" + raceTitle + "</h1>";
var totalVotes = 0;
votes.forEach(calcSum);

/* For loop */

for (var i = 0; i < race.length; i++) {
  var totalVotes = 0;
  votes[i].forEach(function (value) {
    calcSum(value);
  });
  reportHTML +=
    "<table>" +
    "<caption>" +
    race[i] +
    "</caption>" +
    "<tr><th>" +
    candidateRows(i, totalVotes) +
    "</th><th>" +
    totalVotes +
    "</th></tr>";
  reportHTML += "</table>";
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
  totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
  return (100 * value) / sum;
}

/* Bar Chart Function */
function createBar(partyType, percent) {
  var barHTML = "";
  switch (partyType) {
    case "D":
      barHTML = "<td class='dem'></td>";
      break;
    case "R":
      barHTML = "<td class='rep'></td>";
      break;
    case "I":
      barHTML = "<td class='ind'></td>";
      break;
  }
  return barHTML;
}

/* Bar Chart Creation */
function candidateRows(raceNum, totalVotes) {
  var rowHTML = "";
  for (var j = 0; j <= 2; j++) {
    var candidateName = candidate[raceNum][j];
    var candidateParty = party[raceNum][j];
    var candidateVotes = votes[raceNum][j];
    var candidatePercent = calcPercent(candidateVotes, totalVotes);
    rowHTML +=
      "<tr><td>" +
      candidateName +
      " (" +
      candidateParty +
      ") </td><td>" +
      candidateVotes.toLocaleString() +
      "( " +
      candidatePercent.toFixed(1) +
      "%)</td>";
    for (var k = 0; k < candidatePercent; k++) {
      rowHTML += createBar(candidateParty);
    }
    rowHTML += "</tr>";
  }
  return rowHTML;
}

document.querySelector("section").innerHTML = reportHTML;
