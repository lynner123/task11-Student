'use strict';
const main = require('..main/main.js');

describe('student report card ', function () {

    it('input choose 1',function () {
        let input = 1;
        let result = main(input);
        let expected = '请输入学生信息（格式：姓名，学号，班级，学科：成绩，...），按回车提交：';
        expect(result).toEqual(expected);
    });


});
