/**
 *
 * For the given students array below, compute the average grade of the students who took cs303 course.
 * @type {[{courses: string[], grade: number, name: string},
 * {courses: string[], grade: number, name: string},
 * {courses: string[], grade: number, name: string},
 * {courses: string[], grade: number, name: string},
 * {courses: string[], grade: number, name: string}]}
 */


const students = [
    { name: 'Quincy', grade: 96, courses:['cs301', 'cs303']},
    { name: 'Jason', grade: 84, courses:['cs201', 'cs203']},
    { name: 'Alexis', grade: 100, courses:['cs105', 'cs211'] },
    { name: 'Sam', grade: 65, courses:['cs445', 'cs303'] },
    { name: 'Katie', grade: 90, courses:['cs303', 'cs477'] }
];

const aveGrade = students.filter(student=>student.courses.includes('cs303'))
    .reduce((acc, curr, index, array)=>acc+curr.grade/array.length);

console.log("aveGrade : ", aveGrade);