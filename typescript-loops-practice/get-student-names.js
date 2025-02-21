'use strict';
function getStudentNames(students) {
  const studentNames = [];
  for (const obj of students) {
    studentNames.push(obj.name);
  }
  return studentNames;
}
