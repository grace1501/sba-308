# sba-308
SBA 308: JavaScript Fundamentals

I tried 2 different ways to approach this problems, first approach did not return the correct result, the second one did.

Summary of the second approach:
<br>
Helper functions: 

function getDate(date): get the date base on string date, if no argument then return today date

function getPointsPossible(id, assignmentArr): get the points possible based on assignment id
       
function getDueTime(id, assignmentArr): get the time due based on assignment id

function getLearnerUniqueID(learnerSubmission): get learner unique id (a set)

function getAssignmentData(assignmentGroup, learnerSubmission): Go through each learnerSubmission object, check assignmentGroup to add properties of points possible and see if the assignment is yet due, on time or late. Store this is an array of objects. Apply calculation later.

function calculateAverage (learnerID, learnerSubmissionObjArr): Calculate the percentage and average based on each student ID

# Main function
function getLearnerData2(courseInfo, assignmentGroup, learnerSubmission)

