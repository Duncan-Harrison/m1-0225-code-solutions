/* exported getStudentNames */
interface Student {
  name: string;
}

function getStudentNames(students: Student[]): unknown[] {
  const studentNames: unknown[] = [];
  for (const obj of students) {
    studentNames.push(obj.name);
  }
  return studentNames;
}
