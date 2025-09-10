const person = {
  firstName: "Roma",
  lastName: "Ivanov",
  age: 30,
};
person.email = "example@gmail.com";
delete person.age;
console.log(person);
