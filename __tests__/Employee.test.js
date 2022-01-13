const Employee = require('../lib/Employee.js');
// const { test } = require('picomatch');

test("employee gets a name", () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'employee'});
    expect(employee.getName()).toBe('John');
});

test('employee gets an email', () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'employee'});
    expect(employee.getEmail()).toBe('John@example.com');('Bjorn');
});

test('employee gets an id', () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'employee'});
    expect(employee.getId()).toBe('240');
});

test('employee gets an role', () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'employee'});
    expect(employee.getRole()).toBe('employee');
});