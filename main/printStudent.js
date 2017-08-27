
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
    return `�ɼ���
    ����|��ѧ|����|Ӣ��|���|ƽ����|�ܷ�`;
}

module.exports = printStudent;