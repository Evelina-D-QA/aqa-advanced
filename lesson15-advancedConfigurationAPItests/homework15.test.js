const axios = require("axios");
const PostsController = require('./PostsController');
 
describe("Get tests", () => {
  test("get some test, [/posts/4,1,]", async () => {
    const response1 = await PostsController.getPosts(4);
    const response2 = await PostsController.getPosts(1);
    const response3 = await PostsController.getPosts(7);
    const response4 = await PostsController.getPosts(10);
    
    console.log(response1.data);
    expect(response1.status).toBe(200);
    expect(response1.data.title).toBe("eum et est occaecati");

    console.log(response2.data);
    expect(response2.status).toBe(200);

    console.log(response3.data);
    expect(response3.status).not.toBe(201);

    console.log(response4.data);
    expect(response4.status).toEqual(200);
    expect(response4.data.title).toBe("optio molestias id quia eum");
    
  });
  
  test("get all posts, [/posts]", async () => {
    const response = await PostsController.getAllPosts();
    
    expect(response.data).toHaveLength(100);
    expect(response.status).toBe(200);
  });
});


describe("Post tests", () => {
  test("Add post 101, [/posts]", async () => {
    const responseAddPost = await PostsController.addPosts( 
        {
        userId: 1,
        id: 101,
        title: "test 101 title",
        body: "test 101 body",
      },
    );
    console.log(responseAddPost);
    console.log(responseAddPost.data);
    expect(responseAddPost.status).toBe(201);
  });

  test("Add post 102, [/posts]", async () => {
    const responseAddPost = await PostsController.addPosts( 
        {
        userId: 1,
        id: 102,
        title: "test 102 title",
        body: "test 102 body",
      },
    );
    console.log(responseAddPost.data);
    expect(responseAddPost.status).toBe(201);
  });

  test("Add post 103, [/posts]", async () => {
    const responseAddPost = await PostsController.addPosts(
      {
        userId: 1,
        id: 103,
        title: "test 103 title",
        body: "test 103 body",
      },
    );
    console.log(responseAddPost.data.id);
    expect(responseAddPost.status).toBe(201);
    expect(responseAddPost.data.title).toBe("test 103 title");
  });
});