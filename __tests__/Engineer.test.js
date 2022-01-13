const { test } = require('jest-circus');
const Engineer = require('../lib/Engineer.js');

test('this will test for github', () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'manager', github: 'john24'});
    expect(employee.getGithub()).toBe('john24');
});