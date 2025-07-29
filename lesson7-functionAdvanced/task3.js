function divide (numerator, denominator) {
    if (denominator === 0 ) {
        throw new Error("Incorrect values")
    }
    return numerator / denominator;
    
}

try {
    const result = divide(10,0);
    console.log(result);
} catch(error) {
    console.log("You can't divide by zero");
} finally{
    console.log("The work is done");
}

try {
    result = divide(k,4);
    console.log(result);
} catch(error) {
        console.log("Incorrect values!")
    } finally{
        console.log("The work is done");
    }