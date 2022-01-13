const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('this will test for Officer Number', () => {
    const manager = new Manager({name: 'John', id: "240", email: 'John@example.com', role: 'manager', office: '3'});
    expect(manager.getOffice()).toBe("3");
});

test("manager gets a name", () => {
    const manager = new Manager({name: 'John', id: "240", email: 'John@example.com', role: 'manager', office: '3'});
    expect(manager.getName()).toBe('John');
});

test('manager gets an email', () => {
    const manager = new Manager({name: 'John', id: "240", email: 'John@example.com', role: 'manager', office: '3'});
    expect(manager.getEmail()).toBe('John@example.com');('Bjorn');
});

test('manager gets an id', () => {
    const manager = new Manager({name: 'John', id: "240", email: 'John@example.com', role: 'manager', office: '3'});
    expect(manager.getId()).toBe('240');
});

test('manager gets an role', () => {
    const manager = new Manager({name: 'John', id: "240", email: 'John@example.com', role: 'manager', office: '3'});
    expect(manager.getRole()).toBe('manager');
});