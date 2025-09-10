const car1 = {
  brand: "Mercedes",
  model: "220W",
  year: 2020,
};
const car2 = {
  brand: "BMW",
  model: "X5",
  owner: "Evelina",
};
const car3 = { ...car1, ...car2 };

console.log(car3);
