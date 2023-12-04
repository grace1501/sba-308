// EXAMPLE from Sandbox
// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

  // The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
    {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
    },
    {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
    },
    {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
    }
    ]
};

  // The provided learner submission data.
const LearnerSubmissions = [
    {
    learner_id: 125,
    assignment_id: 1,
    submission: {
        submitted_at: "2023-01-25",
        score: 47
        }
    },
    {
    learner_id: 125,
    assignment_id: 2,
    submission: {
        submitted_at: "2023-02-12",
        score: 150
        }
    },
    {
    learner_id: 125,
    assignment_id: 3,
    submission: {
        submitted_at: "2023-01-25",
        score: 400
        }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
    ];

//   the output of your program is an array of objects  
//   const result = {
//     "id": number,
//     "avg": number,
//     "assignment_id": number,
// }


function calculateLearnerScore(learnerID, assignmentInfo, learnerSubmission) {
    // make a learnerData object to store all assignments submitted by one learner
    const learnerData = {
        'id': learnerID,
    };
     // read though the learnerSubmission array to record all the submissions under each learner id
    for (let i=0; i<learnerSubmission.length; i++){
        let learnerSubmissionObj = learnerSubmission[i];
        
        if (learnerSubmissionObj['learner_id'] == learnerID) {
            let assignmentId = learnerSubmissionObj['assignment_id'];
            learnerData[assignmentId] = learnerSubmissionObj['submission']['score'];
        }
    }
    return learnerData;
}

console.log(calculateLearnerScore(132, AssignmentGroup['assignments'], LearnerSubmissions));



function getLearnerData(courseInfo, assignmentGroup, learnerSubmission) {
    try {
        if (courseInfo['id'] !== assignmentGroup['course_id']) {
            throw new Error('The AssignmentGroup does not belong to this course');
        }        
    } catch (error) {
        return error;
    }
    
    const result = [];

    return result;
}


const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
