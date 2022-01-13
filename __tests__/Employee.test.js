const Employee = require('..lib/Employee');
const { test } = require('picomatch');

test("employee gets a name"), () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'manager'});
    expect(employee.getName()).toBe('John');
}

test('employee gets an email'), () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'manager'});
    expect(employee.getEmail()).toBe('John@example.com');('Bjorn');
}

test('employee gets an id'), () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'manager'});
    expect(employee.getId()).toBe('240');
}

test('employee gets an role'), () => {
    const employee = new Employee({name: 'John', id: "240", email: 'John@example.com', role: 'manager'});
    expect(employee.getRole()).toBe('manager');
}