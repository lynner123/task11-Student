
function printStudent(students,getId) {
    let input = getId.split(",");
    let ids = checkId(students, input);
    if(ids.length === 0){
        return -1;
    }

    let singleStudent = printSingle(students, ids);
    let allScores = printSum(students);

    return singleStudent + allScores;
}

function printSum(students) {
    let totalScores = students.reduce((sum, student) => { return sum + student.sum}, 0);
    let averageSum =  totalScores / students.length;

    let result = [];
    for (let student of students) {
        result.push(student.sum);
    }
    let midSum = result.length%2 === 0 ? (result[result.length/2]+result[result.length/2-1])/2 :result[Math.floor(result.length/2)];

    return `
全班总分平均数：${averageSum}
全班总分中位数：${midSum}`;
}

function printSingle(students, ids) {
    let menu = printMenu();console.log(students);
    students = filterStudent(students, ids);console.log(students);
    let scores = printScores(students);console.log(scores);
    return  menu + `
========================
${scores}
========================`;
}

function printScores(students) {
    let result = [];console.log(students);
    students.map(student => {
        let scores = [];
        student.courses.map(course => {
            scores.push(course.score);
        });
        result.push(`${student.name}|${scores.join("|")}|${student.average}|${student.sum}`);
    });console.log(result);
    return result.join("\n");
}

function filterStudent(students, ids) {
    return students.filter(student => ids.includes(student.id));
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