const Intern = require('../lib/Intern.js');

test('this will test for school', () => {
    const intern = new Intern({name: 'John', id: "240", email: 'John@example.com', role: 'Intern', school: 'universitystate'});
    expect(intern.getSchool()).toEqual('universitystate');
});

test("employee gets a name", () => {
    const intern = new Intern({name: 'John', id: "240", email: 'John@example.com', role: 'Intern', school: 'universitystate'});
    expect(intern.getName()).toBe('John');
});

test('employee gets an email', () => {
    const intern = new Intern({name: 'John', id: "240", email: 'John@example.com', role: 'Intern', school: 'universitystate'});
    expect(intern.getEmail()).toBe('John@example.com');('Bjorn');
});

test('employee gets an id', () => {
    const intern = new Intern({name: 'John', id: "240", email: 'John@example.com', role: 'Intern', school: 'universitystate'});
    expect(intern.getId()).toBe('240');
});

test('employee gets an role', () => {
    const intern = new Intern({name: 'John', id: "240", email: 'John@example.com', role: 'Intern', school: 'universitystate'});
    expect(intern.getRole()).toBe('Intern');
});