
class Student{
    constructor(name,id,clazz,courses){
        this.name = name;
        this.id = id;
        this.clazz = clazz;
        this.courses = courses;
        this.sum = sumScore(courses);
        this.average = averageScore(this.sum,courses);
    }
}

function sumScore(courses) {
    return courses.reduce((sum, course) => {
        return sum + course.score;
    }, 0)
}
function averageScore(sum,courses) {
    return sum/courses.length ;
}

module.exports = Student;
