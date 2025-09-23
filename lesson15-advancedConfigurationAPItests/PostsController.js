const axios = require("axios");

class PostsController {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
    });
  }

  async getPosts(postId) {
    return await this.axiosInstance.get(`/posts/${postId}`);
  }

  async getAllPosts() {
    return await this.axiosInstance.get("/posts");
  }

  async addPosts() {
    return await this.axiosInstance.post("/posts");
  }
}

module.exports = new PostsController();
