// ৩. Template Literals

const name = 'salauddin';
console.log(`Hello ${name}!`);

const age = 22;

console.log(`My name is ${name} and I am ${age} years old.`)


const a = 10;

const b = 5;
console.log(`The sum is ${a + b}`)


// ✅ ৩. Function এর ভিতরে ব্যবহার

function greet(user) {
    return `Welcome, ${user}!`;
}

console.log(greet('Hasan'));

//  . Object এর ডাটা দেখানো

const student = {
    name : 'Salauddin',
    dept : 'CST',
    semester : '5th'
};

console.log(`Name:${student.name}, Department: ${student.dept}, Semester: ${student.semester}`);