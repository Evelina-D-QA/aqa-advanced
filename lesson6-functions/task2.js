const isAdult = age => {
    if (age >= 18) {
        console.log("You are adult");
    } else {
        console.log("You are not an adult");
    }
}
isAdult(15);
isAdult(25);