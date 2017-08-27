let getStudent = require('./getStudent');

let getChoose = require('cli-interact').getNumber;
let getMessage = require('cli-interact').question;

const addMessage = "请输入学生信息（格式：姓名，学号，班级，学科：成绩，...），按回车提交：";
const wrongMessage = "请按正确的格式输入（格式：姓名, 学号, 班级, 学科: 成绩, ...）：";
const printMessage = "请输入要打印的学生的学号（格式：学号，学号，...），按回车提交：";
const wrongPrintMessage = "请按正确的格式输入要打印的学生的学号（格式：学号，学号，...），按回车提交：";


function main() {
    let students = [];
    while(true){
        switch(getChoose(showMenu())){
            case 1:
                let student = getStudent(getMessage(addMessage));
                while (student === -1) {
                    student = getMessage(wrongMessage);
                }
                students.push(student);
                addSuccess(student);
                break;
            case 2:
                let getId = getMessage(printMessage);
                printStudent()

            case 3:
                return;
            default:
                break;
        }
    }

}

function showMenu(){
    return `1.添加学生
2.生成成绩单
3.退出
请输入你的选择（1~3）：`;
}

function addSuccess(student) {
    console.log(`\n学生${student.name}的成绩被添加\n`);
}


module.exports = main;