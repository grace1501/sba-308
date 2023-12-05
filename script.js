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
//     }

// Initial approach: make a function to compile all the submitted assignments and score based on each student ID, store it as an object, then use this info in the main function to calculate the average.
// This approach will need to process the learner submission array to pick out all the student IDs, then filter out the duplicates to find unique IDs, then feed it into the function below.
// I feel like this is not the best approach since the program has to process the learner submission array 

function calculateLearnerScore(learnerID, learnerSubmission) {
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


function getLearnerUniqueID (learnerSubmission) {
    const uniqueSet = new Set();
    for (let i=0; i < learnerSubmission.length; i++) {
        let learnerSubmissionObj = learnerSubmission[i];
        uniqueSet.add(learnerSubmissionObj['learner_id'])
        
    }
    return uniqueSet;
}

console.log(getLearnerUniqueID(LearnerSubmissions));

function getLearnerData(courseInfo, assignmentGroup, learnerSubmission) {
    // throw an error if the course id do not match
    try {
        if (courseInfo['id'] !== assignmentGroup['course_id']) {
            throw new Error('The AssignmentGroup does not belong to this course, please check course ID and try again.');
        }        
    } catch (error) {
        return error; //this will end the program
    }
    

    const result = [];

    return result;
}


// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
