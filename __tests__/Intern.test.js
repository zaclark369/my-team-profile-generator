const Intern = require('../lib/Intern.js');

test('this will test for school', () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'manager', school: 'universitystate'});
    expect(employee.getSchool()).toEqual('universitystate');
});