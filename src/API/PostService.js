import axios from "axios";

export default class PostService {
    static async GetAll(limit = 10, page = 1) {
        const posts = await axios.get("https://jsonplaceholder.typicode.com/posts", {
            params: {
                _limit: limit,
                _page: page,
            }
        })
        return posts
    }

    static async GetPostById(id, limit = 10, page = 1) {
        const post = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id, {
            params: {
                _limit: limit,
                _page: page,
            }
        })
        return post
    }

    static async GetCommentsById(id, limit = 10, page = 1) {
        const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
            params: {
                _limit: limit,
                _page: page,
            }
        })
        return post
    }
}