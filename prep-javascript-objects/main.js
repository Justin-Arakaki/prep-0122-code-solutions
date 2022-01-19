const person = {
  firstName: 'Bob',
  lastName: 'Builder',
  hobby: 'Carpentry'
};

console.log(person);
console.log('The person\'s name is:', person.firstName);

person.job = 'General Contractor';
person.previousJob = 'Career Technopath';

console.log('The person\'s current job is:', person.job);
console.log('The person\'s previous job is:', person.previousJob);
console.log('The compete person object:', person);
