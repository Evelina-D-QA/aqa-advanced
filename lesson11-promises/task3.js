async function todo() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if(!response.ok) {
        throw new Error(`Request failed`);
    }
    const responseJson = await response.json();
    return responseJson
    } catch (error) {
    console.error(`Error:`, error);
    throw error;
    }
}

async function result () {
    console.log(await todo());
}
result();


async function user() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if(!response.ok) {
        throw new Error(`Request failed`);
    }
    const responseJson = await response.json();
    return responseJson;
    } catch (error) {
        console.error(`Error`, error);
        throw error;
    }
}

async function result2() {
    console.log(await user());
}
result2();