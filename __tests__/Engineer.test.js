const { test } = require('jest-circus');
const Engineer = require('../lib/Engineer.js');

test('this will test for github', () => {
    const engineer = new Engineer({name: 'John', id: "240", email: 'John@example.com', role: 'engineer', github: 'john24'});
    expect(engineer.getGithub()).toBe('john24');
});

test("engineer gets a name", () => {
    const engineer = new Engineer({name: 'John', id: "240", email: 'John@example.com', role: 'engineer', github: 'john24'});
    expect(engineer.getName()).toBe('John');
});

test('engineer gets an email', () => {
    const engineer = new Engineer({name: 'John', id: "240", email: 'John@example.com', role: 'engineer', github: 'john24'});
    expect(engineer.getEmail()).toBe('John@example.com');('Bjorn');
});

test('engineer gets an id', () => {
    const engineer = new Engineer({name: 'John', id: "240", email: 'John@example.com', role: 'engineer', github: 'john24'});
    expect(engineer.getId()).toBe('240');
});

test('engineer gets an role', () => {
    const engineer = new Engineer({name: 'John', id: "240", email: 'John@example.com', role: 'engineer', github: 'john24'});
    expect(engineer.getRole()).toBe('engineer');
});