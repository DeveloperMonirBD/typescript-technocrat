"use strict";
{
    // constraints => Obosooi thakte hobe.
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 4354, name: 'Mr. X', email: 'x@gmail.com', devType: 'Next Level Web Developer' });
    const student2 = addCourseToStudent({ id: 5363, name: 'Mr Y', email: 'Y@gmail.com', hasWatch: 'Apple Watch' });
    const student3 = addCourseToStudent({ id: 758, name: 'Mr.S', email: 's@gmail.com', emni: 'emni' });
    //
}
