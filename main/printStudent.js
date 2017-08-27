
function printStudent(students,getId) {
    let input = getId.split(",");
    let ids = checkId(students, input);
    if(ids.length === 0){
        return -1;
    }

    let menu = printMenu();


}

function checkId(students, input) {
    let result = [];
    for (let student of students) {
        if (input.includes(student.id)) {
            result.push(student.id);
        }
    }
    return result;
}

function printMenu() {
    return `成绩单
    姓名|数学|语文|英语|编程|平均分|总分`;
}

module.exports = printStudent;