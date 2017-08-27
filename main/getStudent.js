let Student = require('./student');

function getStudent(str) {
    let input = str.split(",");console.log(input)
    if (checkMessage(input)) {
        let student = arrayStudent(input);
        return student;
    }
    return -1;
}
function checkMessage(input) {
    let judgeOne = input.length > 3;console.log(input.length)
    let judgeTwo = true;
    let courses = input.splice(3, input.length);console.log(courses)
    for (let course of courses) {
        if (course.split(":").length !== 2) {
            judgeTwo = false;
            break;
        }
    }
    if( judgeOne && judgeTwo){
        return true;
    }
    return false;
}

function arrayStudent(input) {
    let [name,id,clazz] = input.splice(0, 4);
    let courses = getCourses(input);
    return new Student(name,id,clazz,courses);
}
function getCourses(input) {
    let courses = [];
    for (let item of input) {
        let course = {subject: item.split(":")[0], score: parseInt(item.split(":")[1])};
        courses.push(course);
    }
    return courses;
}


module.exports = getStudent;
