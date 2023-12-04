const CourseInfo = {
    "id": number,
    "name": string,
  }

  const AssignmentGroup = {
    "id": number,
    "name": string,
    // the ID of the course the assignment group belongs to
    "course_id": number,
    // the percentage weight of the entire assignment group
    "group_weight": number,
    "assignments": [AssignmentInfo],
  }

  