let Student = require('./student');

function getStudent(str) {
    let input = str.split(",");
    if (checkMessage(input)) {
        let student = arrayStudent(input);
        return student;
    }
    return -1;
}
function checkMessage(input) {
    let array = input;
    let judgeOne = array.length > 3;
    let judgeTwo = true;
    let courses = array.slice(3, array.length);
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
    let [name,id,clazz] = input.splice(0, 3);
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
