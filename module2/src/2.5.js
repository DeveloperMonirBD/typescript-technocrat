"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const result = createArray('Bangladesh');
    console.log(result);
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resGeneric = createArrayWithGeneric('Bangladesh');
    const resGenericObj = createArrayWithGeneric({ id: 222, name: 'Mr. Pashan' });
    // Touple with Generic
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res1 = createArrayWithTuple("Bangladesh", 353543535);
    console.log(res1);
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'Mr. X', email: 'x@gmail.com', devType: 'Next Level Web Developer' });
    const student2 = addCourseToStudent({ name: 'Mr Y', email: 'Y@gmail.com', hasWatch: 'Apple Watch' });
}
