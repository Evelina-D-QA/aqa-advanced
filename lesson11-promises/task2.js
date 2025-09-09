function todo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1');
}
todo()
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => {console.error(`Error: `, error);
    })


function user() {
    return fetch('https://jsonplaceholder.typicode.com/users/1');
}
user()
    .then(response => response.json())
    .then(userInfo => console.log(userInfo))
    .catch(error => {console.error(`Error:`, error);
    })


Promise.all([todo(), user()])
    .then(([todo, user]) => {
        console.log(`Promise.All:`, todo, user);
    })
    .catch(error => {console.error(`Error:`, error)
    });

    
Promise.race([todo, user])
    .then((result) => {
        console.log(`First promise:`, result);
    })
    .catch(error => {console.error(`Error`, error)
    })