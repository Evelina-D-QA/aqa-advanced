const users = [
  { name: "Anna", email: "anna@gmail.com", age: 31, phone: 1234567 },
  { name: "Alex", email: "alex@gmail.com", age: 28, phone: 9987654 },
  { name: "Olga", email: "olga@gmail.com", age: 35, phone: 5467932 },
];
for (const { name, email, age, phone } of users) {
  console.log(
    `Name is ${name} email is ${email} age is ${age} phone is ${phone}`,
  );
}
