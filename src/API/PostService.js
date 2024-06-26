import axios from "axios";

export default class PostService {
    static async GetAll() {
        try {
            const posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
            return posts.data
        } catch (err) {
            console.error(err);
        }
    }
}