const axios = require('axios');


describe('Get tests', () => {

    test ('first get test, [/posts/4]', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/4');
    console.log(response.data);
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('eum et est occaecati');
    })

    test ('second get test, [/posts/7]', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/7');
        console.log(response.data);
        expect(response.status).toBe(200);
    
    })

    test ('third get test, [/posts/1]', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response.data);
        expect(response.status).not.toBe(201);
    })

    test ('fourth get test, [/posts/10]', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/10');
        console.log(response.data);
        expect(response.status).toEqual(200);
        expect(response.data.title).toBe('optio molestias id quia eum');
    })

    test ('fifth get test, [/posts]', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        expect(response.data).toHaveLength(100);
        expect(response.status).toBe(200);
    })

})

describe ('Post tests', () => {
    
    test ('Add post 101, [/posts]', async () => {
        const responseAddPost = await axios.post('https://jsonplaceholder.typicode.com/posts', {
           
        "userId": 1,
        "id": 101,
        "title": "test 101 title",
        "body": "test 101 body"
        })
    console.log(responseAddPost);
    console.log(responseAddPost.data);
    expect(responseAddPost.status).toBe(201);
    
    })

    test ('Add post 102, [/posts]', async () => {
        const responseAddPost = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            
            "userId": 1,
            "id": 102,
            "title": "test 102 title",
            "body": "test 102 body"

        })
        console.log(responseAddPost.data);
        expect(responseAddPost.status).toBe(201);
    })

    test ('Add post 103, [/posts]', async () => {
        const responseAddPost = await axios.post('https://jsonplaceholder.typicode.com/posts', {

            "userId": 1,
            "id": 103,
            "title": "test 103 title",
            "body": "test 103 body"
        })
        console.log(responseAddPost.data.id);
        expect(responseAddPost.status).toBe(201);
        expect(responseAddPost.data.title).toBe('test 103 title')
    })
})